import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';

import { fetchPosts } from '../../actions/contentful/posts';
import { postMounted } from '../../actions/post-mounted';
import BlogImage from "./BlogImage";

class BlogView extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  handleClick(postId) {
    this.props.postMounted(postId);
  }
  renderPosts(posts) {
    return posts.map((post, index) => {
      const data = post.fields;
      return (
        <article key={index} className="col-xs-4 fade-in">
          <span onClick={() => this.handleClick(post.sys.id)}>
          <BlogImage id={data.image[0].sys.id} />
          </span>
          <h4>{data.title}</h4>
          <p><Moment date={post.sys.createdAt} format="LLL" /></p>
        </article>
      )
    });
  }
  render() {
    return (
      <section className="blog container">
        <div className="row view">
          {this.props.posts.items ? this.renderPosts(this.props.posts.items) : "loading"} 
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.all,
    postSelected: state.postSelected
  };
}

export default connect(mapStateToProps, { fetchPosts, postMounted })(BlogView);
