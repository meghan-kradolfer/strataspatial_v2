import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';

import { select } from '../../actions/global/select';
import Modal from '../../components/Modal';
import Home from '../../components/Home';
import Enquire from '../../components/Enquire';
import BlogView from '../blog/BlogView';
import BlogPost from '../blog/BlogPost';

function mapStateToProps(state) {
	return {
		selected: state.selected
	};
}

const propTypes = {
	select: PropTypes.func,
	selected: PropTypes.string
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { transform: false };
		this.handleScroll = this.handleScroll.bind(this);
		this.removePost = this.removePost.bind(this);
	}
	componentDidMount() {
		window.scrollTo(0, 0);
		window.addEventListener('scroll', this.handleScroll);
	}
	handleScroll() {
		this.setState({
			transform: document.documentElement.scrollTop > window.innerHeight - 64,
			top: document.documentElement.scrollTop
		});
	}
	removePost() {
		this.props.select();
	}
	render() {
		return (
			<div>
				<main className={`transform-${this.state.transform} ${this.props.selected ? 'fixed' : ''}`}>
					<Home />
					<div className="navigation">
						<Link className="nav-item" activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}>
							<span className="link-text">Home</span>
							<span className="fa fa-home" />
						</Link>
						<Link className="nav-item" activeClass="active" to="blog" spy={true} smooth={true} offset={50} duration={500}>
							<span className="link-text">Blog</span>
							<span className="fa fa-rss" />
						</Link>
						<Link className="nav-item" activeClass="active" to="enquire" spy={true} smooth={true} offset={50} duration={500}>
							<span className="link-text">Enquire</span>
							<span className="fa fa-envelope" />
						</Link>
					</div>
					<BlogView />
					<Enquire />
				</main>
				{this.props.selected ? (
					<Modal close={this.removePost}>
						<BlogPost postId={this.props.selected} />
					</Modal>
				) : (
						false
					)}
			</div>
		);
	}
}

App.propTypes = propTypes;

export default connect(mapStateToProps, { select })(App);
