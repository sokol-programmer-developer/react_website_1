
import React, { useRef } from "react";
import "./HamburgerMenu.css";
import { useDetectOutsideClick } from "./useDetectOutsideClick";



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fontawesome from '@fortawesome/fontawesome';
import {faBars } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

fontawesome.library.add( faBars)


const HamburgerMenu = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);

    return (
        <div className="hamburger_menu_section">
            <div className="hamburger_menu_container">
                <button onClick={onClick} className="hamburger_menu_trigger">
                    <div className="hamburger_menu_icon">

                        <FontAwesomeIcon icon={faBars} size="2x" fixedWidth className="font_awesome_icon"/>

                    </div>
                </button>
                <nav
                    ref={dropdownRef}
                    className={`hamburger_menu ${isActive ? "active" : "inactive"}`}
                >
                    <ul>
                        <li>
                            <Link to='/'  >
                                <button className={"btn_style_link"}>
                                    <h2>Home</h2>
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to='/Services'  >
                                <button className={"btn_style_link"}>
                                    <h2>Services</h2>
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to='/Products'  >
                                <button className={"btn_style_link"}>
                                    <h2>Products</h2>
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to='/SignUp'  >
                                <button className={"btn_style_link"}>
                                    <h2>SignUp</h2>
                                </button>
                            </Link>
                        </li>

                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default HamburgerMenu;
