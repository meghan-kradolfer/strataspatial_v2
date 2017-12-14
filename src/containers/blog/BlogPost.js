import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../../actions/contentful/post';
import { fetchAsset } from '../../actions/contentful/asset';
import Logo from "../../components/Logo";
import BlogImage from "../../containers/blog/BlogImage";

class BlogPost extends Component {
  componentWillMount() {
    const { match: { params } } = this.props;
    this.props.fetchPost(params.postId);
  }

  renderPost(post) {
    return (
      <main className="blog post container">
        <section className="blog-header">
          <Logo size="small" /> <h3>{post.title}</h3>
        </section>
        <section className="row">
          <div className="col-xs-12">
            <BlogImage id={post.image[0].sys.id} />
            <h4>{post.title}</h4>
            <p>{post.post}</p>
          </div>
        </section>
      </main>
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
