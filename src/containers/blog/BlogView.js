import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import Moment from 'react-moment';

import { fetchPosts } from '../../actions/contentful/posts';
import Logo from "../../components/Logo";
import BlogImage from "../../containers/blog/BlogImage";
import BlogPost from '../../containers/blog/BlogPost';
import Modal from '../../components/Modal';

class BlogView extends Component {
  constructor(){
    super();
    this.state = { postId: false };
    this.handleClick = this.handleClick.bind(this);
    this.removePost = this.removePost.bind(this);
  }
  componentWillMount() {
    this.props.fetchPosts();
  }
  handleClick(postId) {
    this.setState({
      postId: postId
    })
  }
  removePost() {
    this.setState({
      postId: false
    })
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
        {this.state.postId ? <Modal close={this.removePost}><BlogPost postId={this.state.postId} /></Modal> : false}
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.all
  };
}

export default connect(mapStateToProps, { fetchPosts })(BlogView);
