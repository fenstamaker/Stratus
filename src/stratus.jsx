/** @jsx React.DOM */

var React = require('React');
var Immutable = require('Immutable');
var Article = require('./components/article.js');

var $pipe = require('./macros/pipe.js');

React.renderComponent(<Article />, document.getElementById('container'));

function plus(a, b) {
    return a + b;
}

$pipe(1, 2)
    .$first(plus, 2)
    .$do();
