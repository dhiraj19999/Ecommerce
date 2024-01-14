import React from "react";
import { Link } from "react-router-dom";
import Productcard from "../components/product-card";
function Home() {
  const addToCartHandler = () => {};
  return (
    <div className="home">
      <section></section>
      <h1>
        Latest Products
        <Link className="findmore" to={"/search"}>
          More
        </Link>
      </h1>

      <main className="main">
        <Productcard
          productId="jsjs"
          name="mabook"
          price={123}
          stock={6}
          handler={addToCartHandler}
          photo="https://images.samsung.com/is/image/samsung/assets/in/computers/galaxy-book3/14951_GB3-PDP-banner_1440x450.jpg"
        />
      </main>
    </div>
  );
}

export default Home;
