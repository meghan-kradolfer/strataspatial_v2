import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import { fetchMusicPosts } from '../../actions/contentful/music-posts';

class BlogView extends Component {
  componentWillMount() {
    this.props.fetchMusicPosts();
  }
  renderPosts() {
    return this.props.musicPosts.map((post, index) => {
      const data = post.fields
      return (
        <article key={index}>
          <h3>{data.title}</h3>
          <p>{data.artist}</p>
          <p>{data.album}</p>
          <Link to={`/music-post/${post.sys.id}`} className="nav-item">
            view
      </Link>
        </article>
      );
    });
  }
  render() {
    return (
      <div>
        <h2>Our Music</h2>
        {this.renderPosts()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    musicPosts: state.musicPosts.all
  };
}

export default connect(mapStateToProps, { fetchMusicPosts })(BlogView);
