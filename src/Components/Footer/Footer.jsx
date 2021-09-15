import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';
import Button from "../../Atom/Button/Button";

function Footer() {
    return (
        <div className='footer-container'>


            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                  Lorem ipsum dolor sit amet.
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
                </p>
                <div className='input-areas'>
                    <form className="footer_form">
                        <input
                            className='footer-input'
                            name='email'
                            type='email'
                            placeholder='Your Email'
                        />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>



            <div className='footer-links'>

                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2 className="footer_h2">About Us</h2>

                        <div className="footer_Link">
                            <Link to='/SignUp'>How it works</Link>
                            <Link to='/'>Testimonials</Link>
                            <Link to='/'>Careers</Link>
                            <Link to='/'>Investors</Link>
                            <Link to='/'>Terms of Service</Link>
                        </div>

                    </div>

                    <div className='footer-link-items'>
                        <h2 className="footer_h2">Contact Us</h2>

                        <div className="footer_Link">
                            <Link to='/'>Contact</Link>
                            <Link to='/'>Support</Link>
                            <Link to='/'>Destinations</Link>
                            <Link to='/'>Sponsorships</Link>
                        </div>
                    </div>
                </div>









                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2 className="footer_h2">Videos</h2>

                        <div className="footer_Link">
                            <Link to='/'>Submit Video</Link>
                            <Link to='/'>Ambassadors</Link>
                            <Link to='/'>Agency</Link>
                            <Link to='/'>Influencer</Link>
                        </div>
                    </div>



                        <div className='footer-link-items'>
                            <h2 className="footer_h2">Social Media</h2>

                            <div className="footer_Link">
                                <Link to='/'>Instagram</Link>
                                <Link to='/'>Facebook</Link>
                                <Link to='/'>Youtube</Link>
                                <Link to='/'>Twitter</Link>
                            </div>
                        </div>

                </div>
            </div>


            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className="footer_website-author_logo">
                        <div className='footer-logo'>
                            <Link to='/' className='social-logo'>
                                <h2 className="footer_h3">Logo</h2>
                            </Link>
                        </div>
                        <div className="small_website-author" >
                            <small className='website-author'>Noname © 2021</small>
                        </div>

                    </div>


                </div>
            </section>
        </div>
    );
}

export default Footer;
