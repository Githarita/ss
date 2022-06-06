import React from 'react'
import Body from '../../Layouts/Body';
import Bottombar from '../../Layouts/Bottombar';
import Mainlayout from '../../Layouts/Mainlayout';
import Sidebar from '../../Layouts/Sidebar';
import Topnavbar from '../../Layouts/Topnavbar';
import "./Notificationpage.css";

function Notificationpage() {
  return (
    <Mainlayout>
        <Topnavbar/>
        <Sidebar />
        <Body></Body>
        <Bottombar />
    </Mainlayout>
  )
}

export default Notificationpage