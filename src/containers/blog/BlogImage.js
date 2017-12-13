import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAsset } from '../../actions/contentful/asset';

class BlogImage extends Component {
  componentWillMount() {
    this.props.fetchAsset(this.props.id); 
  }

  render() {
    const image = this.props.assets[this.props.id];
    return image ? <div className="img" style={{backgroundImage: `url(${image.file.url})`}}></div> : null
  }
}

function mapStateToProps(state) {
  return {
    assets: state.assets
  };
}

export default connect(mapStateToProps, { fetchAsset })(BlogImage);
