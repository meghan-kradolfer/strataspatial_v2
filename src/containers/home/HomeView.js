import React from "react"

const Home = props => (
  <main className="home">
    <video id="video" autoPlay muted loop>
        <source src="http://strataspatialdesign.com/assets/videos/strataspatial-smoke2.mp4" type="video/mp4" />
    </video>
    <section class="container">
      <h1>Strataspatial Design</h1>
    </section>
  </main>
);

export default Home;
