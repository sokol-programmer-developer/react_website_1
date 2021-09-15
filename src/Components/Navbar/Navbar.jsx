import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import './Navbar.css';
import Button from "../../Atom/Button/Button";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

    const Navbar = () => {


    return (
        <>



            <nav className='navbar'>
                <div className='navbar_container'>
                    <Link to='/' className='navbar_logo' >
                        Logo
                    </Link>



                    <div>
                        <div className="navbar_button">


                            <Link to='/'  >
                                <button className={"btn_style_light"}>
                                    <h2>Home</h2>
                                </button>
                            </Link>

                            <div className="navbar_button_box">
                                <Button
                                    path={[ "/Services", "/Products", "/SignUp",]}
                                    btnStyle = {"btn_style_light"}
                                    title={[ "Services", "Products", "SignUp",]}
                                    ulStyle={"ul_style_3"}
                                />
                            </div>
                        </div>
                    </div>

                    <div className='menu_icon' >
                       <HamburgerMenu/>
                    </div>




                </div>
            </nav>
        </>
    );
};

 export default Navbar;
