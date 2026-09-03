import Reac from "react";
import Categorise from "../component/Categorise";
import Products from "../component/Products";
// import ImgCard from "../component/ImgCard";
// import BeautyEssentials from "../component/BeautyEssentials";
function Home() {


  return (
    <>
      <div className="home-container">
        <section className="hero">
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
        <section class="cards-container">

          <div class="card card1">
            <div class="overlay"></div>

            <div class="card-content">
              <h3>Chosen By Influencers</h3>
              <p>Beauty Experts Approved</p>
            </div>
          </div>

          <div class="card card2">
            <div class="overlay"></div>

            <div class="card-content">
              <h3>Carefully Crafted</h3>
              <p>Created After Years Of Research</p>
            </div>
          </div>

          <div class="card card3">
            <div class="overlay"></div>

            <div class="card-content">
              <h3>15% Off Only This Week</h3>
              <p>Anti-Aging Essentials</p>
            </div>
          </div>

          <div class="card card4">
            <div class="overlay"></div>

            <div class="card-content">
              <h3>Prevent Dry, Flaky Skin</h3>
              <p>Deep Hydration Formula</p>
            </div>
          </div>

        </section>
        <Products />
          <section class="beauty-banner">

        <div class="banner-overlay"></div>

        <div class="banner-content">

            <span class="small-title">
                LIMITLESS COLLECTION
            </span>

            <h1>
                Find The Perfect Beauty
                Essentials
            </h1>

            <p>
                Thoughtfully crafted products designed to nourish,
                protect, and enhance your natural glow.
            </p>

            <button>
                Shop Now
            </button>

        </div>

    </section>


    <section class="banner">

        <div class="banner-image">
            <img src="https://www.akanshaherbal.com/wp-content/uploads/2025/12/banner-product-image.png" 
                 alt="Hair Serum"/>
        </div>

        <div class="banner-content">

            <span class="small-title">FEEL AND GLOW</span>

            <h1>
                Deeply Nourishing Hair Serum
                For Glowing & Healthy Hair
            </h1>

            <p>
                Our premium hair serum is enriched with vitamins and essential oils
                to restore shine, strengthen roots, and protect hair from daily damage.
            </p>

            <div class="features">

                <div class="feature">
                    <span class="icon">✓</span>
                    <span>Strong & Smooth</span>
                </div>

                <div class="feature">
                    <span class="icon">✓</span>
                    <span>Frizz-Free Finish</span>
                </div>

                <div class="feature">
                    <span class="icon">✓</span>
                    <span>Damage Repair</span>
                </div>

                <div class="feature">
                    <span class="icon">✓</span>
                    <span>100% Natural</span>
                </div>

            </div>

            <button class="shop-btn">Shop Now</button>

        </div>

    </section>

      </div>
    </>
  );
}
export default Home;