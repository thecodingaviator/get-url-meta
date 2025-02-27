# URL Metadata API Server

This server is a simple Node.js application built with Express that fetches metadata for URLs using the [url-metadata](https://www.npmjs.com/package/url-metadata) package. It provides two endpoints:

- **/api/getMeta**: Returns metadata for a predefined URL.
- **/api/getMeta/:url**: Returns metadata for a user-specified URL.

---

## Prerequisites

- [Node.js](https://nodejs.org/en/) (v10 or later recommended)
- [npm](https://www.npmjs.com/)

---

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   This command installs all required packages.

---

## Running the Server

You can start the server using the following command:

```bash
node index.js
```

The server listens on port `9000` by default, or it will use the port specified in the `PORT` environment variable.

When the server is running, you should see a console message like:

```plaintext
Running on 9000
```

---

## API Endpoints

### 1. GET `/api/getMeta`

- **Description:**  
  Returns metadata for the predefined URL: `https://bit.ly/2ePIrDy`.

- **Usage Example:**

  ```bash
  curl http://localhost:9000/api/getMeta
  ```

- **Response:**  
  A JSON object containing metadata of the specified URL. If an error occurs, a JSON response with an error message is returned with a 404 status code.

### 2. GET `/api/getMeta/:url`

- **Description:**  
  Returns metadata for a URL provided as a URL parameter. The parameter is processed by replacing any occurrence of `&;` with `/` and prepending `https://` to the string.

- **Usage Example:**

  Suppose you want metadata for `example.com/path` (encoded appropriately if necessary):

  ```bash
  curl http://localhost:9000/api/getMeta/example.com&;path
  ```

  The server will convert this to `https://example.com/path` before fetching the metadata.

- **Response:**  
  A JSON object containing metadata for the specified URL. If an error occurs (e.g., invalid URL or metadata cannot be retrieved), the server responds with a 404 status and an error message in JSON.

---

## Code Overview

- **Express Setup:**  
  The server uses Express to handle routing. `body-parser` is configured to handle URL-encoded payloads, and `cors` is enabled to allow cross-origin requests.

- **Metadata Retrieval:**  
  The `url-metadata` package is used to fetch metadata for the URLs. Each endpoint handles errors by returning a 404 status code along with an error message if metadata retrieval fails.

- **Port Configuration:**  
  The server listens on port `9000` or a port specified in the environment variable `PORT`.

---

## Troubleshooting

- **Server not starting:**  
  - Ensure all dependencies are installed correctly.
  - Verify that Node.js is installed and updated.
  - Check for any port conflicts if the specified port is already in use.

- **Error in fetching metadata:**  
  - Ensure the URL provided is correct and accessible.
  - Check the console for any error logs for more details.

---
