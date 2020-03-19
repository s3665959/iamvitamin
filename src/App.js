import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';
const wooConfig = require( './wooConfig' );
const  WooCommerceAPI = require('woocommerce-api');

const WooCommerce = new WooCommerceAPI({
	url: wooConfig.siteUrl,
	consumerKey: wooConfig.consumerKey,
	consumerSecret: wooConfig.consumerSecret,
	wpAPI: true,
	version: 'wc/v1'
});

class App extends Component{
  constructor(){
    super();

    this.state = {

      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    WooCommerce.get("products")
    fetch('http://iamvitamin.com/wp-json/wc/v3/products?filter[limit]=-1&consumer_key=ck_45172b0b3e837b04f08194104c58d46a027d1ef7&consumer_secret=cs_e38cd92e669bb2d7ea111afad300670158daa51d')
    .then(response => response.json())
    .then(products => this.setState({monsters: products}))
    .then(products => console.log(products));
  }

  handleChange = e =>
  this.setState({ searchField: e.target.value });

  render(){
    const { monsters, searchField } = this.state; 
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes( searchField.toLowerCase())

      )
    return (
      <div className="App">
      <h1> สินค้าใหม่ </h1>
      <SearchBox
      placeholder='search for products'
      handleChange= {this.handleChange}
      />
      <CardList monsters={filteredMonsters}/>
      </div>
    );

  }
}
export default App;
