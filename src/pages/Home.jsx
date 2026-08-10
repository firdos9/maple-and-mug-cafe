import { Link } from "react-router-dom";

const Home = () => (
  <div className="home-page">
    <section className="hero">
      <h1 className="hero-title">Welcome to Maple & Mug Café</h1>
      <p className="hero-subtitle">
        Small-town charm, handcrafted quality, and the perfect cup of coffee.
      </p>
      <Link to="/menu" className="cta-button">
        Browse our Menu
      </Link>
    </section>
  </div>
);
export default Home;
