//there is no state in this component so a functional component can be used

import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  return (
    <nav className="navbar">
      <div className="headContainer">
        <a href="/" className="nav-brand">
          {props.branding}
        </a>
      </div>
      <ul>
        <li className="nav-item">
          <a href="/" className="navLink">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="navLink">
            Other
          </a>
        </li>
      </ul>
    </nav>
  );
};

Header.defaultProps = {
  branding: "My App"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
