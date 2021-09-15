
import React from 'react';
import './Button.css';
import  "./../../fonts/Lato/fonts.css";
import { Link } from 'react-router-dom';

const Button = ({ title, type,  btnStyle, ulStyle }) => {



    const UL_STYLES = [ "ul_style_3"];
    const ul_Style= UL_STYLES.includes(ulStyle) ? ulStyle : UL_STYLES[0];


    const BTN_STYLES = ["btn_style_link", "btn_style_light", "btn_style_danger", "btn_style_dark"];
    const button_Style= BTN_STYLES.includes(btnStyle) ? btnStyle : BTN_STYLES[0];
    
    return (
        <div className="button_sitting">
            <ul className = {` ${ul_Style}`} >


                {title &&
                title.map((title, index) => (
                    <li className="li_Style">
                        <Link to={title}
                              className="link_Style"
                        >

                        <button
                            className={`button ${button_Style}`}
                            type={type}
                            key={index}
                        >
                            <h2>{title}</h2>
                        </button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Button;