import * as React from 'react';
import './header.layout.scss';

const logo = require('../statics/images/png/logo_white.png')

class HeaderComponent extends React.Component<{}> {
  render() {

    return (
      <div className="logo-header-container">
          <img
            src={logo}
            alt="logo Pushground"
          />
      </div>
    );
  }
}

export default HeaderComponent;