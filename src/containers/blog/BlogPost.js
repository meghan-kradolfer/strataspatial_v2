import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../../actions/contentful/post';

class BlogPost extends Component {
  componentWillMount() {
    const { match: { params } } = this.props;
  }
  render() {
    if (this.props.post) {
      return (
        <section>
          <h3>{this.props.post.title}</h3>
        </section>
      );
    } else {
      return (
        <p>Nothing found</p>
      )
    }

  }
}

function mapStateToProps(state) {
  return {
    post: state.post.post
  };
}

export default connect(mapStateToProps, { fetchPost })(BlogPost);
