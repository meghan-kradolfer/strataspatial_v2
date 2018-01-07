import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from '../home/HomeView';
import BlogView from '../blog/BlogView';
import tracker from '../../utils/google-analytics';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

let transform = false;

class View extends Component {
	constructor(props) {
		super(props);
		this.state = { transform: false };
		this.handleScroll = this.handleScroll.bind(this);
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
	render() {
		return (
			<div className={`transform-${this.state.transform}`}>
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
			</div>
		);
	}
}

export default View;
