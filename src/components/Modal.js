import React from "react";
import Icon from "../components/Icon";

class Modal extends React.Component {
  handleClose(e) {
    if(e.target.className === "modal") {
      this.props.close();
    }
  }
  render() {
    return (
        <div className="modal" onClick={this.handleClose.bind(this)}>
            <Icon icon="clear" className="close" handleClick={this.props.close}/>
            {this.props.children}
        </div>
    )
  }
}

export default Modal