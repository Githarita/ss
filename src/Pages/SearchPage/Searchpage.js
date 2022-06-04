import React from "react";
import Body from "../../Layouts/Body";
import Bottombar from "../../Layouts/Bottombar";
import Mainlayout from "../../Layouts/Mainlayout";
import Rightbar from "../../Layouts/Rightbar";
import Sidebar from "../../Layouts/Sidebar";
import Topsearchnavbar from "../../Layouts/Topsearchnavbar";
import "./Searchpage.css";
import image1 from "../../assets/shoe1.png";
import image2 from "../../assets/shoe2.png";
import image3 from "../../assets/shoe3.png";
import image4 from "../../assets/nft1.png";
import image5 from "../../assets/nft2.png";

function Searchpage() {
  return (
    <Mainlayout>
      <Topsearchnavbar />
      <Sidebar />
      <Body>
        <div className="search__container">
          <form action="" className="search__form">
            <svg
              className="search__icon"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
            <input
              className="search__input"
              type="text"
              placeholder="Search any type of item you want."
            />
          </form>
          <div className="searchpage__section">
            <div className="searchcategory__wrapper">
              <div className="searchCategory__item">Sneaker</div>
              <div className="searchCategory__item">Apparel</div>
              <div className="searchCategory__item">Electronics</div>
              <div className="searchCategory__item">Collectible</div>
              <div className="searchCategory__item">Bags</div>
              <div className="searchCategory__item">Accessories</div>
              <div className="searchCategory__item">NFTs</div>
              <div className="searchCategory__item">Beauty</div>
            </div>
            <div className="searchproducts">
              <div className="search__see">
                <div className="search_item">
                  <img src={image3} alt="" />
                  <div className="products__itself">
                    <p className="item__name">
                      Nike Air Max luxury brands yellow color with an amazing
                      height
                    </p>
                    <div className="homeproducts__item__content">
                      <div className="homeproducts__item__priceContent">
                        <p className="homeproducts__lowest">Lowest Ask</p>
                        <p className="homeproducts__price">₦60,610</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="search_item">
                  <img src={image3} alt="" />
                  <div className="products__itself">
                    <p className="item__name">
                      Nike Air Max luxury brands yellow color with an amazing
                      height
                    </p>
                    <div className="homeproducts__item__content">
                      <div className="homeproducts__item__priceContent">
                        <p className="homeproducts__lowest">Lowest Ask</p>
                        <p className="homeproducts__price">₦60,610</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="search_item">
                  <img src={image1} alt="" />
                  <div className="products__itself">
                    <p className="item__name">
                      Nike Air Max luxury brands yellow color with an amazing
                      height
                    </p>
                    <div className="homeproducts__item__content">
                      <div className="homeproducts__item__priceContent">
                        <p className="homeproducts__lowest">Lowest Ask</p>
                        <p className="homeproducts__price">₦60,610</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="search_item">
                  <img src={image2} alt="" />
                  <div className="products__itself">
                    <p className="item__name">
                      Nike Air Max luxury brands yellow color with an amazing
                      height
                    </p>
                    <div className="homeproducts__item__content">
                      <div className="homeproducts__item__priceContent">
                        <p className="homeproducts__lowest">Lowest Ask</p>
                        <p className="homeproducts__price">₦60,610</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="search_item">
                  <img src={image4} alt="" />
                  <div className="products__itself">
                    <p className="item__name">
                      Nike Air Max luxury brands yellow color with an amazing
                      height
                    </p>
                    <div className="homeproducts__item__content">
                      <div className="homeproducts__item__priceContent">
                        <p className="homeproducts__lowest">Lowest Ask</p>
                        <p className="homeproducts__price">₦60,610</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="search_item">
                  <img src={image5} alt="" />
                  <div className="products__itself">
                    <p className="item__name">
                      Nike Air Max luxury brands yellow color with an amazing
                      height
                    </p>
                    <div className="homeproducts__item__content">
                      <div className="homeproducts__item__priceContent">
                        <p className="homeproducts__lowest">Lowest Ask</p>
                        <p className="homeproducts__price">₦60,610</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="search_item">
                  <img src={image1} alt="" />
                  <div className="products__itself">
                    <p className="item__name">
                      Nike Air Max luxury brands yellow color with an amazing
                      height
                    </p>
                    <div className="homeproducts__item__content">
                      <div className="homeproducts__item__priceContent">
                        <p className="homeproducts__lowest">Lowest Ask</p>
                        <p className="homeproducts__price">₦60,610</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Body>
      <Rightbar>
        <p>Rightbar</p>
      </Rightbar>
      <Bottombar />
    </Mainlayout>
  );
}

export default Searchpage;
