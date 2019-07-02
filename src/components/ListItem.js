import React, { Component } from 'react';

export class ListItem extends Component {

    constructor(props) {
        super(props);
        this.carouselImages = React.createRef();
    }

    reset = () => {
        console.log("in reset");
    }

    componentDidMount() {
        console.log("test");
        
        //this.carouselImages.current.style.display = 'none';
        //this.reset();
    }

    render() {
        return (
            <div className="carousel-item" ref={this.carouselImages}>
                <div className="carousel-content">
                    <div className="coin-price">
                        <span className="coin-price-symbol">$</span>
                        {this.props.crypto.quote.USD.price.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]}
                    </div>
                </div>
            </div>
        )
    }
}

export default ListItem;
