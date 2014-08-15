/** @jsx React.DOM */
    
var ParagraphTransducer = (function() {
   return function(input) {
        return Pipe(input, [
            ParagraphReducer.save,
            ParagraphReducer.emit
        ]);
    }
})();