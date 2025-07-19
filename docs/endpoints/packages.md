---
sidebar_position: 1
---

# Packages

The `packages` endpoint is a crate intelligence tool that can provide deep intelligence about Rust crates, such as its dependencies, license, and more.

## POST `/packages`

The `/packages` endpoint takes the name and version of a crate as a JSON object and returns a JSON response containing the crate intelligence after generating it from the crate analysis.

```bash
curl -X POST http://localhost:8080/packages \    
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"name": "serde", "version": "1.0.0"}' \
  -v
```

## GET `/packages/{id}`

The `/packages/{id}` endpoint takes the id of a crate as a path parameter and returns a JSON response containing the crate intelligence after generating it from the crate analysis.

```bash
curl -X GET http://localhost:8080/packages/{id} \    
  -H "Authorization: Bearer YOUR_API_KEY" \
  -v
```
