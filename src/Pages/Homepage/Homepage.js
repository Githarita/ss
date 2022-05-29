import React from "react";
import Body from "../../Layouts/Body";
import Bottombar from "../../Layouts/Bottombar";
import Mainlayout from "../../Layouts/Mainlayout";
import Rightbar from "../../Layouts/Rightbar";
import Sidebar from "../../Layouts/Sidebar";
import Topnavbar from "../../Layouts/Topnavbar";

function Homepage() {
  return (
    <Mainlayout>
      <Topnavbar />
      <Sidebar />
      <Body>
        <p>Body</p>
      </Body>
      <Rightbar>
        <p>Rightbar</p>
      </Rightbar>
      <Bottombar />
    </Mainlayout>
  );
}

export default Homepage;
