import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

import { fetchPosts } from '../../actions/contentful/posts';
import { select } from '../../actions/global/select';
import BlogImage from "./BlogImage";

function mapStateToProps(state) {
  return {
    posts: state.posts,
    select: state.select
  };
}

const propTypes = {
  posts: PropTypes.object,
  fetchPosts: PropTypes.func,
  select: PropTypes.func
};

class BlogView extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentWillMount() {
    this.props.fetchPosts();
  }
  handleClick(postId) {
    this.props.select(postId);
  }
  renderPosts(posts) {
    return posts.map((post, index) => {
      const data = post.fields;
      return (
        <article key={index} className="col-4 fade-in">
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
          {this.props.posts.all.items ? this.renderPosts(this.props.posts.all.items) : "loading"}
        </div>
      </section>
    );
  }
}

BlogView.propTypes = propTypes;

export default connect(mapStateToProps, { fetchPosts, select })(BlogView);
