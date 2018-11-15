import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

class Price extends React.Component {
  render() {
    return (
      <span>{this.props.value} &#8381;</span>
    )
  }
}

class Image extends React.Component {
  render() {
    return (
      <img src={this.props.src} height={this.props.height} width={this.props.width} alt={this.props.alt} />
    )
  }
}

class TextBox extends React.Component {
  render() {
    return (
      <span>{this.props.text}</span>
    )
  }
}


export default class ProductCard extends React.Component {
  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle>
            <TextBox text={this.props.title}></TextBox>
          </CardTitle>
          <Image src={this.props.imageUrl} height="100" width="100" alt={this.props.title}></Image>
          <CardSubtitle>
            <Price value={this.props.price}></Price>
          </CardSubtitle>
        </CardBody>
      </Card>
    )
  }
}
