import React, { useEffect, useState } from "react";

import "./Layout.css";

import "./Topnavbar.css";
function Topnavbar() {
  const [hidenav, setHideNav] = useState("topnavbar");
  const [openDisplay, setDisplay] = useState("none");

  const openModal = () => {
    setDisplay("block");
  };

  const closeModal = () => {
    setDisplay("none");
  };

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
    <>
      <div className={`${hidenav}`}>
        <div className="topnavbar__body">
          <div className="topnavbar__img" onClick={() => openModal()}>
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687"
              alt="User"
              className="topnav__img"
            />
          </div>
        </div>
      </div>
      <div
        className="bottomsheet"
        style={{ display: `${openDisplay}` }}
        onClick={() => closeModal()}
      >
        <div className="bottomsheet__body">
          <div className="bottomrec"></div>
          <div className="bottomsheet__content">
            <div class="modal-header">
            <h2>Modal Header</h2>
          </div>
          <div class="modal-body">
            <p>Some text in the Modal Body</p>
            <p>Some other text...</p>
          </div>
          <div class="modal-footer">
            <h3>Modal Footer</h3>
          </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Topnavbar;
