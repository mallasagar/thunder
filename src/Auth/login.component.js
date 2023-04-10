import React from 'react'
import { useState , useEffect} from 'react'

function Mylogin() {


  let[loginuser, setloginuser]=useState('')
  let[loginpassword, setloginpassword]=useState('')


  let[loginusererr, setloginusererr]=useState('')
  let[loginpassworderr, setloginpassworderr] = useState('')





  
  
  const HandleLogin =(ev)=>{
    ev.preventDefault()
    console.log("loginuser :", loginuser)
    console.log("loginpassword :", loginpassword)
  }
  useEffect(()=>{
    if(!loginuser){
      setloginusererr("enter username");
    }else { 
      setloginusererr("");
    }
  },[loginuser])

  useEffect(()=>{
    if(!loginpassword){
        setloginpassworderr("Date can't  be empty")
    }
    
    else{setloginpassworderr("")}
 }, [loginpassword])   
 
  
  return (

   <div  style={{ height:"300px" }} className='container text-dark py-5'>
     <form onSubmit={HandleLogin}>
         <div  className='row justify-content-center '>
                <div className="mb-3 col-md-4 col-11">
                        <label  className="loginuser">User Name</label>
                        <input type="text" name='loginuser' onChange={(ev)=>{
                          setloginuser(ev.target.value)
                        }} className="form-control" ></input>
                        <span className='text-danger'>{loginusererr}</span>
                </div>
        </div>
        <div className='row justify-content-center'>
             <div className="mb-4 col-md-4 col-11 ">
                    <label  className="password">Password</label>
                    <input type="password" name='loginpassword' onChange={(ev)=>{
                      setloginpassword(ev.target.value)
                    }} className="form-control" ></input>
                    <span className='text-danger'>{loginpassworderr}</span>
            </div>
        </div>

        <div className='row justify-content-center'>
          <button style={{border:"none"}} type='Submit'  onSubmit={HandleLogin} 
          className='bg-danger text-light col-md-1 col-7 mb-3 border-none'>Login</button>
        </div>

</form>
      </div>



   



          
      

  )
}

export default Mylogin