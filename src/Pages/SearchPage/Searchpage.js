import React from 'react'
import Bottombar from '../../Layouts/Bottombar'
import Mainlayout from '../../Layouts/Mainlayout'
import Rightbar from '../../Layouts/Rightbar'
import Sidebar from '../../Layouts/Sidebar'
import Topsearchnavbar from '../../Layouts/Topsearchnavbar'

function Searchpage() {
  return (
    <Mainlayout>
        <Topsearchnavbar />
        <Sidebar />
        <Rightbar>
            <p>Rightbar</p>
        </Rightbar>
        <Bottombar />
    </Mainlayout>
  )
}

export default Searchpage