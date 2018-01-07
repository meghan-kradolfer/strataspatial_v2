import React from "react";
import Icon from "../components/Icon";

class Modal extends React.Component {
  render() {
    return (
        <div className="modal">
            <Icon icon="clear" className="close" handleClick={this.props.close}/>
            {this.props.children}
        </div>
    )
  }
}

export default Modal