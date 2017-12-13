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
      <main className="blog-post container">
      <section className="blog-header">
        <Logo size="small" />
      </section>
      <section className="row">
        <div className="col-xs-12">
        <BlogImage id={post.image[0].sys.id} />
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        </div>
      </section>
    </main>
    );
  }

  render() {
    console.log(this.props);
    return (
      <div>{this.props.post ? this.renderPost(this.props.post.fields) : null}</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    post: state.post.post,
    assets: state.assets
  };
}

export default connect(mapStateToProps, { fetchPost, fetchAsset })(BlogPost);
