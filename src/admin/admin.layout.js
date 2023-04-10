import "../template/css/sb-admin-2.css"
import { Sidebar } from "./sidebar/sidebar.component"
import { Navbar } from "./navbar/navbar.component"
import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';




export function AdminLayout(props){
    return(
        <>
        <ToastContainer />
        <div id="wrapper">
             <Sidebar></Sidebar>
                 <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <Navbar></Navbar>
                            <div className="container-fluid">
                                <Outlet></Outlet>
                            </div>
                        </div>
                </div>
        </div>
        </>
    )
}