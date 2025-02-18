module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "tsconfig.json",
        tsconfigRootDir: __dirname,
        sourceType: "module",
    },
    plugins: ["@typescript-eslint/eslint-plugin"],
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    ignorePatterns: [".eslintrc.js"],
    rules: {
        // "@typescript-eslint/no-unused-vars": "warn" // default implicit rule
        // "@typescript-eslint/no-unused-vars": "off",

        // "quotes":["error","backtick",{"avoidEscape":true}],default implicit rule

        "eqeqeq": ["error", "always"], // Enforces === instead of ==

        "no-dupe-else-if": "error", // throw an error for duplicate else if conditions.

        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "off",
    },
};
