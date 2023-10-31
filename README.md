# Unit 214 Website New

## Build with

- Next.js 13 with App Router
- React 18
- TypeScript
- Tailwind CSS 3
- Jest — Unit testing
- Absolute Import and Path Alias — Import components using `@/` prefix
- ESLint — Find and fix problems in the code, also will **auto sort** imports
- Prettier — Consistent
- Husky & Lint Staged - Run scripts on staged files before they are committed
- Conventional Commit Lint
- Github Actions — Lint your code on PR
- Automatic Branch and Issue Autolink — Branch will be automatically created on issue **assign**, and auto linked on PR
- Site Map — Automatically generate sitemap.xml
- VS Code Snippets

### 1. Install dependencies

It is encouraged to use **yarn** so the husky hooks can work properly.

```bash
yarn install
```

### 2. Run the development server

The dev server can be started using this command:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `src/pages/index.tsx`.

### 3. Commit Message Convention

This repository is using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), it is mandatory to use it to commit changes.
