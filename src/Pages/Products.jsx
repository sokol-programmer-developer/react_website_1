import React from 'react';
import './SittingPages.css';
import images2 from "./../images/img-2.webp";

const Products = () => {

    return (
        <>
           <div className="products_section">
               <img src={images2} alt="products_img-2" className="products_img"/>
               <h1 className="products_h1">PRODUCTS</h1>
           </div>
        </>
    );
};

export default Products;

