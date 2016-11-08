import React from 'react';
import Nav from './nav';
import data from '../data';
import Card from './card';
import CardList from './cardlist';

export default React.createClass({
  render() {
    return (
      <div>
        <Nav />
        <h2 id="li-title">Zelda Cards:</h2>
        <CardList data={data}/>
      </div>
    )
  }
});
