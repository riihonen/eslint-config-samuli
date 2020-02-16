module.exports = {
    parser : 'babel-eslint',
    env    : {
        browser : true,
        es6     : true
    },
    extends : [
        'plugin:react/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'eslint-config-samuli/js-syntax'
    ],
    settings : {
        react : {
            version : 'detect' // React version, default to the latest React stable release
        },
        propWrapperFunctions : [ 'forbidExtraProps' ] // The names of any functions used to wrap the
        // propTypes object, e.g. `forbidExtraProps`.
        // If this isn't set, any propTypes wrapped in
        // a function will be skipped.
    },
    parserOptions : {
        ecmaFeatures : { jsx : true },        
        ecmaVersion  : 2018,
        sourceType   : 'module'
    },
    plugins : [
        'react'
    ],

    rules : {        
        // 'react/prop-types'          : ['error'],
        // 'react/no-unknown-property' : ['error', { ignore : [] }],
    }
}
