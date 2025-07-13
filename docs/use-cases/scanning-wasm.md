---
sidebar_position: 2
---

# Scanning a WASM binary for secrets

A powerful use case for the Platform Logos API is scanning a WASM or other binary for secrets to prevent leaks. 

## POST `/binary/{binary_hash}/scan-secrets`

```bash
curl -X POST http://localhost:8080/binary/scan-secrets \    
  -H "Authorization: Bearer fp_7e9f2c80-b1d4-4c7b-9df3-b0e8e4aa0101" \
  -F "file=@MobiFlightWasmModule.wasm" \
  -v
```

## Tools Used

- [Rust](https://www.rust-lang.org/)
- [goblin](https://docs.rs/goblin/latest/goblin/)
- [Wasmarser](https://docs.rs/wasmparser/latest/wasmparser/)
- [Regex](https://docs.rs/regex/latest/regex/)
