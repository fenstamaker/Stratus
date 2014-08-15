/** @jsx React.DOM */

var _partial = (function() {
    return function partial(fn, ...args) {
        return function(...rest) {
            return fn.apply(args.concat(rest));
        }
    }
})();
