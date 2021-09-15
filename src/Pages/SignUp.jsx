import React from 'react';
import './SittingPages.css';
import images8 from "./../images/img-8.webp";

const SignUp = () => {
    return (
        <>
            <div className="sign_up_section">
                <img src={images8} alt="signUp_img-8" className="signUp_img"/>
                <h1 className="sign_up_h1">SignUp</h1>
            </div>
        </>
    );
};

export default SignUp;
