import React from 'react';

function CardHotel({product}) {
    return (
        <div>
            <img src={product.image} alt='hotel image' />
            <div>
                <div>{product.title}</div>
                <div>{product.intro_address}</div>
                <div>{product.tag}</div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default CardHotel;