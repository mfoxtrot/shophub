import React, { Component } from 'react';
import ProductCard from '/src/ProductCard';

export default class Catalog extends React.Component {

  productsList() {
    return(
      this.props.products.map((product) =>
        <li>{product}</li>
      )
    )
  }

  render() {
    const products = this.props.products;
    const listItems = products.map((product) =>
      <ProductCard key={product.id.toString()} imageUrl={product.imageUrl} title={product.title} price={product.price}/>
    )
    return (
      <div>
        {listItems}
      </div>
    )
  }
}
