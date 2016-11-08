import React from 'react';
import Card from './card';
import data from '../data'

export default React.createClass({
  render() {
    return (
      <nav className="nav">
        <a href="#cards">All Cards</a>
        <a href="#create">Create A Card</a>
        <a href="#card1">Card 1</a>
        <a href="#card2">Card 2</a>
        <a href="#card3">Card 3</a>
        <a href="#card4">Card 4</a>
        <a href="#card5">Card 5</a>
      </nav>
    )
  }
});
