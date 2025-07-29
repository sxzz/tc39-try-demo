import { fileURLToPath } from "node:url"

export default {
  semi: false,
  plugins: [fileURLToPath(import.meta.resolve("tc39-try/prettier"))],
}
