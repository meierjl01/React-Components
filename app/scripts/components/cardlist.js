import React from 'react';
import Card from './card';
import data from '../data';

export default React.createClass({
  render() {
    let allCards = data.map((card, i, arr) => {
      return <Card data={data[i]} />
    })
    return (
      <ul id="card-list">{allCards}</ul>
    )
  }
});
