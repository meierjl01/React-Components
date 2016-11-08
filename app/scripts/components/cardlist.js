import React from 'react';
import Card from './card';
import data from '../data';
import Avatar from './avatar';

export default React.createClass({
  render() {
    // console.log(this.props.data);
    let allCards = this.props.data.map((card, i, arr) => {
      console.log(card);
      return <Avatar key={i} data={card} />
    })
    return (
      <ul id="card-list">{allCards}</ul>
    )
  }
});
