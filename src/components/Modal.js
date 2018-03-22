import React from "react";
import PropTypes from 'prop-types';
import Icon from "../components/Icon";

const propTypes = {
  close: PropTypes.func,
  children: PropTypes.object
};

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }
  handleClose(e) {
    if (e.target.className === "modal") {
      this.props.close();
    }
  }
  render() {
    return (
      <div className="modal" onClick={this.handleClose}>
        <Icon icon="clear" className="close" handleClick={this.props.close} />
        {this.props.children}
      </div>
    );
  }
}

Modal.propTypes = propTypes;

export default Modal;