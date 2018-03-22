import React from "react";
import PropTypes from 'prop-types';

const propTypes = {
  size: PropTypes.string
};

class Logo extends React.Component {
  render() {
    return (
      <h1 className={`logo ${this.props.size}`}>Strataspatial Design</h1>
    );
  }
}

Logo.propTypes = propTypes;

export default Logo;
