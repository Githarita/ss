import React, { useState } from "react";

import "./Layout.css";
import "./Topsearchnavbar.css";
import "./Topnavbar.css";
function Topsearchnavbar() {
  const [openDisplay, setDisplay] = useState("none");
  const [sortby, setSortby] = useState("not-active");
  const [productcat, setProductcat] = useState("not-active");
  const [sortprice, setSortprice] = useState("not-active");
  const [sortgender, setSortgender] = useState("not-active");

  const openModal = () => {
    setDisplay("block");
  };

  const sortBy = () => {
    setSortby("active");
    setProductcat("not-active");
    setSortgender("not-active");
    setSortprice("not-active");
  };
  const productCat = () => {
    setProductcat("active");
    setSortby("not-active");

    setSortgender("not-active");
    setSortprice("not-active");
  };
  const sortPrice = () => {
    setSortprice("active");
    setSortby("not-active");
    setProductcat("not-active");
    setSortgender("not-active");
  };
  const sortGender = () => {
    setSortgender("active");
    setSortby("not-active");
    setProductcat("not-active");

    setSortprice("not-active");
  };

  const closeModal = () => {
    setDisplay("none");
    setSortby("not-active");
    setProductcat("not-active");
    setSortprice("not-active");
    setSortgender("not-active");
  };

  return (
    <>
      <div className="topnavbar">
        <div className="topsearchnavbar__body">
          <div className="topnavbar__img">
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687"
              alt="User"
              className="topnav__img"
            />
          </div>
          <form action="" className="searchnavbar__form">
            <svg
              className="searchnavbar__icon"
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
              type="text"
              className="searchnavbar__input"
              placeholder="Search by brand, color etc."
            />
          </form>

          <svg
            onClick={() => openModal()}
            className="topnav__iconn"
            viewBox="0 0 15 15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.5 3C4.67157 3 4 3.67157 4 4.5C4 5.32843 4.67157 6 5.5 6C6.32843 6 7 5.32843 7 4.5C7 3.67157 6.32843 3 5.5 3ZM3 5C3.01671 5 3.03323 4.99918 3.04952 4.99758C3.28022 6.1399 4.28967 7 5.5 7C6.71033 7 7.71978 6.1399 7.95048 4.99758C7.96677 4.99918 7.98329 5 8 5H13.5C13.7761 5 14 4.77614 14 4.5C14 4.22386 13.7761 4 13.5 4H8C7.98329 4 7.96677 4.00082 7.95048 4.00242C7.71978 2.86009 6.71033 2 5.5 2C4.28967 2 3.28022 2.86009 3.04952 4.00242C3.03323 4.00082 3.01671 4 3 4H1.5C1.22386 4 1 4.22386 1 4.5C1 4.77614 1.22386 5 1.5 5H3ZM11.9505 10.9976C11.7198 12.1399 10.7103 13 9.5 13C8.28967 13 7.28022 12.1399 7.04952 10.9976C7.03323 10.9992 7.01671 11 7 11H1.5C1.22386 11 1 10.7761 1 10.5C1 10.2239 1.22386 10 1.5 10H7C7.01671 10 7.03323 10.0008 7.04952 10.0024C7.28022 8.8601 8.28967 8 9.5 8C10.7103 8 11.7198 8.8601 11.9505 10.0024C11.9668 10.0008 11.9833 10 12 10H13.5C13.7761 10 14 10.2239 14 10.5C14 10.7761 13.7761 11 13.5 11H12C11.9833 11 11.9668 10.9992 11.9505 10.9976ZM8 10.5C8 9.67157 8.67157 9 9.5 9C10.3284 9 11 9.67157 11 10.5C11 11.3284 10.3284 12 9.5 12C8.67157 12 8 11.3284 8 10.5Z"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <div className="bottomsheet" style={{ display: `${openDisplay}` }}>
        <div className="bottomsheet__body">
          <div className="bottomrec" onClick={() => closeModal()}></div>
          <div className="bottomsheet__content">
            {sortby === "not-active" ? (
              <div className="bottomsheetsort" onClick={() => sortBy()}>
                <p className="btssort">Sort By</p>
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            ) : (
              <div
                className="bottomsheetsort"
                onClick={() => setSortby("not-active")}
              >
                <p className="btssort">Sort By</p>
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.18179 8.81819C4.00605 8.64245 4.00605 8.35753 4.18179 8.18179L7.18179 5.18179C7.26618 5.0974 7.38064 5.04999 7.49999 5.04999C7.61933 5.04999 7.73379 5.0974 7.81819 5.18179L10.8182 8.18179C10.9939 8.35753 10.9939 8.64245 10.8182 8.81819C10.6424 8.99392 10.3575 8.99392 10.1818 8.81819L7.49999 6.13638L4.81819 8.81819C4.64245 8.99392 4.35753 8.99392 4.18179 8.81819Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            )}
            {sortby === "active" && (
              <div className="bottomsheetsortlist">
                <p className="btsorlist">Featured</p>
                <p className="btsorlist">Most Popular</p>
                <p className="btsorlist">New Lowest Asks</p>
                <p className="btsorlist">New Highest Bids</p>
                <p className="btsorlist">Average Sale Price</p>
                <p className="btsorlist">Total Sold</p>
                <p className="btsorlist">Volatility</p>
                <p className="btsorlist">Price Premium</p>
                <p className="btsorlist">Last Sale</p>
                <p className="btsorlist">Lowest Ask</p>
                <p className="btsorlist">Highest Bid</p>
                <p className="btsorlist">Release Date</p>
              </div>
            )}
            {productcat === "not-active" ? (
              <div className="bottomsheetsort" onClick={() => productCat()}>
                <p className="btssort">Product Category</p>
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            ) : (
              <div
                className="bottomsheetsort"
                onClick={() => setProductcat("not-active")}
              >
                <p className="btssort">Product Category</p>
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.18179 8.81819C4.00605 8.64245 4.00605 8.35753 4.18179 8.18179L7.18179 5.18179C7.26618 5.0974 7.38064 5.04999 7.49999 5.04999C7.61933 5.04999 7.73379 5.0974 7.81819 5.18179L10.8182 8.18179C10.9939 8.35753 10.9939 8.64245 10.8182 8.81819C10.6424 8.99392 10.3575 8.99392 10.1818 8.81819L7.49999 6.13638L4.81819 8.81819C4.64245 8.99392 4.35753 8.99392 4.18179 8.81819Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            )}
            {productcat === "active" && (
              <div className="bottomsheetsortlist">
                <p className="btsorlist">Sneakers</p>
                <p className="btsorlist">Collectibles</p>
                <p className="btsorlist">Apparel</p>
                <p className="btsorlist">Electronics</p>
                <p className="btsorlist">Accessories</p>
                <p className="btsorlist">Beauty</p>
                <p className="btsorlist">Bags</p>
                <p className="btsorlist">NFTs</p>
              </div>
            )}
            {sortprice === "not-active" ? (
              <div className="bottomsheetsort" onClick={() => sortPrice()}>
                <p className="btssort">Price</p>
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            ) : (
              <div
                className="bottomsheetsort"
                onClick={() => setSortprice("not-active")}
              >
                <p className="btssort">Product Category</p>
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.18179 8.81819C4.00605 8.64245 4.00605 8.35753 4.18179 8.18179L7.18179 5.18179C7.26618 5.0974 7.38064 5.04999 7.49999 5.04999C7.61933 5.04999 7.73379 5.0974 7.81819 5.18179L10.8182 8.18179C10.9939 8.35753 10.9939 8.64245 10.8182 8.81819C10.6424 8.99392 10.3575 8.99392 10.1818 8.81819L7.49999 6.13638L4.81819 8.81819C4.64245 8.99392 4.35753 8.99392 4.18179 8.81819Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            )}
            {sortprice === "active" && (
              <div className="bottomsheetsortlist">
                <p className="btsorlist">Under ₦50,000</p>
                <p className="btsorlist">₦50,000 - ₦100,000</p>
                <p className="btsorlist">₦100,000 - ₦250,000</p>
                <p className="btsorlist">₦250,000 - ₦500,000</p>
                <p className="btsorlist">₦500,000 - ₦1,000,000</p>
                <p className="btsorlist">₦1,000,000 +</p>
              </div>
            )}
            {sortgender === "not-active" ? (
              <div className="bottomsheetsort" onClick={() => sortGender()}>
                <p className="btssort">Genders</p>
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            ) : (
              <div
                className="bottomsheetsort"
                onClick={() => setSortgender("not-active")}
              >
                <p className="btssort">Genders</p>
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.18179 8.81819C4.00605 8.64245 4.00605 8.35753 4.18179 8.18179L7.18179 5.18179C7.26618 5.0974 7.38064 5.04999 7.49999 5.04999C7.61933 5.04999 7.73379 5.0974 7.81819 5.18179L10.8182 8.18179C10.9939 8.35753 10.9939 8.64245 10.8182 8.81819C10.6424 8.99392 10.3575 8.99392 10.1818 8.81819L7.49999 6.13638L4.81819 8.81819C4.64245 8.99392 4.35753 8.99392 4.18179 8.81819Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            )}
            {sortgender === "active" && (
              <div className="bottomsheetsortlist">
                <p className="btsorlist">Men</p>
                <p className="btsorlist">Women</p>
                <p className="btsorlist">Kids</p>
                <p className="btsorlist">Unisex</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Topsearchnavbar;
