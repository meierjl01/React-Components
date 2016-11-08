import React from 'react';

export default React.createClass ({
  render() {
    return (
        <div className="login">
          <h4>Log In Below:</h4>
          <input type="email" id="email" placeholder="Eamil" />
          <input type="password" id="password" placeholder="Password" />
          <input type="submit" id="login" value="Log In" />
          <img src="../../assets/images/meme.jpg" />
        </div>
    )
  }
});
