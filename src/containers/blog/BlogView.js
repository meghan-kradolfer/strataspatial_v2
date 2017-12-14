import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import Moment from 'react-moment';

import { fetchPosts } from '../../actions/contentful/posts';
import Logo from "../../components/Logo";
import BlogImage from "../../containers/blog/BlogImage";

class BlogView extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  renderPosts(posts) {
    return posts.map((post, index) => {
      const data = post.fields;
      return (
        <article key={index} className="col-xs-4">
          <Link to={`/blog-post/${post.sys.id}`}>
            <BlogImage id={data.image[0].sys.id} />
          </Link>
          <h4>{data.title}</h4>
          <p><Moment date={post.sys.createdAt} format="LLL" /></p>
        </article>
      )
    });
  }
  render() {
    return (
      <main className="blog view container">
        <section className="blog-header">
          <Logo size="small" />
        </section>
        <section className="row">
          {this.props.posts.items ? this.renderPosts(this.props.posts.items) : "loading"} 
        </section>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.all
  };
}

export default connect(mapStateToProps, { fetchPosts })(BlogView);
