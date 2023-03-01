import React from 'react';

function CardHotel({product}) {
    return (
        <div className='p-4 flex gap-2 border border-gray-300 rounded-md'>
            <img src={product.image} alt='hotel image' width={300}/>
            <div>
                <div>
                    <div>{product.title}</div>
                    <div>{product.intro_address}</div>
                    <div>{product.tag}</div>
                    <div>{product.sub}</div>
                    <div>{product.desc_room}</div>
                    <div>{product.desc}</div>
                    <div>{product.service}</div>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
}

export default CardHotel;