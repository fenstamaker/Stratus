/** @jsx React.DOM */

var $pipe = function pipe(...args) {
    return {
        $first: (fn, ...rest) => {
            return pipe(fn.apply(null, args.concat(rest)));
        },
        $last:  (fn, ...rest) => {
            return pipe(fn.apply(null, rest.concat(args)));
        },
        $do: () => {
            if ( args.length < 2 ) {
                return args[0];
            }
            return args;
        }
    };
};

module.exports = $pipe;