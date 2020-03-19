import React from 'react';

import './card.styles.css';

export const Card = (props) => (
    <div className='card-container'>
    <h3> { props.monster.name }</h3>
    <img width="640" height="640" 
    src= { props.monster.images[0].src } alt="Product"/>
    <div className='card-price'> { props.monster.price}</div>
        
    </div>

)

