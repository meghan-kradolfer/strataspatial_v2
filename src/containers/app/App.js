import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Element } from 'react-scroll';

import { postMounted } from '../../actions/post-mounted';
import Home from '../home/HomeView';
import BlogView from '../blog/BlogView';
// import tracker from '../../utils/google-analytics';
import BlogPost from '../blog/BlogPost';
import Modal from '../../components/Modal';

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
			transform: document.documentElement.scrollTop > window.innerHeight - 64
		});
	}
	removePost() {
		this.props.postMounted();
	}
	render() {
		return (
			<div>
				<main className={`transform-${this.state.transform} ${this.props.postSelected ? 'fixed' : ''}`}>
					<Element name="home" className="element">
						<Home />
					</Element>
					<div className="navigation">
						<Link className="nav-item" activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}>
							<span className="fa fa-home" />
							<span className="link-text">Home</span>
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
					<Element name="blog" className="element">
						<BlogView />
					</Element>
				</main>
				{this.props.postSelected ? (
					<Modal close={this.removePost}>
						<BlogPost postId={this.props.postSelected} />
					</Modal>
				) : (
					false
				)}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		postSelected: state.postSelected
	};
}

export default connect(mapStateToProps, { postMounted })(App);
