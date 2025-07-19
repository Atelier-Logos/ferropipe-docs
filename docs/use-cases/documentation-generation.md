---
sidebar_position: 4
---

# Documentation Generation

A great use case for developer experience that can be enabled with the `/packages` endpoint is documentation generation by taking the JSON intelligence about a crate and using it to generate documentation for it dynamically. 

## POST `/packages/`

```bash
curl -X POST http://localhost:8080/packages \    
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"name": "serde", "version": "1.0.0"}' \
  -v
```

## Example

Here is an example of how you could do this:

```javascript
async function generateDocumentation() {
  const response = await fetch('http://localhost:8080/packages/12345678-1234-1234-1234-123456789012');
  if (!response.ok) {
    throw new Error(`Failed to fetch package data: ${response.status}`);
  }

  const data = await response.json();
  const documentation = generateDocumentationFromData(data);
  console.log(documentation);
  return documentation;
}

/**
 * Transforms structured crate analysis data into Markdown documentation.
 */
function generateDocumentationFromData(pkg) {
  const { name, version, description, license, modules = [] } = pkg;

  let output = `# ${name} v${version}\n\n`;

  if (description) {
    output += `> ${description}\n\n`;
  }

  if (license) {
    output += `**License**: ${license}\n\n`;
  }

  if (modules.length > 0) {
    output += `## Modules\n\n`;

    for (const module of modules) {
      output += `### \`${module.name}\`\n`;
      if (module.description) {
        output += `${module.description}\n\n`;
      }

      if (module.functions && module.functions.length > 0) {
        output += `#### Functions\n\n`;
        for (const fn of module.functions) {
          output += `- \`${fn.signature}\`\n`;
          if (fn.description) {
            output += `  - ${fn.description}\n`;
          }
        }
        output += `\n`;
      }
    }
  } else {
    output += `No modules found.\n`;
  }

  return output.trim();
}
```

## Tools Used

- [Rust](https://www.rust-lang.org/)
- [goblin](https://docs.rs/goblin/latest/goblin/)
- [Wasmarser](https://docs.rs/wasmparser/latest/wasmparser/)

  