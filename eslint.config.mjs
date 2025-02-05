import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  // files: ['**/*.ts', '**/*.tsx'],
  rules: {
    // 'no-console': 'off' // allow console.log in TypeScript files
    "vue/html-self-closing": 0,
    "vue/multi-word-component-names": 0,
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "always-multiline",
      },
    ],
  },
});
