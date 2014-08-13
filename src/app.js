requirejs.config({
    baseUrl: 'src',
    paths: {
        react: '../bower_components/react/react.min.js',
        immutable: '../node_modules/immutable/dist/Immutable.js'
    }
});

requirejs(['react', 'immutable', 'stratus'], function(react) {
    Stratus.init();
    Stratus.render();
});