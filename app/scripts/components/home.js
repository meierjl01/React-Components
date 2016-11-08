import React from 'react';

export default React.createClass ({
  render() {
    return (
      <div id="home">
        <nav className="home">
          <a href="#register">Click here to register</a>
          <a href="#login">Login now</a>
        </nav>
        <div id="title">
        <h1>Zelda Cards</h1>
        <img id="triforce" src="../../assets/images/triforce.png" />
      </div>
      </div>
    )
  }
});
