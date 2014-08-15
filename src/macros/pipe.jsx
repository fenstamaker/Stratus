/** @jsx React.DOM */

var _pipe = (function() {
   return function pipe(input) {
        return {
            input: input,
            first: function(...args) {
                return thread(fn.apply(this.input, args));
            },
            last: function(...args) {
                return thread(fn.apply(this.input, args));
            }
        };
    }
})();


