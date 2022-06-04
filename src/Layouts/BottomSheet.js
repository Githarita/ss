import React, { useEffect, useState } from "react";
import "./Layout.css";
import "./Topnavbar.css";
// import image1 from "../../assets/shoe1.png";
// import image2 from "../../assets/shoe2.png";
// import image3 from "../../assets/shoe3.png";
// import image4 from "../../assets/nft1.png";
// import image5 from "../../assets/nft2.png";
function BottomSheet() {
  const [hidenav, setHideNav] = useState("topnavbar");

  useEffect(() => {
    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
      if (lastScrollY < window.scrollY) {
        setHideNav("topnavbar");
      } else {
        setHideNav("topnavbar--hide");
      }

      lastScrollY = window.scrollY;
    });
  });
  return (
    <div className={`${hidenav}`}>
      <div className="topnavbar__body">
        <div className="topnavbar__img">
          <img
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687"
            alt="User"
            className="topnav__img"
          />
        </div>
        {/* <section className="p-slider">
              {/* heading */}
        {/* <div className="product-slider-heading">Product Slider</div> */}

        {/* product-box */}
        {/* <div className="product-box">

                {/* Discount */}
        {/* <span className="p-discount">-20%</span> */}

        {/* img container */}
        {/* <div className="p-img-container">
                  <div className="p-img">
                    <a href="#">
                      <img src={image1} alt="Front" className="p-img-front" />
                      <img src={image2} alt="Back" className="p-img-back" />
                    </a>
                  </div>
                </div> */}

        {/* Text */}
        {/* <div className="p-box-text">
                  {/* category   */}
        {/* <div className="product-category">
                    <span>Air Force 1 </span>
                  </div> */}
        {/* Title */}
        {/* <a href="#" className="product-title">
                  Nike Dunk Low Retro White Black Panda (2021)
                  </a> */}
        {/* price buy */}
        {/* <div className="price-buy">
                    <span className="p-price">1200$</span>
                    <a href="#" className="p-buy-btn">Buy Now</a>
                  </div> 
                </div> 
            </section> */}
      </div>
    </div>
  );
}

export default BottomSheet;
