import React from 'react'
import { NavLink } from 'react-router-dom'
import "./navbar.css"

function Mynavbar() {
  return (

      <div class="container-fluid text-center  bg-dark text-light">

        <div class="row text-center justify-content-center align-items-center py-2">
          <div class="col-6 h2">Gymn House</div>
          <div class="col h6 align-items-center "><NavLink to="/">HOME</NavLink> </div>
          <div class="col h6 text-decoration-none "><NavLink to="/packages">PACKAGES</NavLink></div>
          <div class="col  h6 text-decoration-none"><NavLink to="/about">ABOUT</NavLink></div>
          <div class="col h6 text-decoration-none"><NavLink to="/contact">CONTACT</NavLink></div>

        </div>
 
      </div>





    // <div class="container-fluid bg-dark text-light position-sticky top-0  ">
    //     <div class="row  py-3 px-0  ">
    //         <div class="  col-6 text-center  h3"> GYMN HOUSE</div>
    //         <NavLink to="/">
    //         <div class="  col  ">
            
    //          <button type="button" class="btn text-light bg-danger">Home</button>
            
           
    //         </div> </NavLink>
    //         <div class="  col ">
    //         <button type="button" class="btn text-light bg-danger">Packages</button>
    //         </div>
    //         <div class=" col" >
    //         <button type="button" class="btn text-light bg-danger">Gallery</button>
    //         </div>
    //         <div class=" col">
    //         <button type="button" class="btn text-light bg-danger">About</button>
    //         </div>
    //         <div class="col">
    //         <button type="button" class="btn text-light bg-danger">Contact</button></div>
    //     </div>
       

    // </div>
   
  )
}

export default Mynavbar