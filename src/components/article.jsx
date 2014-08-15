/** @jsx React.DOM */
'use strict';

var Article = (function(React, Paragraph) {
    return React.createClass({
        render: function() {
            var paragraphs = {};
            for ( var i = 0; i < 10; i++ ) {
                paragraphs['p' + i] = <Paragraph text="test" />;
            }
            return <div>{paragraphs}</div>;
        }
    })
})(React, Paragraph);