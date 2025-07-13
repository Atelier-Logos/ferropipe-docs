---
sidebar_position: 3
---

# Binary Composition Analysis

## POST `/binary`

The `/binary` endpoint ingests a binary via multipart/form-data, and returns a JSON response containing the SBOM after generating it from the binary analysis. We use the CycloneDX format for the SBOM.

```bash
curl -X POST http://localhost:8080/binary \    
  -H "Authorization: Bearer fp_7e9f2c80-b1d4-4c7b-9df3-b0e8e4aa0101" \
  -F "file=@MobiFlightWasmModule.wasm" \
  -v
```

## POST `/binary/scan-secrets`

The `/binary/scan-secrets` endpoint ingests a binary via multipart/form-data, and returns a JSON response containing the SBOM after generating it from the binary analysis. We use the CycloneDX format for the SBOM.

```bash
curl -X POST http://localhost:8080/binary/scan-secrets \    
  -H "Authorization: Bearer fp_7e9f2c80-b1d4-4c7b-9df3-b0e8e4aa0101" \
  -F "file=@MobiFlightWasmModule.wasm" \
  -v
```

## GET `/binary/{binary_hash}`

The `/binary/{binary_hash}` endpoint fetches a binary by its hash.

```bash
curl -X GET http://localhost:8080/binary/{binary_hash} \
  -H "Authorization: Bearer fp_7e9f2c80-b1d4-4c7b-9df3-b0e8e4aa0101" \
  -v
```


## GET `/binary/{binary_hash}/sbom`

The `/binary/{binary_hash}/sbom` endpoint fetches a SBOM by the hash of the binary.

```bash
curl -X GET http://localhost:8080/binary/{binary_hash}/sbom \    
  -H "Authorization: Bearer fp_7e9f2c80-b1d4-4c7b-9df3-b0e8e4aa0101" \
  -v
```
