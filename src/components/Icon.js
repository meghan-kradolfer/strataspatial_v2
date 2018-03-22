import React from 'react';
import PropTypes from 'prop-types';
import iconPaths from '../assets/icons.js';

const propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
    handleClick: PropTypes.func
};

class Icon extends React.Component {
    className() {
        return `icon-svg white ${this.props.className}`;
    }
    render() {
        return <span
            className={this.className()}
            dangerouslySetInnerHTML={{ __html: iconPaths[this.props.icon] }}
            onClick={() => this.props.handleClick()} />;
    }
}

Icon.propTypes = propTypes;

export default Icon;
