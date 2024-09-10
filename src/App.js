import React, { useState } from "react";
import "./App.css";
import { GASClient } from "gas-client";

const { serverFunctions } = new GASClient();

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [message, setMessage] = useState("");

  const handleConnect = () => {
    // google.script.run
    //   .withSuccessHandler((url) => {
    //     window.open(url, "_blank");
    //   })
    //   .withFailureHandler((error) => {
    //     setMessage(`Error: ${error}`);
    //   })
    //   .getAuthorizationUrl();
    const helper = async () => {
      try {
        const response = await serverFunctions.getAuthorizationUrl();
        window.open(response, "_blank");
      } catch (error) {
        setMessage(`Error: ${error}`);
      }
    };
    helper();
  };

  const handleCallback = (code) => {
    // google.script.run
    //   .withSuccessHandler((result) => {
    //     setIsConnected(result.success);
    //     setMessage(result.message);
    //   })
    //   .withFailureHandler((error) => {
    //     setMessage(`Error: ${error}`);
    //   })
    //   .handleCallback(code);
    const helper = async () => {
      try {
        const result = await serverFunctions.handleCallback(code);
        setIsConnected(result.success);
        setMessage(result.message);
      } catch (error) {
        setMessage(`Error: ${error}`);
      }
    };
    helper();
  };

  const sendTokensToBackend = () => {
    // google.script.run
    //   .withSuccessHandler((result) => {
    //     setMessage(result.message);
    //   })
    //   .withFailureHandler((error) => {
    //     setMessage(`Error: ${error}`);
    //   })
    //   .sendTokensToBackend();
    const helper = async () => {
      try {
        const result = await serverFunctions.sendTokensToBackend();
        setMessage(result.message);
      } catch (error) {
        setMessage(`Error: ${error}`);
      }
    };
    helper();
  };

  const fetchData = () => {
    // google.script.run
    //   .withSuccessHandler((result) => {
    //     setMessage(result.message);
    //   })
    //   .withFailureHandler((error) => {
    //     setMessage(`Error: ${error}`);
    //   })
    //   .fetchQuickBooksData();
    const helper = async () => {
      try {
        const result = await serverFunctions.fetchQuickBooksData();
        setMessage(result.message);
      } catch (error) {
        setMessage(`Error: ${error}`);
      }
    };
    helper();
  };

  return (
    <div>
      <h2>QuickBooks Connection</h2>
      {!isConnected ? (
        <button onClick={handleConnect}>Connect to QuickBooks</button>
      ) : (
        <>
          <p>Connected to QuickBooks</p>
          <button onClick={sendTokensToBackend}>Send Tokens to Backend</button>
          <button onClick={fetchData}>Fetch QuickBooks Data</button>
        </>
      )}
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
