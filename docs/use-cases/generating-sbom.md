---
sidebar_position: 1
---

# Generating a SBOM

One of the most common use cases for Platform Logos is generating a Software Bill of Materials (SBOM) for a Rust crate or a binary. 

The endpoint for generating a SBOM right now is only set up for a binary, but we should have it ready for crates before the summer is over. 

## POST `/binary/{binary_hash}/sbom`

```bash
curl -X POST http://localhost:8080/binary \    
  -H "Authorization: Bearer fp_7e9f2c80-b1d4-4c7b-9df3-b0e8e4aa0101" \
  -F "file=@MobiFlightWasmModule.wasm" \
  -v
```

This endpoint ingests binaries via multipart/form-data, and returns a JSON response containing the SBOM after generating it from the binary analysis. We use the CycloneDX format for the SBOM.

## Tools Used

- [CycloneDX](https://cyclonedx.org/)
- [Wasmarser](https://docs.rs/wasmparser/latest/wasmparser/)
- [Rust](https://www.rust-lang.org/)
- [goblin](https://docs.rs/goblin/latest/goblin/)

## Example Response

```json
{
  "bom": {
    "bomFormat": "CycloneDX",
    "serialNumber": "urn:uuid:12345678-1234-1234-1234-123456789012",
    "version": 1,
    "metadata": {
      "timestamp": "2022-01-01T00:00:00Z",
      "component": {
        "type": "library",
        "name": "example-library",
        "version": "1.0.0",
        "scope": "required"
      }
    },
    "components": [
      {
        "type": "library",
        "name": "example-library",
        "version": "1.0.0",
        "scope": "required"
      }
    ]
  }
}
```
