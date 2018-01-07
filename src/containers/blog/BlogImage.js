import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAsset } from '../../actions/contentful/asset';

class BlogImage extends Component {
	constructor() {
		super();
		this.state = { loaded: false };
	}

	componentWillMount() {
		this.props.fetchAsset(this.props.id);
	}

	render() {
		const image = this.props.assets[this.props.id];
		return image ? (
			<div className="img-parent">
				{this.state.loaded ? <div className="img" style={{ backgroundImage: `url(${image.file.url})` }} /> : <div className="img-loading" />}
				<img
					style={this.state.loaded ? { display: 'none' } : {}}
					src={image.file.url}
					alt={`Strataspatial - ${image.title}`}
					onLoad={() =>
						setTimeout(
							function() {
								this.setState({ loaded: true });
							}.bind(this),
							500
						)}
				/>
			</div>
		) : null;
	}
}

function mapStateToProps(state) {
	return {
		assets: state.assets
	};
}

export default connect(mapStateToProps, { fetchAsset })(BlogImage);
