/** @jsx React.DOM */
    
var ParagraphDispatcher = function(input) {
    return Pipe(input, [
        ParagraphReducer.save,
        ParagraphReducer.emit
    ]);
};

module.exports = ParagraphDispatcher;