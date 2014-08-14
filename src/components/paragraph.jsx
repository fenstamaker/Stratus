/** @jsx React.DOM */
'use strict';

var RenderableParagraph = (function(React) {
    return React.createClass({
        render: function() {
            return <p>{this.props.text}: {this.props.date.toTimeString()}</p>;
        }
    });
}(React));
    
var EditableParagraph = (function(React) {
    return React.createClass({
        getInitialState: function() {
            return {
                text: "Initial State",
                date: new Date()
            }
        },
        render: function() {
            return <RenderableParagraph text={this.state.text} date={this.state.date} />
        }
    })
})(React);