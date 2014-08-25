/** @jsx React.DOM */

var React = require('React');

var Paragraph = React.createClass({
    render: function() {
        return <p>{this.props.text}</p>;
    }
});

module.exports = Paragraph;

