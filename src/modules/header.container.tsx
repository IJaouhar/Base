import * as React from 'react';
import { Navbar } from 'react-bootstrap';

const logo = require('../statics/images/png/logo_white.png')

class HeaderComponent extends React.Component<{}> {
  render() {

    return (
      <Navbar bg="dark">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="auto"
            height="30"
            className="d-inline-block align-top"
            alt="logo Pushground"
          />
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default HeaderComponent;