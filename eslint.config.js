const standard = require('eslint-config-standard')

module.exports = [
    standard,
    {
        env: {
            browser: true,
        },
        globals: {
            myCustomGlobal: "readonly",
        },
        parserOptions: {
            ecmaVersion: 2022,
            sourceType: "module"
        }
        // ...other config
    }
] 