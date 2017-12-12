import React from 'react';
import ReactDOM from 'react-dom';

import { API_KEY } from './keys';

// Create a new component. This component should produce
// some HTML
const App = () => {
  return <div>hi</div>;
};


// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(
  <App/>, // instanciate App Class
  document.querySelector('.container')
);
