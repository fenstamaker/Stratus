'use strict';
// Source: build/es5/reducers/paragraph-reducer.js
var ParagraphReducer = (function() {
  return {
    save: function(input) {
      return input;
    },
    emit: function(input) {
      return input;
    }
  };
})();

// Source: build/es5/transducers/paragraph-transducer.js
var ParagraphTransducer = (function() {
  return function(input) {
    return Pipe(input, [ParagraphReducer.save, ParagraphReducer.emit]);
  };
})();

// Source: build/es5/components/paragraph.js
var Paragraph = (function(React) {
  return React.createClass({render: function() {
      return React.DOM.p(null, this.props.text, ": ", this.props.date.toTimeString());
    }});
})(React);

// Source: build/es5/stratus.js
'use strict';
setInterval(function() {
  var p = React.renderComponent(Paragraph({
    text: "Initial State",
    date: new Date()
  }), document.getElementById('container'));
}, 500);
