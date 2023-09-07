module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:i18next/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "i18next"
    ],
    "rules": {
        "react/jsx-indent": [2, 2],
        "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx", ".tsx"] }],
        "import/no-unresolved": "off",
        "no-unused-vars": "warn",
        "react/require-default-props": "off",
        // "i18next/no-literal-string": "off",
        '@typescript-eslint/strict-boolean-expressions': 'warn',
        '@typescript-eslint/naming-convention': 'warn',
        "i18next/no-literal-string": ["off", { markupOnly: true }],
        'react/react-in-jsx-scope': 'off'
    }
}
