requirejs.config({
    baseUrl: 'src',
    paths: {
        react: '../bower_components/react/react.min.js',
        jsx: '../bower_components/react/JSXTransformer.js'
    }
});

requirejs(['react'], function(react) {
    
});