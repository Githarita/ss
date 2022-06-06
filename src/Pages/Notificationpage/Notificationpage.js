import React from "react";
import Body from "../../Layouts/Body";
import Bottombar from "../../Layouts/Bottombar";
import Mainlayout from "../../Layouts/Mainlayout";
import Sidebar from "../../Layouts/Sidebar";
import "./Notificationpage.css";
import image1 from "../../assets/shoe1.png";
import image2 from "../../assets/shoe2.png";
import image3 from "../../assets/shoe3.png";

function Notificationpage() {
  return (
    <Mainlayout>
      {/* <Topnavbar /> */}
      <Sidebar />
      <Body>
        <div className="notificationbody">
          <div className="notificationitem">
            <img src={image1} alt="" />
            <div className="notification_typography">
              <p className="notificationheader">Bid match available</p>
              <p className="notificationparagraph">
                Your Bid on Nike Air Zoom Terra for ₦70,000.00 have been found.
              </p>
            </div>
          </div>
          <div className="notificationitem">
            <img src={image2} alt="" />
            <div className="notification_typography">
              <p className="notificationheader">Ask match available</p>
              <p className="notificationparagraph">
                Your Ask on Nike Air Zoom Terra for ₦70,000.00 have been found.
                and that is how we see it. so don't give us trouble when the
                notifications are coming in
                Your Ask on Nike Air Zoom Terra for ₦70,000.00 have been found.
                and that is how we see it. so don't give us trouble when the
                notifications are coming in
              </p>
            </div>
          </div>
          <div className="notificationitem">
            <img src={image3} alt="" />
            <div className="notification_typography">
              <p className="notificationheader">Bid match available</p>
              <p className="notificationparagraph">
                Your Bid on Nike Air Zoom Terra for ₦70,000.00 have been found.
              </p>
            </div>
          </div>
        </div>
      </Body>
      <Bottombar />
    </Mainlayout>
  );
}

export default Notificationpage;
