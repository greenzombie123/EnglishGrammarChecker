import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      semi: "error",
      quotes: "error",
    },
  },
  {
    ignores: ["./dist/main.js", "webpack.config.js", "babel.config.js", "test/*.test.js"],
  },
  eslintConfigPrettier,
];