import { NavLink } from "react-router-dom";

export function Sidebar(){
    return(
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        <NavLink className="sidebar-brand d-flex align-items-center justify-content-center" to="/admin">
            <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">ADMIN PANEL</div>
        </NavLink>

        <hr className="sidebar-divider my-0"/>

        <li className="nav-item">
            <NavLink className="nav-link" to="/admin">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></NavLink>
        </li>
        <hr/>
        <li className="nav-item">
            <NavLink className="nav-link" to="/admin/package">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Packages</span></NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/admin/trainer">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Trainers</span></NavLink>
        </li>

    </ul>

    )
}