 'use strict';
 
 var Curry = (function() {
     return function(fn) {
         var j = [];
         if ( arguments.length > 1 ) {
             j = arguments.slice(1);
         }
         
         return function(k) {
             return fn.apply(this, j.concat(k));
         }
     }
 })();
