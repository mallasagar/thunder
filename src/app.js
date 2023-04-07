import React from 'react'

import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Myabout from './about/about.component'
import Mypackages from './packages/package.component'
import Mycontact from './contact/contact.component'
import Myhome from './home/homecomponent'
import Myshared from './shared.component'
import Myregister from './Auth/register.component'
import Mylogin from './Auth/login.component'


function App() {
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
        </Routes>
    </BrowserRouter>


  )
}

export default App