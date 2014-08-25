/** @jsx React.DOM */

var _partial = function partial(fn, ...args) {
    return function(...rest) {
        return fn.apply(args.concat(rest));
    }
};

module.exports = _partial;
