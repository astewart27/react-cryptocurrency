import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {
    
    render() {
        return (
            <div className="carousel-wrapper">
                <div className="carousel-wrapper-inner">
                    <div id="arrow-left" className="arrow"></div>
                    <div id="carousel">
                        <div className="carousel-item-wrapper">
                            { this.props.cryptocurrency.map((coin, index) => 
                                <ListItem crypto={coin} key={index}/>
                            )}
                        </div>
                    </div>
                    <div id="arrow-right" className="arrow"></div>
                </div>
            </div>
        )
    }
}

export default List;