import React from 'react'
import AdminNav from './admin.nav'
import "./admin.component.css"
import { Outlet } from 'react-router-dom'

function Myadmin() {
  return (
    <>
    
     
   <AdminNav></AdminNav>
   <Outlet></Outlet>
    </>
  )
}

export default Myadmin