'use strict';

var Thread = (function() {
    return function thread(input, functions) {
        if ( functions.length < 1 ) {
            return input;
        }
        return thread(functions[0](input), functions.splice(0));
    }
})();
