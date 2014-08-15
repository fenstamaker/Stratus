/** @jsx React.DOM */

var Paragraph = (function(React) {
    return React.createClass({
        render: function() {
            return <p contentEditable="true">{this.props.text}</p>;
    }});
})(React);

