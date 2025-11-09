import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

export default [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        rules: {
            indent: [
                "error",
                4,
                {
                    SwitchCase: 1,
                    ignoredNodes: ["PropertyDefinition"],
                },
            ],
            "no-tabs": "error",
            quotes: ["error", "double", { avoidEscape: true }],
            "@typescript-eslint/indent": "off", // Disable to avoid conflicts with base indent rule
        },
    },
    {
        ignores: ["dist/", "node_modules/", ".astro/"],
    },
];
