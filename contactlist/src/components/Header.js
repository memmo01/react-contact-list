//there is no state in this component so a functional component can be used

import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  return (
    <div>
      <h1 style={headingStyle}>{props.branding}</h1>
    </div>
  );
};

Header.defaultProps = {
  branding: "My App"
};

const headingStyle = {
  color: "red",
  fontSize: "50px"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
