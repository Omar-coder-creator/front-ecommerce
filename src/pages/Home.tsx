import { Link } from "react-router";
const Home = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to ShopMate</h1>
          <p>Your one-stop shop for the latest trends and exclusive offers.</p>
          <Link to='/products'></Link>
        </div>
      </section>

      

    </div>
  );
};

export default Home;
