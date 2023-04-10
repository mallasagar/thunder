import React from 'react'

import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Myabout from './about/about.component'
import Mypackages from './packages/package.component'
import Mycontact from './contact/contact.component'
import Myhome from './home/homecomponent'
import Myshared from './shared.component'
import Myregister from './Auth/register.component'
import Mylogin from './Auth/login.component'
// import Myadmin from './admin/admin.component'
import { Admin  } from './admin'

function Errorpage(){
  return(
    <div>404 ERROR</div>
  )
}


function App() {





  function PrivateRouting({component:Component}){
    let is_logged_in = true;
    return is_logged_in ? Component :<Navigate to='/login'></Navigate>
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
          </Route>

          <Route path='/*' element={<Errorpage></Errorpage>}></Route>

        </Routes>
    </BrowserRouter>


  )
}

export default App