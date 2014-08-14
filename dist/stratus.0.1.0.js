'use strict';
// Source: build/components/paragraph.js
/** @jsx React.DOM */
var RenderableParagraph = (function(React) {
    return React.createClass({
        render: function() {
            return React.DOM.p(null, this.props.text, ": ", this.props.date.toTimeString());
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
            return RenderableParagraph({text: this.state.text, date: this.state.date})
        }
    })
})(React);
// Source: build/stratus.js
/** @jsx React.DOM */
var p = React.renderComponent(EditableParagraph(null), document.getElementById('container'));

setInterval(function() {
    p.setState({date: new Date()});
}, 500);

