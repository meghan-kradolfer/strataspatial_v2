import React from "react";
import Logo from "../../components/Logo";

const Home = props => (
  <main className="home">
    <video id="video" autoPlay muted loop>
        <source src="http://strataspatialdesign.com/assets/videos/strataspatial-smoke2.mp4" type="video/mp4" />
    </video>
    <section class="container">
     <Logo size="large" />
    </section>
  </main>
);

export default Home;
