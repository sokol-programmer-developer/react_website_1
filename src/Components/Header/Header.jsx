import React from 'react';
import video_1 from "../../videos/video_1.webm"
import './Header.css';
import Button from "../../Atom/Button/Button";

function Header() {
    return (
        <div className="header_container" >

                <video src={video_1} autoPlay loop muted className="header_video" />

            <div className="header_title">
                <h1 className="header_h1">Chocolate. <br/> Is like the first kiss that is always with you!</h1>
                <h1 className="header_p1">Sad? Dreary? Overcome the melancholy? <br/> Just buy a bar of chocolate.</h1>
            </div>

            <div className='header_btn'>
                <Button
                    path={[ "/Services"]}
                    btnStyle = {"btn_style_link"}
                    title={["Services"]}
                    ulStyle={"ul_style_3"}
                >
                   GET STARTED

                </Button>
                <Button
                    path={["/Products"]}
                    btnStyle={"btn_style_link"}
                    title={["Products"]}
                    ulStyle={"ul_style_3"}
                >
                        PRODUCTS

                </Button>
            </div>
        </div>
    );
}

export default Header;
