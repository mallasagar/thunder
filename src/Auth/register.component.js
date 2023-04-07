import React from 'react'








function Myregister() {
  return (
    <>
   <form>

    <div class="mb-1 " >
            <div class="row justify-content-around pt-2">
                    <div class="  col-11  col-sm-3 col-md- ">
                        <label for="inputtext" class="form-label ">First Name</label>
                        <input type="text" class="form-control" ></input>
                        <span> </span>
                    </div>
                     <div class="  col-11  col-sm-3 col-md-">
                        <label for="inputtext" class="form-label ">Middle Name</label>
                        <input type="text" class="form-control" ></input>
                        <span></span>
                    </div>
                     <div class=" col-11  col-sm-3 col-md-">
                        <label for="inputtext" class="form-label ">Last Name</label>
                        <input type="text" class="form-control" ></input>
                        <span></span>
                    </div>
            </div>
            <div class="row justify-content-around pt-2">
                    <div class=" col-11 col-sm-5 ">
                        <label for="inputtext" class="form-label ">Address</label>
                        <input type="text" class="form-control" ></input>
                        <span> </span>
                    </div>
                     <div class=" col-11 col-sm-5 ">
                        <label for="inputtext" class="form-label ">Contact</label>
                        <input type="text" class="form-control" ></input>
                        <span></span>
                    </div>
            </div>

          
            <div class="row justify-content-around pt-2">
                    <div class=" col-11 col-sm-5 ">
                        <label for="inputtext" class="form-label ">DOB</label>
                        <input type="text" class="form-control" ></input>
                        <span> </span>
                    </div>

                    

                     <div class=" col-11 col-sm-5 ">
                     <label for="inputtext" class="form-label ">Gender</label>
                     <select class="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                            <option value="3">Others</option>
                            </select>
                        <span></span>
                    </div>
            </div>


            <div class ="row justify-content-evenly">
                <div class="col-11 ">
                <label for="inputemail " class="form-label">Email</label>
                <input type="text" class="form-control"></input>
                <span></span>
                </div>
            </div>

            <div class ="row justify-content-evenly ">
                <div class="col-11 col-sm-11">
                <label for="inputtext " class="form-label">Username</label>
                <input type="text" class="form-control"></input>
                <span></span>
                </div>
            </div>

            <div class="row justify-content-around pt-2">
                    <div class=" col-11 col-sm-5">
                        <label for="inputtext" class="form-label ">Password</label>
                        <input type="password" class="form-control" ></input>
                        <span> </span>
                    </div>
                     <div class="col-11 col-sm-5">
                        <label for="inputtext" class="form-label ">Confirmation Password</label>
                        <input type="password" class="form-control" ></input>
                        <span></span>
                    </div>
            </div>
           
    </div>

<div class="row  justify-content-center pt-2 ">
    <div class="col-1  ">

    <button type="button" class="btn btn-danger  justify-content-around mt-3 px-3">Register</button>
    </div>

</div>
    
   </form>
    </>
  )
}

export default Myregister