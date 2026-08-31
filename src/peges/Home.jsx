import Reac from "react";
import Categorise from "../component/Categorise";
import Products from "../component/Products";
function Home() {


  return (
    <>
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">FLAT 15% DISCOUNT</p>

          <h1>
            Proven To Tackle
            <br />
            Wrinkles & Acne
          </h1>

          <p className="hero-text">
            That treat your personality — and beauty.
          </p>

          <p className="from-price">
            From <strong>₹499</strong>
          </p>

          <button className="dark-btn">Shop Now</button>
        </div>

        <div className="hero-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL-a6BPUnrFTuRkOp6LAtK7j4qX8jzyI-WE-V_M9T6lA&s=10"
            alt="Beauty products"
          />
        </div>
      </section>

      <Categorise />

      {/* SUSTAINABILITY */}
      <section className="section sustainability">
        <div className="sustain-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8q-TPHQksoiWXaK5Ef1TtW90S4iviWVzCyI9sc3Wf2w&s=10"
            alt="Natural beauty"
          />
        </div>

        <div className="sustain-content">
          <p className="eyebrow2">WELCOME TO BEAUTY STORE</p>

          <h2>
            Our Commitment
            <br />
            To Sustainability
          </h2>

          <p>
            We create skincare that respects your skin and the planet. Our
            products are natural, sustainable, and made using ingredients you
            can trust.
          </p>

          <button className="dark-btn-more-about-us">More About Us</button>
        </div>
      </section>
      <Products />

    </>
  );
}
export default Home;