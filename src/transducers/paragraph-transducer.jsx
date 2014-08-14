/** @jsx React.DOM */
'use strict';

var ParagraphTransducer = (function(Thread, ParagraphReducer) {
    return function(input) {
        return Thread(input, [
            ParagraphReducer.save(),
            ParagraphReducer.emit()
        ]);
    };
})(Thread, ParagraphReducer);