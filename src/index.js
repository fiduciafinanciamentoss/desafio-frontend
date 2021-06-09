import React from 'react';
import ReactDOM from 'react-dom';
//import Root from './pages/Root';
import App from './App';


//ReactDOM.render( <Root />,document.getElementById('root'));

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

