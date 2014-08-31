/** @jsx React.DOM */

var React = require('React');
var Paragraph = require('./paragraph.js');

var Article = React.createClass({
    render: function() {
        var paragraphs = {};
        for ( var i = 0; i < 10; i++ ) {
            paragraphs['p' + i] = <Paragraph text="test" />;
        }
        return <div>{paragraphs}</div>;
    }
});

module.exports = Article;
