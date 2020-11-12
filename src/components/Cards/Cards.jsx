import React from 'react';

import CardItem from '../CardItem/CardItem';

import img9 from '../../images/img-9.jpg';
import img2 from '../../images/img-2.jpg';
import img3 from '../../images/img-3.jpg';
import img4 from '../../images/img-4.jpg';
import img8 from '../../images/img-8.jpg';

import './Cards.css';

const Cards = () => {
    return (
        <div className="cards">
            <h1>Check out these EPIC destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src={ img9 } 
                            text='Explore the waterfall deep inside the Amazon Jungle' 
                            label='Adventure' 
                            path='/services' 
                        />
                        <CardItem src={ img2 } 
                            text='Travel through the islands of Bali in a private cruise' 
                            label='Luxury' 
                            path='/services' 
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem src={ img3 } 
                            text='Set sail in the Atlantic Ocean visiting Uncharted Waters' 
                            label='Mystery' 
                            path='/services' 
                        />
                        <CardItem src={ img4 } 
                            text='Experience football on top of Himilayan Mountains' 
                            label='Adventure' 
                            path='/products' 
                        />
                        <CardItem src={ img8 } 
                            text='Ride through the Sahara Desert on a guided camel tour' 
                            label='Adrenaline' 
                            path='/sign-up' 
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;