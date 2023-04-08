import React from 'react'
import { useState } from 'react'

function Mylogin() {


  let[loginuser, setloginuser]=useState('')
  let[loginpassword, setloginpassword]=useState('')






  const HandleLogin=(ev)=>{
        ev.preventDefault()
        console.log("loginuser :", loginuser)
        console.log("loginpassword :", loginpassword)
    }

  return (

   <div  style={{ height:"300px" }} className='container text-dark py-5'>
     <form onSubmit={HandleLogin}>
         <div  className='row justify-content-center '>
                <div className="mb-3 col-md-4 col-11">
                        <label  className="loginuser">User Name</label>
                        <input type="text" name='loginuser' onChange={(ev)=>{
                          setloginuser(ev.target.value)
                        }} classNam="form-control" ></input>
                </div>
        </div>
        <div className='row justify-content-center'>
             <div className="mb-4 col-md-4 col-11 ">
                    <label  className="password">Password</label>
                    <input type="password"name='loginpassword' onChange={(ev)=>{
                      setloginpassword(ev.target.value)
                    }} className="form-control" ></input>
            </div>
        </div>

        <div className='row justify-content-center'>
        <button style={{border:"none"}} type='Submit'  onSubmit={HandleLogin} className='bg-danger text-light col-md-1 col-7 mb-3 border-none'>Login</button>

        </div>

</form>
      </div>



   



          
      

  )
}

export default Mylogin