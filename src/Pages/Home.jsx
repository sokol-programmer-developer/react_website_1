import React from 'react';
import "./SittingPages.css"
import {Header, Cards, Footer, } from "../Components/index";

const Home = () => {
    return (
        <>
            <div className="home_section" style={{overflow: "hidden"}}>
                <Header />
                <Cards />
                <Footer />
            </div>

        </>
    );
}

export default Home;
