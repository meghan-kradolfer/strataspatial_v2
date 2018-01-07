import React from 'react';
import iconPaths from '../assets/icons.js';

class Icon extends React.Component {
    className() {
        return `icon-svg white ${this.props.className}`
    }
	render() {
		return <span className={this.className()} dangerouslySetInnerHTML={{ __html: iconPaths[this.props.icon] }} onClick={() => this.props.handleClick()}/>;
	}
}

export default Icon;
