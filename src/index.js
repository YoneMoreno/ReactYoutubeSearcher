/*Create a new component. And make it creates some HTML*/

/*Accept the HTML generated by the component and put it on the web*/

import React from 'react';
import ReactDOM from 'react-dom';

const App = function () {
    return <div>We have our first component</div>
};

ReactDOM.render(<App/>, document.querySelector('.container'));