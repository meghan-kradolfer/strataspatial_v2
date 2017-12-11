import React from "react"

class Logo extends React.Component {
  render() {
    return (
      <h1 className={`logo ${this.props.size}`}>Strataspatial Design</h1>
    )
  }
}

export default Logo
