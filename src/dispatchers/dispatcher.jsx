/** @jsx React.DOM */

var React = require('React');

var _callbacks = [];
var _promises = [];

var Dispatcher = function() {
    this.callbacks = [];
};

Dispatcher.prototype = {
    register: (callback) => {
        this.callbacks.push(callback);
        return this.callbacks.length - 1;
    },
    dispatch: (payload) => {
        var resolves = [];
        var rejects = [];

        _promises = _callbacks.map((_, i) => {
            return new Promise((resolve, reject) => {
                resolves[i] = resolve;
                rejects[i] = rejects;
            });
        });

        _callbacks.map((callback, i) => {
            Promise.resolve(callback(payload))
                .then(function() {
                    resolves[i](payload); 
                }, function() {
                    rejects[i](new Error('Dispatcher callback unsuccessful'));
                });
        });

        _promises = [];
    }
};

module.exports = Dispatcher;
