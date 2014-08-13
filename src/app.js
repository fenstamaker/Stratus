requirejs.config({
    baseUrl: 'src',
    paths: {
        react: '../bower_components/react/react.min.js',
        immutable: '../node_modules/immutable/dist/Immutable.js'
    }
});

requirejs(['stratus'], function(Stratus) {
    Stratus.init();
    Stratus.render();
});