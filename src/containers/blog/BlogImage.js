import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchAsset } from '../../actions/contentful/asset';

function mapStateToProps(state) {
	return {
		assets: state.assets
	};
}

const propTypes = {
	id: PropTypes.string,
	fetchAsset: PropTypes.func,
	assets: PropTypes.object
};

class BlogImage extends Component {
	constructor(props) {
		super(props);
		this.state = { loaded: false };
	}
	componentWillMount() {
		this.props.fetchAsset(this.props.id);
	}
	render() {
		const image = this.props.assets[this.props.id];
		return image ? (
			<div className="img-loaded">
				{this.state.loaded ? <div className="img" style={{ backgroundImage: `url(${image.file.url})` }} /> : <div className="img-loading" />}
				<img
					style={this.state.loaded ? { display: 'none' } : {}}
					src={image.file.url}
					alt={`Strataspatial - ${image.title}`}
					onLoad={() =>
						setTimeout(
							function () {
								this.setState({ loaded: true });
							}.bind(this),
							500
						)}
				/>
			</div>
		) : null;
	}
}

BlogImage.propTypes = propTypes;

export default connect(mapStateToProps, { fetchAsset })(BlogImage);
