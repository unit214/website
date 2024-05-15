---
title: 'Simplifying Local HTTPS with DockyMcProxy 🚀'
date: '2024-05-15T16:57:00'
tags: ['Tools', 'Devtools', 'Docker', 'Network', 'NGINX', 'Rust']
author: 'Keno Dreßel'
previewText: 'Rust-based tool for setting up a local HTTPS reverse proxy with Docker support. 🚀'
previewImage: '/blogposts/preview/docky-mc-proxy-preview.png'
---

This is a blog post on how and why I created [DockyMcProxy](https://github.com/unit214/docky-mc-proxy).

## From Frustration to Innovation

One spring day, while working with the [node-oidc-provider](https://github.com/panva/node-oidc-provider), I faced a
frustrating challenge. The OIDC provider required an HTTPS certificate and the matrix server I was integrating the OIDC
Provider with refused to accept self-signed ones, making local development cumbersome. I needed a solution that provided
trusted certificates and simplified the reverse proxy setup for my local environment.

## The Magic of Traefik.me

In my search for a solution, I discovered [traefik.me](https://traefik.me/). Similar to nip.io, traefik.me is a magic
domain name that provides wildcard DNS for any IP address. This service allows you to map IP addresses to domain names
effortlessly, making it simple to access virtual hosts on your development web server from various devices on your local
network. For example:

- `10.0.0.1.traefik.me` resolves to `10.0.0.1`
- `www.10.0.0.1.traefik.me` resolves to `10.0.0.1`
- `mysite.traefik.me` resolves to `127.0.0.1`

Traefik.me also provides SSL certificates for these domains, allowing you to create secure connections for your local
services. This is a great feature but requires a reverse proxy to serve the certificates and redirect the incoming
requests to the correct ports.

## Rust to the Rescue

To address this challenge, I created [DockyMcProxy](https://github.com/unit214/docky-mc-proxy) using Rust. Why Rust?
Mostly because I wanted to learn Rust and its ecosystem. I had dabbled with the language before, but this project gave
me a chance to dive deeper into its capabilities.

## How DockyMcProxy Works

<img src="/blogposts/preview/docky-mc-proxy-preview.png" alt="drawing" width="500"/>

DockyMcProxy is designed to streamline the process of setting up a local HTTPS reverse proxy
using [NGINX](https://www.nginx.com/). Here's a high-level overview of how it works:

1. **Setup**: DockyMcProxy is configured using environment variables or a CLI. Each environment variable defines a
   subdomain and the port it should redirect to. For example, setting `D_EXAMPLE=8080` will
   redirect `example.traefik.me` to `localhost:8080`.

2. **NGINX Templates**: DockyMcProxy uses a template-based approach to manage [NGINX](https://www.nginx.com/)
   configuration files. When you add a new subdomain, it generates an NGINX configuration file from a template.

3. **SSL Certificates**: DockyMcProxy serves the SSL certificates provided by traefik.me to create a secure connection
   for each subdomain.

4. **NGINX Reload**: After making changes to the configuration (such as adding or removing a subdomain), DockyMcProxy
   reloads NGINX to apply the changes without downtime.

5. **Logging**: The DockyMcProxy Docker container by default tails logs from NGINX and provides them to the user for
   debugging purposes.

## Using DockyMcProxy

DockyMcProxy can be used in two ways: as a standalone Rust binary or as a Docker container. At the moment, the Docker
container is the recommended way to use DockyMcProxy, as it simplifies the setup process. The standalone binary is
useful for local development and testing but requires more manual configuration.

### Running with Docker

To set up a subdomain `example.traefik.me` that redirects to `localhost:8080`, run:

```bash
docker run --rm --network=host --name "dockymcproxy" -e "D_EXAMPLE=8080" -d unit214/dockymcproxy
```

### CLI Commands

DockyMcProxy’s CLI supports several commands for managing your local proxy settings. Note that the CLI is only necessary
when you do not configure the environment variables directly. The following commands are available:

- `init`: Initializes the environment by creating new domains based on environment variables.
- `list`: Lists existing subdomains and ports.
- `add -s <subdomain> -p <port>`: Adds a new subdomain and port.
- `remove -s <subdomain>`: Removes an existing subdomain.

Examples:

```bash
# Add a new subdomain
docker exec dockymcproxy dmp add --subdomain example --port 8080

# Remove a subdomain
docker exec dockymcproxy dmp remove --subdomain example
```

## Next Steps

DockyMcProxy is a work in progress, and I have several ideas for future enhancements:

- **BYOC (Bring Your Own Certificates)**: Allow users to provide their own SSL certificates for custom domains.
- **Dynamic Configuration**: Support dynamic configuration updates without restarting the proxy.
- **Improved CLI**: Enhance the CLI with more features and better error handling.

## Get Involved

DockyMcProxy was created to solve a specific problem, but it can be a valuable tool for many developers. Your
contributions and feedback are welcome! Check out the [GitHub repository](https://github.com/unit214/docky-mc-proxy) for
more details and to get started.

## Conclusion

DockyMcProxy simplifies the setup of a local HTTPS reverse proxy, making it easier to work with services requiring
trusted certificates. Whether you're working with `node-oidc-provider` or any other service, DockyMcProxy has you
covered.

Give it a try, and let me know how it works for you!
