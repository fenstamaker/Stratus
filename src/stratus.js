requirejs.config({
    baseUrl: 'src',
    paths: {
        react: '../bower_components/react/react.min.js',
        jsx: '../bower_components/react/JSXTransformer.js',
        immutable: '../node_modules/immutable/dist/Immutable.js'
    }
});

requirejs(['react', 'immutable'], function(react) {
    
});