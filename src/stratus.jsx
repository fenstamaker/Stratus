/** @jsx React.DOM */
'use strict';


var p = React.renderComponent(<EditableParagraph />, document.getElementById('container'));

setInterval(function() {
    p.setState({date: new Date()});
}, 500);

