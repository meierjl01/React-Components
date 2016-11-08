import React from 'react';
import data from '../data';

export default React.createClass({
  render() {
    return (
    <li id="avatarli">
      <a href={'#card/'+this.props.data.name}>
      <img src={this.props.data.avatar} />
      </a>
    </li>
  )
  }
});
