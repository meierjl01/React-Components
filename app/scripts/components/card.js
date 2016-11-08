import React from 'react';
import Nav from './nav';

export default React.createClass({
  render() {
    return (
      <div>
        <Nav />
      <div id="card">
        <h3 id="title">{this.props.data.name}</h3>
        <img src={this.props.data.avatar} />
        <div id="weapon">Weapon: {this.props.data.weapon}</div>
        <div id="characteristics">Characteristics: {this.props.data.characteristics}</div>
        <div id="from">From: {this.props.data.from}</div>
        <div id="funFact">Fun Fact: {this.props.data.funFact}</div>
        </div>
        </div>
    )
  }
});
