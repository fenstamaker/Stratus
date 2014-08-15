/** @jsx React.DOM */
'use strict';

setInterval(function() {
    var p = React.renderComponent(<Paragraph text="Initial State" date={new Date()} />, document.getElementById('container'));
}, 500);
 
