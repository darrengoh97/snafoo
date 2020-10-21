import React from 'react';

export default function Card({item}) {
    return (
        <div className="cardContainer">
            <div className="imageContainer u-vr_x3">
                <img src={item.image} alt="Product" />
                <div className="triangle blue-bg vote-count">
                    <span className="count">{item.votes}</span>
                </div>
            </div>
            <div className="hdg">
                <p className="u-vr_x2">{item.product}</p>
                <p className="hdg_5">{item.brand}</p>
            </div>
        </div>
    )
}