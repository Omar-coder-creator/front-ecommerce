import { useNavigate } from "react-router";
const Home = () => {
  const nav = useNavigate()
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to ShopMate</h1>
          <p>Your one-stop shop for the latest trends and exclusive offers.</p>
          <button onClick={()=>nav('/products')} id="shop-now">Shop now</button>
        </div>
      </section>

      

    </div>
  );
};

export default Home;
