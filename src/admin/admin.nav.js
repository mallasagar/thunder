import React from 'react'
import "./admin.nav.css"

function AdminNav() {
  return (


    // style={{width:"10% ", height:"100%"}}

    <>
    <div  className='d-flex flex-row   justify-content-start'>

        <div style={{width:"10% ", height:"400px"}} className="d-flex flex-column  float-start mb-3 py-5 bg-info  ">
            <div className="py-2 px-3">Admin</div>
            <hr></hr>
            <div className="py-2 px-3">Home</div>
            <div className="py-2 px-3">About</div>
            <div className="py-2 px-3">Packages</div>
            <hr></hr>
            <div className="py-2 px-2"> <button type='submit' className='bg-danger text-light'> Logout</button></div>
        </div>
        

    </div>
    </>
    // <div className='container-fluid text-light bg-info'>
    //     <div className='row justify-content-start'>
    //         <div className='col-'>ADMIN</div>
    //     </div>
    //     <hr/>
    //     <div className='row justify-content-start mt-5'>
    //         <div className='col-'> About</div>
    //     </div>
    //     <div className='row justify-content-start mt-5'>
    //         <div className='col-'> Packages</div>
    //     </div>

    // </div>
  )
}

export default AdminNav