import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import btc from '../../node_modules/cryptocurrency-icons/svg/color/btc.svg';
import eth from '../../node_modules/cryptocurrency-icons/svg/color/eth.svg';
import xrp from '../../node_modules/cryptocurrency-icons/svg/color/xrp.svg';
import ltc from '../../node_modules/cryptocurrency-icons/svg/color/ltc.svg';
import bch from '../../node_modules/cryptocurrency-icons/svg/color/bch.svg';
import eos from '../../node_modules/cryptocurrency-icons/svg/color/eos.svg';
import bnb from '../../node_modules/cryptocurrency-icons/svg/color/bnb.svg';
import usdt from '../../node_modules/cryptocurrency-icons/svg/color/usdt.svg';
import bsv from '../../node_modules/cryptocurrency-icons/svg/color/bsv.svg';
import trx from '../../node_modules/cryptocurrency-icons/svg/color/trx.svg';

class List extends Component {
    
    render() {
        return (
            <div className="carousel-wrapper">
                <div className="carousel-wrapper-inner">
                    <div id="carousel">
                        <div className="carousel-item-wrapper">
                            <Slider>
                                { this.props.cryptocurrency.map((item, index) => {
                                    return (
                                        <div className="carousel-item" key={index}>
                                            <div className="carousel-content">
                                                <div className="coin-price">
                                                    <span className="coin-price-symbol">$</span>
                                                    {item.quote.USD.price.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]}
                                                </div>
                                                <div className="coin-details">
                                                    <span className="coin-img">
                                                        {item.symbol.toLowerCase() === "btc" && <img src={btc} alt="Bitcoin"/>}
                                                        {item.symbol.toLowerCase() === "eth" && <img src={eth} alt="Ethereum"/>}
                                                        {item.symbol.toLowerCase() === "xrp" && <img src={xrp} alt="XRP"/>}
                                                        {item.symbol.toLowerCase() === "ltc" && <img src={ltc} alt="Litecoin"/>}
                                                        {item.symbol.toLowerCase() === "bch" && <img src={bch} alt="Bitcoin Cash"/>}
                                                        {item.symbol.toLowerCase() === "eos" && <img src={eos} alt="EOS"/>}
                                                        {item.symbol.toLowerCase() === "bnb" && <img src={bnb} alt="Binance Coin"/>}
                                                        {item.symbol.toLowerCase() === "usdt" && <img src={usdt} alt="Tether"/>}
                                                        {item.symbol.toLowerCase() === "bsv" && <img src={bsv} alt="Bitcoin SV"/>}
                                                        {item.symbol.toLowerCase() === "trx" && <img src={trx} alt="Tron"/>}
                                                    </span>
                                                    <span className="coin-name">
                                                        {item.name}
                                                    </span>
                                                    <span className="coin-symbol">
                                                        ({item.symbol})
                                                    </span>
                                                </div>
                                                <div className="coin-stats">
                                                    <span className={`coin-one-hour ${item.quote.USD.percent_change_1h > 0 ? 'positive':'negative'}`}>
                                                        1hr: <span>{item.quote.USD.percent_change_1h.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]}&#37;</span>
                                                    </span>
                                                    <span className={`coin-one-day ${item.quote.USD.percent_change_24h > 0 ? 'positive':'negative'}`}>
                                                        24hr: <span>{item.quote.USD.percent_change_24h.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]}&#37;</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                    }
                                )}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default List;