 'use strict';
 
 var Curry = (function() {
     return function(fn, j) {
         return function(k) {
             return fn.apply(this, j.concat(k));
         }
     }
 })();
