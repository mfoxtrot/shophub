import React, { Component } from 'react';
import Catalog from '/src/Catalog.js'
import {products} from '/constants/products'

export default class CatalogPage extends React.Component  {
  render() {
    return (
      <Catalog products={products}/>
    )
  }
}
