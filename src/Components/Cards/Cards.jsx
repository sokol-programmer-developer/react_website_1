import React from 'react';
import './Cards.css';
import CardItem from "../../Atom/CardItem";


function Cards() {
    return (
        <div className='cards'>
            <h1 className="cards_header_h1">Lorem ipsum dolor sit amet.</h1>
            <div className='cards__container'>
                <div className='cards__wrapper_top'>

                        <div className='cards__items'>
                            <CardItem
                                src='images/pictures-9.webp'
                                text='Girls should be promised the whole world. And buy ice cream.'
                                label='Adventure'
                                path='/Services'
                            />
                        </div>
                        <div className='cards__items'>
                            <CardItem
                                src='images/pictures-2.webp'
                                text='I have ice cream at home, and you have.'
                                label='Luxury'
                                path='/Services'
                            />
                        </div>
                </div>
                <div className='cards__wrapper_bottom'>

                        <div className='cards__items'>
                            <CardItem
                                src='images/pictures-3.webp'
                                text='Ice cream is happiness. Love ice cream.'
                                label='Mystery'
                                path='/Services'
                            />
                        </div>
                        <div className='cards__items'>
                            <CardItem
                                src='images/pictures-4.webp'
                                text='Love is... When both of them like ice cream.'
                                label='Adventure'
                                path='/Products'
                            />
                        </div>
                        <div className='cards__items'>
                            <CardItem
                                src='images/pictures-8.webp'
                                text='With chocolate ice cream, live easily and brightly!'
                                label='Adrenaline'
                                path='/SignUp'
                            />
                        </div>

                </div>
            </div>
        </div>
    );
}

export default Cards;
