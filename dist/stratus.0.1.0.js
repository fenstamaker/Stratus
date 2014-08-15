'use strict';
// Source: build/es5/macros/partial.js
var _partial = (function() {
  return function partial(fn) {
    for (var args = [],
        $__0 = 1; $__0 < arguments.length; $__0++)
      $traceurRuntime.setProperty(args, $__0 - 1, arguments[$traceurRuntime.toProperty($__0)]);
    return function() {
      for (var rest = [],
          $__1 = 0; $__1 < arguments.length; $__1++)
        $traceurRuntime.setProperty(rest, $__1, arguments[$traceurRuntime.toProperty($__1)]);
      return fn.apply(args.concat(rest));
    };
  };
})();

// Source: build/es5/macros/pipe.js
var _pipe = (function() {
  return function pipe(input) {
    return {
      input: input,
      first: function() {
        for (var args = [],
            $__0 = 0; $__0 < arguments.length; $__0++)
          $traceurRuntime.setProperty(args, $__0, arguments[$traceurRuntime.toProperty($__0)]);
        return thread(fn.apply(this.input, args));
      },
      last: function() {
        for (var args = [],
            $__1 = 0; $__1 < arguments.length; $__1++)
          $traceurRuntime.setProperty(args, $__1, arguments[$traceurRuntime.toProperty($__1)]);
        return thread(fn.apply(this.input, args));
      }
    };
  };
})();

// Source: build/es5/components/paragraph.js
var Paragraph = (function(React) {
  return React.createClass({render: function() {
      return React.DOM.p({contentEditable: "true"}, this.props.text);
    }});
})(React);

// Source: build/es5/components/article.js
'use strict';
var Article = (function(React, Paragraph) {
  return React.createClass({render: function() {
      var paragraphs = {};
      for (var i = 0; i < 10; i++) {
        $traceurRuntime.setProperty(paragraphs, 'p' + i, Paragraph({text: "test"}));
      }
      return React.DOM.div(null, paragraphs);
    }});
})(React, Paragraph);

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

// Source: build/es5/stratus.js
'use strict';
React.renderComponent(Article(null), document.getElementById('container'));
