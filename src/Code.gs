function onOpen(e) {
  SpreadsheetApp.getUi()
    .createAddonMenu()
    .addItem('Open QuickBooks Sidebar', 'showSidebar')
    .addToUi();
}

function showSidebar() {
  const html = HtmlService.createHtmlOutputFromFile('index')
    .setTitle('QuickBooks Connection');
  SpreadsheetApp.getUi().showSidebar(html);
}

function getAuthorizationUrl() {
  const clientId = 'ABmYOqsphdA8Q8Yc38iBsX0Ii245ndMLSlIEmHhCNXwCHqjPGr';
  const redirectUri = ScriptApp.getService().getUrl();
  const scope = 'com.intuit.quickbooks.accounting';
  const state = Utilities.getUuid();

  const authUrl = `https://appcenter.intuit.com/connect/oauth2?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}&state=${state}`;
  
  return authUrl;
}

function handleCallback(code) {
  const clientId = 'ABmYOqsphdA8Q8Yc38iBsX0Ii245ndMLSlIEmHhCNXwCHqjPGr';
  const clientSecret = 'dDUr9PMhc4eyx4i7vGdKBWXENFUpmVGdxXfphYdP';
  const redirectUri = ScriptApp.getService().getUrl();

  const tokenUrl = 'https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer';
  const payload = {
    grant_type: 'authorization_code',
    code: code,
    redirect_uri: redirectUri
  };

  const options = {
    method: 'post',
    headers: {
      Authorization: 'Basic ' + Utilities.base64Encode(clientId + ':' + clientSecret)
    },
    payload: payload
  };

  try {
    const response = UrlFetchApp.fetch(tokenUrl, options);
    const tokenInfo = JSON.parse(response.getContentText());
    
    PropertiesService.getUserProperties().setProperty('QB_ACCESS_TOKEN', tokenInfo.access_token);
    PropertiesService.getUserProperties().setProperty('QB_REFRESH_TOKEN', tokenInfo.refresh_token);
    
    return { success: true, message: 'Successfully connected to QuickBooks!' };
  } catch (error) {
    return { success: false, message: 'Error connecting to QuickBooks: ' + error.toString() };
  }
}

function sendTokensToBackend() {
  const accessToken = PropertiesService.getUserProperties().getProperty('QB_ACCESS_TOKEN');
  const refreshToken = PropertiesService.getUserProperties().getProperty('QB_REFRESH_TOKEN');
  
  const backendUrl = 'https://BackendURL.com';
  
  const options = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify({ accessToken, refreshToken })
  };
  
  try {
    UrlFetchApp.fetch(backendUrl, options);
    return { success: true, message: 'Tokens sent to backend successfully!' };
  } catch (error) {
    return { success: false, message: 'Error sending tokens to backend: ' + error.toString() };
  }
}

function fetchQuickBooksData() {
  const accessToken = PropertiesService.getUserProperties().getProperty('QB_ACCESS_TOKEN');
  
  if (!accessToken) {
    return { success: false, message: 'Not connected to QuickBooks. Please connect first.' };
  }
  
  const COMPANY_ID = '9341453069337754'
  const apiUrl = `https://quickbooks.api.intuit.com/v3/company/${COMPANY_ID}/query`;
  const query = "SELECT * FROM Customer MAXRESULTS 10";
  
  const options = {
    method: 'get',
    headers: {
      'Authorization': 'Bearer ' + accessToken,
      'Accept': 'application/json'
    },
    payload: {
      query: query
    }
  };
  
  try {
    const response = UrlFetchApp.fetch(apiUrl, options);
    const data = JSON.parse(response.getContentText());
    
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.clear();
    sheet.appendRow(['Id', 'DisplayName', 'CompanyName', 'Active']);
    
    data.QueryResponse.Customer.forEach(customer => {
      sheet.appendRow([customer.Id, customer.DisplayName, customer.CompanyName, customer.PrimaryEmailAddr?.Address]);
    });
    
    return { success: true, message: 'Data fetched and displayed successfully!' };
  } catch (error) {
    return { success: false, message: 'Error fetching QuickBooks data: ' + error.toString() };
  }
}