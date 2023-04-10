import React, { useState, useEffect } from 'react'


function Myregister() {
    let [fname, setfname]= useState('')
    let[fnameerr, setfnameerr]=useState('')
    let [mname, setmname]= useState('')
    let [lname, setlname]= useState('')
    let [lnameerr, setlnameerr]= useState('')

    let [address, setaddress]=useState('')
    let [addresserr, setaddresserr]=useState('')

    let[phone, setphone]=useState('')
    let[phoneerr,setphoneerr]=useState('')


    
    let[date, setdate]=useState('')
    let[dateerr, setdateerr]=useState('')

    let[email, setemail]=useState('')
    let[emailerr,setemailerr]=useState('')
 
    let[username, setusername]=useState('')
    let[usernameerr, setusernameerr]=useState('')


    let[password, setpassword] = useState('')
    let[passworderr, setpassworderr]=useState('')
    let[cpassword, setcpassword]=useState('')
    let[cpassworderr,setcpassworderr]=useState('')




    const onChangeHandle=(ev)=>{
        let{ name , value} =ev.target

        if (name==="fname"){
            setfname(value);
        }
        if (name==="mname"){
            setmname(value);

        }
        if(name==="lname"){
            setlname(value);
        }
       
        

        // console.log("name", name)
        // console.log("value", value)
    }
    const HandleSubmit = (ev) => {
        ev.preventDefault();

        console.log("firstname:", fname)
        console.log("middlename:", mname)
        console.log("lastname:", lname)
        console.log("address",address)
        console.log("contact:",phone)
        console.log("DOB",date)
        console.log("email; " ,email)
        console.log("username: ", username)
        console.log("password: ", password)
        console.log("cpassword: ", cpassword)
      
    
    }

     useEffect(()=>{
        if(!fname){
            setfnameerr("first name can't  be empty")
        }
        else{setfnameerr("")}
     }, [fname])   

     useEffect(()=>{
        if(!lname){
            setlnameerr("last name can't  be empty")
        }
        else{setlnameerr("")}
     }, [lname])  

     useEffect(()=>{
        if(!address){
            setaddresserr("Adress can't  be empty")
        }
        else{setaddresserr("")}
     }, [address])   
     useEffect(()=>{
        if(!phone){
            setphoneerr("phone can't  be empty")
        }
       else if(phone&&(phone.length<10||phone.length>10)){
            setphoneerr("invalid phone number")
        }
        else{setphoneerr("")}
     }, [phone])   
    
     

     useEffect(()=>{
        if(!email){
            setemailerr("empty email")
        }
        else if(email&&(!email.includes('@')||!email.includes('.com'))){
            setemailerr("invalid email")
        }
        else{
            setemailerr('')
        }

     },[email])

     useEffect(()=>{
        if(!username){setusernameerr("Username can't  be empty")}
        else{setusernameerr('')}}
     ,[username])

     useEffect(()=>{
        if(!password){
            setpassworderr("password can't be empty")
        }
        else(
            setpassworderr('')
        )
     },[password])

     useEffect(()=>{
        if(!cpassword){
            setcpassworderr("please enter same password")
        }
       
        else if (cpassword&&(cpassword !==password)){
            setcpassworderr("password did'nt match")}
        else if(cpassword&&(cpassword===password)){
            setcpassworderr('')
        }    
     },[ cpassword, password ])
    return (
    
   <form onSubmit={HandleSubmit}>

    <div className="mb-1 " >
            <div className="row justify-content-around pt-2">
                    <div className="  col-11  col-sm-3 col-md- ">
                        <label  className="form-label ">First Name</label>
                        <input type="text" name='fname' onChange={onChangeHandle} className="form-control" ></input>
                        <span className='text-danger'>{fnameerr} </span>
                    </div>
                     <div className="  col-11  col-sm-3 col-md-">
                        <label  className="form-label ">Middle Name</label>
                        <input type="text" name='mname'onChange={onChangeHandle} className="form-control" ></input>
                        <span></span>
                    </div>
                     <div className=" col-11  col-sm-3 col-md-">
                        <label className="form-label ">Last Name</label>
                        <input type="text" name='lname' onChange={onChangeHandle} className="form-control" ></input>
                        <span className='text-danger'>{lnameerr}</span>
                    </div>
            </div>
            <div className="row justify-content-around pt-2">
                    <div className=" col-11 col-sm-5 ">
                        <label className="form-label ">Address</label>
                        <input type="text" name='address' onChange={(ev)=>{
                            setaddress(ev.target.value);
                        }}   className="form-control" ></input>
                        <span className='text-danger'> {addresserr}</span>
                    </div>
                     <div className=" col-11 col-sm-5 ">
                        <label  className="form-label ">Contact</label>
                        <input type="number" name='phone'onChange={(ev)=>{
                            setphone(ev.target.value)
                        }} className="form-control" ></input>
                        <span className='text-danger'>{phoneerr}</span>
                    </div>
            </div>

          
            <div className="row justify-content-around pt-2">
                    <div className=" col-11 col-sm-5 ">
                        <label  className="form-label ">DOB</label>
                        <input type="date" name='date' onChange={(ev)=>{
                            setdate(ev.target.value)
                        }} className="form-control" ></input>
                        <span className='text-danger'>{dateerr} </span>
                    </div>

                    

                     <div className=" col-11 col-sm-5 ">
                     <label  className="form-label ">Gender</label>
                     <select className="form-select form-select-md mb-3"  aria-label=".form-select-lg example">
                            <option value="1" name='male'  >Male</option>
                            <option value="2" name='female'>Female</option>
                            <option value="3" name='others'  >Others</option>
                            </select>
                        <span></span>
                    </div>
            </div>


            <div className ="row justify-content-evenly">
                <div className="col-11 ">
                <label className="form-label">Email</label>
                <input type="email" name='email' onChange={(ev)=>{
                    setemail(ev.target.value)
                }}
                    
                className="form-control"></input>
                <span className='text-danger'>{emailerr}</span>
                </div>
            </div>

            <div className ="row justify-content-center ">
                <div className="col-11 col-sm-11">
                <label className="form-label">Username</label>
                <input type="text" name='username' onChange={(ev)=>{
                    setusername(ev.target.value)
                }} className="form-control"></input>
                <span className='text-danger'>{usernameerr}</span>
                </div>
            </div>

            <div className="row justify-content-around pt-2">
                    <div className=" col-11 col-sm-5">
                        <label  className="form-label ">Password</label>
                        <input type="password" name='password' onChange={(ev)=>{
                            setpassword(ev.target.value)
                        }} className="form-control" ></input>
                        <span className='text-danger'>{passworderr} </span>
                    </div>
                     <div className="col-11 col-sm-5">
                        <label  className="form-label ">Confirmation Password</label>
                        <input type="password"name='cpassword' onChange={(ev)=>{
                            setcpassword(ev.target.value)
                        }} className="form-control" ></input>
                        <span className='text-danger'>{cpassworderr}</span>
                    </div>
            </div>
           
    </div>

<div className="row  justify-content-center pt-2 ">
    <div className="col-1  ">

    <button type="submit"  onSubmit={HandleSubmit} className="btn btn-danger  justify-content-around mt-3 px-3">Register</button>
    </div>

</div>
    
   </form>
    
  )
}

export default Myregister