# ECMAScript Try Operator Demo

A quick starter for [tc39-try](https://github.com/sxzz/tc39-try) - demonstrating the [ECMAScript Try Operator](https://github.com/arthurfiorette/proposal-try-operator) proposal implementation.

> ⚠️ **For demo and toy-level projects only - not for production use!**

## About the Try Operator

The [ECMAScript Try Operator](https://github.com/arthurfiorette/proposal-try-operator) is a stage 0 proposal that introduces a new syntax for error handling. Instead of using try-catch blocks, you can use the `try` operator to handle errors more elegantly:

```typescript
// Traditional try-catch
let result1
try {
  result1 = riskyFunction()
} catch (error) {
  // or handle error
  console.error(error)
}

// With try operator
const result2 = try riskyFunction() // Returns Result
```

## Features

This demo project showcases full toolchain integration for the try operator:

- ✅ **TypeScript** - Full type support with transformations
- ✅ **Bundler** - Vite and more bundlers integration with unplugin
- ✅ **Prettier** - Code formatting support
- ✅ **ESLint** - Linting with proper syntax recognition
- ✅ **Development** - Hot reload and dev server support powered by Vite

## Quick Start

1. **Clone and install dependencies:**

   ```bash
   git clone https://github.com/sxzz/tc39-try-demo
   cd tc39-try-demo
   pnpm install
   ```

2. **Install VS Code Extension (for TypeScript support):**

   Install the [TS Macro extension](https://marketplace.visualstudio.com/items?itemName=zhiyuanzmj.vscode-ts-macro) for proper syntax highlighting and IntelliSense support of the try operator:

   ```
   ext install zhiyuanzmj.vscode-ts-macro
   ```

   Or search for "TS Macro" in the VS Code Extensions marketplace.

3. **Run the demo:**

   ```bash
   pnpm dev
   ```

## Project Structure

```
├── src/
│   └── index.ts          # Demo code using try operator
├── package.json          # Dependencies and scripts
├── vite.config.ts        # Vite + unplugin configuration
├── ts-macro.config.ts    # TypeScript macro configuration
├── tsconfig.json         # TypeScript configuration
├── eslint.config.js      # ESLint configuration
└── prettier.config.js    # Prettier configuration
```

## Configuration

### Vite Integration

```typescript
// vite.config.ts
import Try from "tc39-try/unplugin"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [Try.vite()],
})
```

### TypeScript Macro

```typescript
// ts-macro.config.ts
import volar from "tc39-try/volar"

export default {
  plugins: [volar()],
}
```

## Available Scripts

- `pnpm dev` - Run development server with hot reload
- `pnpm build` - Build for production
- `pnpm lint` - Run ESLint
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm format` - Format code with Prettier

## Contributing

This is a demo project. For the main implementation, contribute to [tc39-try](https://github.com/sxzz/tc39-try).

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.svg'/>
  </a>
</p>

## License

[MIT](./LICENSE) License © 2025 [Kevin Deng](https://github.com/sxzz)
