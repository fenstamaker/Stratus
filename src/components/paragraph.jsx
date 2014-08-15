/** @jsx React.DOM */

var Paragraph = (function(React) {
    return React.createClass({
        render: function() {
            return <p>{this.props.text}: {this.props.date.toTimeString()}</p>;
    }});
})(React);

