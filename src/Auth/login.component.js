import React from 'react'
import { useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

function Mylogin() {


  let[loginuser, setloginuser]=useState('')
  let[loginpassword, setloginpassword]=useState('')


  let[loginusererr, setloginusererr]=useState('')
  let[loginpassworderr, setloginpassworderr] = useState('')





  let navigate = useNavigate();




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
 

  
  
 useEffect(() => {
  
      let is_logged_in =Boolean( sessionStorage.getItem('is_logged_in '));
  console.log("useeffect isloggedin:", typeof(is_logged_in), is_logged_in)
    if (is_logged_in=== false){
     navigate('/login')
    }else if(is_logged_in===true){
      navigate('/admin')
    }
},[]);
  
 
 
 
 
 
 const HandleLogin =(ev)=>{
      ev.preventDefault()
      // console.log("loginuser :", loginuser)
      // console.log("loginpassword :", loginpassword)
      
      // //server sesponse then set value below
      
      // localStorage.setItem('is_logged_in', Boolean (true))
      // localStorage.setItem('is_logged_in', Boolean(true))

      // sessionStorage.setItem("is_logged_in ", true);
        // return navigate('/admin')
   
        sessionStorage.setItem('is_logged_in' ,false);

         navigate('/admin')
      
    }

 
  
  
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