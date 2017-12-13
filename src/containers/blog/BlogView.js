import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import { fetchPosts } from '../../actions/contentful/posts';
import Logo from "../../components/Logo";

class BlogView extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  renderPosts(posts) {
    return posts.map((post, index) => {
      const data = post.fields;
      const images = post.images;
      console.log(images[0].file.url);
      return (
        <article key={index} className="col-xs-4">
          <div className="img" style={{backgroundImage: `url(${images[0].file.url})`}}></div>
          <h3>{data.title}</h3>
          <Link to={`/blog-post/${post.sys.id}`}>
            Read More
          </Link>
        </article>
      )
    });
  }
  render() {
    return (
      <main className="blog-view container">
        <section className="blog-header">
          <Logo size="small" />
        </section>
        <section className="row">
          {this.props.posts.items ? this.renderPosts(this.props.posts.items) : "hello"} 
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
