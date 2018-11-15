import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import CatalogPage from './src/CatalogPage';

class App extends React.Component {

  render() {
    return(
      <CatalogPage/>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
