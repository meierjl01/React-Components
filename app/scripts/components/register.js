import React from 'react';

export default React.createClass ({
  render() {
    return (
        <div className="register">
          <h4>Register Below:</h4>
          <input type="email" id="email" placeholder="Eamil" />
          <input type="password" id="password" placeholder="Password" />
          <input type="password" id="confirm-password" placeholder="Confirm Password" />
          <input type="submit" id="login" value="Register" />
        </div>
    )
  }
});
