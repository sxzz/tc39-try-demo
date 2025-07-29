import { GLOB_JS, GLOB_TS, sxzz } from "@sxzz/eslint-config"
import * as tsParser from "tc39-try/eslint-typescript-parser"
import * as jsParser from "tc39-try/espree"

export default sxzz().append(
  {
    files: [GLOB_TS],
    languageOptions: { parser: tsParser },
  },
  {
    files: [GLOB_JS],
    languageOptions: { parser: jsParser },
  },
  {
    rules: {
      "import/no-default-export": "off",
    },
  },
)
