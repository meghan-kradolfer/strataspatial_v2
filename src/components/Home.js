import React from "react";
import Logo from "./Logo";

class Home extends React.Component {
    render() {
        return (
            <section className="home">
                <video id="video" autoPlay muted loop>
                    <source src="http://strataspatialdesign.com/assets/videos/strataspatial-smoke2.mp4" type="video/mp4" />
                </video>
                <div className="container">
                    <Logo size="large" />
                </div>
            </section>
        );
    }
}

export default Home;