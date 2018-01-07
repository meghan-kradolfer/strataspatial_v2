import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../../actions/contentful/post';
import { fetchAsset } from '../../actions/contentful/asset';
import Logo from '../../components/Logo';
import BlogImage from './BlogImage';

class BlogPost extends Component {
	componentDidMount() {
		this.props.fetchPost(this.props.postId);
	}
	componentWillUnmount() {
		this.props.fetchPost();
	}
	renderPost(post) {
		return (
			<div className="post">
				<div className="blog-header">
					<Logo size="small" /> <h3>{post.title}</h3>
				</div>
				<div className="row">
					<div className="col-xs-12 content">
						<BlogImage id={post.image[0].sys.id} />
						<h4>{post.title}</h4>
						<p>{post.post}</p>
					</div>
				</div>
			</div>
		);
	}

	render() {
		return this.props.post ? this.renderPost(this.props.post.fields) : null;
	}
}

function mapStateToProps(state) {
	return {
		post: state.post.post,
		assets: state.assets
	};
}

export default connect(mapStateToProps, { fetchPost, fetchAsset })(BlogPost);
