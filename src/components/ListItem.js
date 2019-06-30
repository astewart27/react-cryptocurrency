import React from 'react';

const ListItem = (props) => (
    <div className="carousel-item">
        <div className="carousel-content">
            <div className="coin-price">
                <span className="coin-price-symbol">$</span>
                {props.crypto.quote.USD.price.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]}
            </div>
        </div>
    </div>
);

export default ListItem;