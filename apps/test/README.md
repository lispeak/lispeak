# Test

`apps/test` is a minimal Turbo Node.js application written in TypeScript.

## Available scripts

- `pnpm --filter test dev` – run the entry point with `tsx` for quick iteration
- `pnpm --filter test build` – compile all sources to `dist`
- `pnpm --filter test start` – execute the compiled output
- `pnpm --filter test lint` – lint the `src` tree via ESLint
- `pnpm --filter test check-types` – run the TypeScript compiler in `--noEmit` mode
