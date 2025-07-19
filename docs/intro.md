---
sidebar_position: 1
---

# Getting Started

Let's discover **Platform Logos in less than 5 minutes**.

## What is Platform Logos?

Platform Logos is a modular and fair-source API platform for security processes such as Rust package intelligence and Binary Composition Analysis. It was created by [Atelier Logos](https://www.atelierlogos.studio).

With it, you can use simple cURL requests to get deep intelligence about the Rust packages you use, or the binaries you build. We built, and are building this platform with flexibility and modularity in mind, to allow you to use it in any way you see fit.

```
curl -X POST http://localhost:8080/binary \    
  -H "Authorization: Bearer YOUR_API_KEY" \
  -F "file=@MobiFlightWasmModule.wasm" \
  -v
```

Shoot, you could even use the BCA endpoint to reverse engineer and publish cracks, although we are not endorsing any such activity 😇. 

## How to get started?

Sign up for a 14-day free trial of either a specific service, or the full platform via the [pricing page](/pricing).

Then you can login to the [dashboard](https://www.atelierlogos.studio/dashboard).
