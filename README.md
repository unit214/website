# Unit 214 Website New

## Development

### 1. Prerequisites

Make sure you have Node.js >= 18 installed.

### 2. Install dependencies

Please use **yarn** so the husky hooks can work properly:

```bash
yarn install
```

### 3. Development server

The development server can be started using this command:

```bash
yarn dev
```

The development server is then running on [http://localhost:3000](http://localhost:3000).

### 4. Commit Message Convention

This repository is using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), which are mandatory to use when committing changes.

#### Allowed types:

- `build`: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- `ci`: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- `docs`: Documentation only changes
- `feat`: A new feature
- `fix`: A bug fix
- `perf`: A code change that improves performance
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- `test`: Adding missing tests or correcting existing tests

## Build with

- Next.js 14 with App Router
- React 18
- TypeScript
- Tailwind CSS 3 + [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge)
- Jest — Unit testing
- Absolute Import and Path Alias — Import components using `@/` and `~/` prefix
- ESLint — Find and fix problems in the code, also will **auto sort** imports
- Prettier — Consistent formatting
- Husky & Lint Staged - Run scripts on staged files before they are committed
- Conventional Commit Lint
- Github Actions — Check code on GitHub
- Issue Autolink — Links issue on PR creation
- Site Map — Automatically generate sitemap.xml
- VS Code Snippets

## Blogposts

See [how-to-write-blogposts.md](/blogposts/examples/how-to-write-blogposts.md).

## Copyright

Based on ts-nextjs-tailwind-starter by theodorusclarence

Copyright (C) 2023 Unit 214 GmbH.
