import React from 'react'
import Mynavbar from './components/navbar.component'
import Myheader from './components/header.component'
import Myfooter from './components/footer.component'
import { Outlet } from 'react-router-dom'

function Myshared() {
  return (
    <>
    <Myheader></Myheader>
    <Mynavbar></Mynavbar>
        
    <Outlet/>
            
    <Myfooter></Myfooter>

    </>
  )
}

export default Myshared