import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app';

const app = <App/>;

ReactDom.render(
  app,
  document.getElementById('root')
);
