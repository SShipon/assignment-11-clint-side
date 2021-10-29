import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/logo.jpg'
import './header.css'

const Header = () => {
     const {user, login, logOut} = useAuth()
    return (
                <div className="header sticky-top">
                <nav className="navbar navbar-expand-lg text-white p-3 ">
                    
                    <div className="container-fluid">
                    <div className=" d-flex px-3">
                    <img style={{width:"50px", height:"50px", borderRadius:"50%"}} src={logo} alt="" />
                      <h3 className="me-2 m-2">Travels & Tour</h3>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon bg-dark "></span>
                    </button>
                   
            <div className="collapse navbar-collapse align-items-center justify-content-center  fs-5 me-5"  id="navbarNav">
                 <ul className="navbar-nav ">
                     <li className="nav-item">
                        <NavLink className="nav-link  text-white " aria-current="page" to="/home">Home</NavLink>
                         </li>
                          <li className="nav-item">
                           <NavLink className="nav-link text-white " to="/destination">Destination</NavLink>
                        </li>
                           <li className="nav-item">
                            <NavLink className="nav-link text-white " to="/about">About</NavLink>
                             </li>
                            <li className="nav-item">
                            <NavLink className="nav-link text-white " to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                           <NavLink className="nav-link text-white me-5 " to="/login">LogIn</NavLink>
                           </li>
                        {user?.email && <p>{user?.displayName}</p>}
                        {(user?.email || login?.email) && <button onClick={logOut} type="submit" className="btn btn-success fw-bolder fs-5  ms-2">LogOut</button> }
                        {login?.displayName && <p>{login?.displayName}</p>}
                                              
                     </ul>
                  </div>
                </div>
            </nav>
        </div>

       
    );
};

export default Header;