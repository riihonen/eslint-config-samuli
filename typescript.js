module.exports = {
    extends  : ['plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended', 'eslint-config-samuli/js-syntax'],
    parser   : '@typescript-eslint/parser',
    plugins  : ['@typescript-eslint', 'prettier', 'no-autofix'],
    settings : {
        'import/parsers' : {
            '@typescript-eslint/parser' : ['.ts', '.tsx'],
        },
        'import/resolver' : {
            typescript : {},
        },
    },
    parserOptions : {
        ecmaVersion : 2018,
        sourceType  : 'module'
    },
}
