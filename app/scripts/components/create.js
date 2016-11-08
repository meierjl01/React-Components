import React from 'react';
import Nav from './nav';

export default React.createClass({
    render() {
        return (
          <div id="create">
              <Nav />
              <h3>Create Your Own Zelda Card Here:</h3>
            <input type = "text"
            placeholder = "Name" />
            <input type = "text"
            placeholder = "Weapon Of Choice" />
            <input type = "text"
            placeholder = "Characteristics" />
            <input type = "text"
            placeholder = "From" />
            <input type = "text"
            placeholder = "Fun Fact" />
            <input type = "submit" value="Create" />
          </div>
        )
    }
});
