module.exports = {

    env : {
        browser : true,
        es6     : true
    },
    extends : [
        'plugin:react/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        './js-syntax'
    ],
    settings : {
        react : {
            createClass : 'createReactClass', // Regex for Component Factory to use,
            pragma      : 'React',  // Pragma to use, default to "React"
            version     : '16.6', // React version, default to the latest React stable release
            flowVersion : '0.53' // Flow version
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
        'react/prop-types'          : [0],
        'react/no-unknown-property' : [1, { ignore : [] }],
    }
}
