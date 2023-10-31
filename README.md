# Unit 214 Website New

## Build with

- Next.js 13 with App Router
- React 18
- TypeScript
- Tailwind CSS 3 + [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge)
- Jest — Unit testing
- Absolute Import and Path Alias — Import components using `@/` prefix
- ESLint — Find and fix problems in the code, also will **auto sort** imports
- Prettier — Consistent formatting
- Husky & Lint Staged - Run scripts on staged files before they are committed
- Conventional Commit Lint
- Github Actions — Check code on GitHub
- Automatic Branch and Issue Autolink — Branch will be automatically created on issue **assign**, and auto linked on PR
- Site Map — Automatically generate sitemap.xml
- VS Code Snippets

### 1. Install dependencies

Please use **yarn** so the husky hooks can work properly:

```bash
yarn install
```

### 2. Development server

The development server can be started using this command:

```bash
yarn dev
```

The development server is then running on [http://localhost:3000](http://localhost:3000).

### 3. Commit Message Convention

This repository is using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), which are mandatory to use when committing changes.
