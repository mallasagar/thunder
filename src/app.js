import React, { useEffect } from 'react'

import { BrowserRouter, Routes, Route, Navigate, useNavigate} from 'react-router-dom'
import Myabout from './about/about.component'
import Mypackages from './packages/package.component'
import Mycontact from './contact/contact.component'
import Myhome from './home/home.component'
import Myshared from './shared.component'
import Myregister from './Auth/register.component'
import Mylogin from './Auth/login.component'
// import Myadmin from './admin/admin.component'
import { Admin  } from './admin'
import { getValue } from '@testing-library/user-event/dist/utils'


function Errorpage(){
  return(
    <div>404 ERROR</div>
  )
}

function Logout(){
  sessionStorage.clear();
  let navigate = useNavigate();

  useEffect(()=>{
    navigate('/login')
  })
  return(
    <>
    
    </>
  )
}


function App() {




  
  function PrivateRouting({component:Component}){


    let is_logged_in =Boolean  (sessionStorage.getValue ('is_logged_in'));
    console.log(" private routing is_logged_in", typeof( is_logged_in), is_logged_in)
    // if(is_logged_in=== Boolean(true)){
    //     return Component
    //   }
    //   else if(is_logged_in===Boolean(false)){
    //     return (<Navigate to={'/login'}></Navigate>)
    //   }  
       return is_logged_in === Boolean(true) ? Component :  <Navigate to='/login'></Navigate>
    }



  return (
 


    <BrowserRouter>
        <Routes>
          <Route path="/" element ={<Myshared/>}>
              <Route index element ={<Myhome></Myhome>}></Route>
              <Route path="/about" element={<Myabout/>}></Route>
              <Route path="/packages" element={<Mypackages/>}></Route>
              <Route path="/contact" element={<Mycontact/>}></Route>
          </Route>

          {/* routes for authentication */}
          <Route path="/register" element={<Myregister/>}></Route>
          <Route path="/login" element={<Mylogin/>}></Route>

          {/* Private routing */}
          <Route path='/admin' element={<PrivateRouting component={<Admin.AdminLayout/>}></PrivateRouting>}>
              <Route path='package' element={<PrivateRouting component={<Admin.PackageLayout/>}/>}></Route> 
              <Route path='trainer' element={<PrivateRouting component={<Admin.PTLayout/>}/>}></Route> 
              <Route path='booking' element={<PrivateRouting component={<Admin.Booking/>}/>}></Route> 
          </Route>
              <Route path='/logout' element={<PrivateRouting component={<Logout></Logout>}></PrivateRouting>}></Route>


          <Route path='/*' element={<Errorpage></Errorpage>}></Route>

        </Routes>
    </BrowserRouter>


  )
}

export default App