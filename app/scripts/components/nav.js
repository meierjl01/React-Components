import React from 'react';
import Card from './card';
import data from '../data'

export default React.createClass({
  render() {
    return (
      <nav className="nav">
        <a href="#cards">All Cards</a>
        <a href="#create">Create A Card</a>
        <a href="#card/Zelda">Card 1</a>
        <a href="#card/Link">Card 2</a>
        <a href="#card/Ganondorf">Card 3</a>
        <a href="#card/Skull Kid">Card 4</a>
        <a href="#card/Impa">Card 5</a>
      </nav>
    )
  }
});
