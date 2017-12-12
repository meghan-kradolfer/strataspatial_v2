import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import { fetchPosts } from '../../actions/contentful/posts';
import Logo from "../../components/Logo";

class BlogView extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  renderPosts() {
    return this.props.posts.map((post, index) => {
      const data = post.fields
      return (
        <article key={index}>
          <h3>{data.title}</h3>
          <Link to={`/post/${post.sys.id}`} className="nav-item">
            view
      </Link>
        </article>
      );
    });
  }
  render() {
    return (
      <main className="blog">
        <section className="blog-header">
          <Logo size="small" />
        </section>
        {this.renderPosts()}
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
