---
sidebar_position: 3
---

# LLM Context

One of the great hidden use cases for the `/packages` endpoint is using it as more deterministic context for Large Language Models (LLMs) by feeding it the JSON response of the crate or crates you are interested in using in your project.

## POST `/packages/`

```bash
curl -X POST http://localhost:8080/packages \    
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"name": "serde", "version": "1.0.0"}' \
  -v
```

## Example

For example, assume you are using [Continue](https://continue.dev) to build a Rust project for E2EE (End-to-End Encryption) group chats, and you want to feed all the intelligence about an MLS (Message Layer Security) crate you are using to the LLM to get better suggestions for the project. 

With Continue, you can build a custom slash‑command using the SDK that programmatically calls your REST API, processes the JSON, and streams results back. This is similar to how users configure /commit_message commands. 

Here is an example of how you could do this:

```javascript
async function uploadBinaryFile() {
  const filePath = 'MobiFlightWasmModule.wasm'; // Adjust this for Node or File input in browser
  const formData = new FormData();
  
  // If in browser:
  // const file = document.querySelector('input[type="file"]').files[0];
  // formData.append("file", file);

  // If in Node.js (with `fs` and `form-data`):
  const fs = require('fs');
  const path = require('path');
  const FormData = require('form-data');
  const form = new FormData();
  form.append("file", fs.createReadStream(path.join(__dirname, filePath)));

  const response = await fetch('http://localhost:8080/binary', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      // Let `form.getHeaders()` supply `Content-Type` if in Node
      ...(form.getHeaders ? form.getHeaders() : {})
    },
    body: form
  });

  const result = await response.text();
  console.log('Response:', result);
}
```

You could also use the `fetch` MCP to fetch the crate intelligence and feed it to the LLM assuming you have an API key for Platform Logos. 