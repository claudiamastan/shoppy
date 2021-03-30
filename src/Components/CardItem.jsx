import React from 'react';

const CardItem = ({name, price, imageUrl, stock}) => (
    <div className="card-item">
        <img src={imageUrl} width='278px'/>
        <div>
            <div className="item-name">{name}</div>
            <div className="item-price" style={{color: 'var(--main-color)'}}>${price} {!stock ? ' - Sold Out' : ''}</div>
        </div>
    </div>
)

export default CardItem;