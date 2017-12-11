import React from "react";
import { Link } from "react-router-dom";

class FooterNav extends React.Component {
  state = { showOverlay: false };

  render() {
    const { showOverlay } = this.state;
    return (
      <footer>
        <div className="enquire nav-item" onClick={() => this.setState({ showOverlay: !showOverlay })}>
          <span className="fa fa-envelope" />
        </div>
        <Link to="/" className="home nav-item">
          <span className="fa fa-home" />
        </Link>
        <Link to="/blog" className="blog nav-item">
          <span className="fa fa-rss" />
        </Link>
        <div className={`overlay ${showOverlay ? "show" : "none"}`}>
          <h3>Get in touch</h3>
          <div className="contact">
            <form className="enquiry-form">
              <div className="row">
                <label for="name" className="col-xs-6">
                  <input type="text" id="name" placeholder="Name" name="name" />
                </label>
                <label for="email" className="col-xs-6">
                  <input type="email" id="email" placeholder="Email" name="_replyto" />
                </label>
              </div>
              <div className="row">
                <label for="message" className="col-xs-12">
                  <textarea id="message" placeholder="Message" name="message" />
                </label>
              </div>
              <p className="response" />
              <input type="hidden" name="_subject" value="New email from Strataspatial Design" />
              <input type="hidden" name="_cc" value="meghan.kradolfer@gmail.com" />
              <button id="submit">Send</button>
            </form>
          </div>
        </div>
      </footer>
    );
  }
}

export default FooterNav;
