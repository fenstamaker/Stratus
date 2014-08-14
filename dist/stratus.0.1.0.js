'use strict';
// Source: src/macros/curry.js
var Curry = (function() {
     return function(fn) {
         var j = [];
         if ( arguments.length > 1 ) {
             j = arguments.slice(1);
         }
         
         return function(k) {
             return fn.apply(this, j.concat(k));
         }
     }
 })();

// Source: src/macros/thread.js
var Thread = (function() {
    return function thread(input, functions) {
        if ( functions.length < 1 ) {
            return input;
        }
        return thread(functions[0](input), functions.splice(0));
    }
})();

// Source: build/reducers/paragraph-reducer.jsx.js
/** @jsx React.DOM */
var ParagraphReducer = (function() {
    return {
        save: function(input) {
            return input;
        },
        emit: function(input) {
            return input;
        }
    }
})();
// Source: build/transducers/paragraph-transducer.jsx.js
/** @jsx React.DOM */
var ParagraphTransducer = (function(Thread, ParagraphReducer) {
    return function(input) {
        return Thread(input, [
            ParagraphReducer.save(),
            ParagraphReducer.emit()
        ]);
    };
})(Thread, ParagraphReducer);
// Source: build/components/paragraph.jsx.js
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
// Source: build/stratus.jsx.js
/** @jsx React.DOM */
var p = React.renderComponent(EditableParagraph(null), document.getElementById('container'));

setInterval(function() {
    p.setState({date: new Date()});
}, 500);

