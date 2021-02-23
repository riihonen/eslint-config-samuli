module.exports = {

    rules : {
        indent                        : ['error', 4, { SwitchCase : 1 }],
        'linebreak-style'             : ['error', 'unix'],
        quotes                        : ['error', 'single'],
        semi                          : ['error', 'never'],
        'object-curly-spacing'        : ['error', 'always'],
        'key-spacing'                 : ['error', { beforeColon : true, align : 'colon' }],
        'func-call-spacing'           : ['error', 'never'],
        'space-in-parens'             : ['error', 'always'],
        'space-before-blocks'         : ['warn', 'always'],
        'space-before-function-paren' : ['error', 'never'],
        'space-infix-ops'             : ['error', { int32Hint : false }],
        'comma-spacing'               : ['error', { before : false, after : true }],
        'no-console'                  : ['warn'],
        'quote-props'                 : ['error', 'as-needed'],
        'guard-for-in'                : 'error',
        'prefer-arrow-callback'       : 'error',
        'arrow-parens'                : ['error', 'as-needed', { requireForBlockBody : false }],
        'prefer-template'             : 'error',
        'template-curly-spacing'      : ['error', 'always'],
        'prefer-const'                : 'error',
        'no-trailing-spaces'          : 'error',
        'no-multi-spaces'             : ['error', { exceptions : { VariableDeclarator : true } }],
        'no-unused-vars'                    : ['warn', { argsIgnorePattern : '^_' }],
        '@typescript-eslint/no-unused-vars' : ['warn', { argsIgnorePattern : '^_' }],
        'keyword-spacing'             : [
            'error', {
                before    : true,
                after     : true,
                overrides : {
                    if   : { after : false },
                    else : { after : false }
                }
            }
        ],
    }
}
