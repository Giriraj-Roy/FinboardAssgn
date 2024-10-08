<p align="center">
  <img src="https://img.icons8.com/?size=512&id=55494&format=png" width="20%" alt="FINBOARDASSGN-logo">
</p>
<p align="center">
    <h1 align="center">FINBOARDASSGN</h1>
</p>
<p align="center">
    <em><code>❯</code></em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/Giriraj-Roy/FinboardAssgn?style=flat&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/Giriraj-Roy/FinboardAssgn?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/Giriraj-Roy/FinboardAssgn?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/Giriraj-Roy/FinboardAssgn?style=flat&color=0080ff" alt="repo-language-count">
</p>
<p align="center">
		<em>Built with the tools and technologies:</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>

<br>


##  Overview

<code>❯ A Google Apps Script Add-on for Google Sheets</code>

 ### Approach
<details closed ><summary>Google Apps Script Backend (Code.gs)</summary>

- Created functions for add-on initialization (onOpen, showSidebar)
- Implemented QuickBooks OAuth 2.0 flow (getAuthorizationUrl, handleCallback)
- Added functions for token management and API interactions (sendTokensToBackend, fetchQuickBooksData)
</details>

<details closed ><summary>Frontend UI (index.html)</summary>

- Developed a simple React-based UI for the sidebar
- Created components for connection status, buttons for actions
</details>

<details closed ><summary>Integration</summary>

- Used google.script.run to call server-side functions from the frontend
- Implemented error handling and user feedback
- We can also use Gas Client for easy React Integration
</details>

<details closed ><summary>Data Flow</summary>

- User initiates QuickBooks connection
- OAuth flow handles authorization
- Tokens are stored and can be sent to a backend
- QuickBooks data can be fetched and displayed in the sheet
</details>

<details closed ><summary>Deployment</summary>

- Created a manifest file for Google Workspace Add-on configuration
</details>




---

##  Features

<code>❯ Fetch QuickBooks data into your own sheets</code>

---

##  Repository Structure

```sh
└── FinboardAssgn/
    ├── README.md
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── logo192.png
    │   ├── logo512.png
    │   ├── manifest.json
    │   └── robots.txt
    └── src
        ├── App.css
        ├── App.js
        ├── index.css
        └── index.js
```

---

##  Modules

<details closed><summary>.</summary>

| File | Summary |
| --- | --- |
| [package.json](https://github.com/Giriraj-Roy/FinboardAssgn/blob/main/package.json) | <code>❯ REPLACE-ME</code> |
| [package-lock.json](https://github.com/Giriraj-Roy/FinboardAssgn/blob/main/package-lock.json) | <code>❯ REPLACE-ME</code> |

</details>

<details closed><summary>public</summary>

| File | Summary |
| --- | --- |
| [index.html](https://github.com/Giriraj-Roy/FinboardAssgn/blob/main/public/index.html) | <code>❯ REPLACE-ME</code> |
| [manifest.json](https://github.com/Giriraj-Roy/FinboardAssgn/blob/main/public/manifest.json) | <code>❯ REPLACE-ME</code> |
| [robots.txt](https://github.com/Giriraj-Roy/FinboardAssgn/blob/main/public/robots.txt) | <code>❯ REPLACE-ME</code> |

</details>

<details closed><summary>src</summary>

| File | Summary |
| --- | --- |
| [App.js](https://github.com/Giriraj-Roy/FinboardAssgn/blob/main/src/App.js) | <code>❯ REPLACE-ME</code> |
| [App.css](https://github.com/Giriraj-Roy/FinboardAssgn/blob/main/src/App.css) | <code>❯ REPLACE-ME</code> |
| [index.js](https://github.com/Giriraj-Roy/FinboardAssgn/blob/main/src/index.js) | <code>❯ REPLACE-ME</code> |
| [index.css](https://github.com/Giriraj-Roy/FinboardAssgn/blob/main/src/index.css) | <code>❯ REPLACE-ME</code> |

</details>

---

##  Getting Started


###  Installation

Build the project from source:

1. Clone the FinboardAssgn repository:
```sh
❯ git clone https://github.com/Giriraj-Roy/FinboardAssgn
```

2. Navigate to the project directory:
```sh
❯ cd FinboardAssgn
```

3. Install the required dependencies:
```sh
❯ ❯ npm install
```

###  Usage

To run the project, execute the following command:

```sh
❯ ❯ npm start
```

---


<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/Giriraj-Roy/FinboardAssgn
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/Giriraj-Roy/FinboardAssgn/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=Giriraj-Roy/FinboardAssgn">
   </a>
</p>
</details>

---
