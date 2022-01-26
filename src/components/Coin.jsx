import React from 'react';
import "./coin.css"

const Coin = ({
    name, image, symbol, price, volume, priceChange, marketcap
}) => {
  return <>
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="coinName" />
                    <div className='name-symbol'>
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                    </div>
                </div>
                <div className="coin-data">
                <div className="price-vol">
                    <p className="coin-price">Price- $ {price}</p>
                    <p className="coin-volum">Volume- $ {volume.toLocaleString()}</p>
                    </div>
                    {priceChange < 0 ? (
                        <p className="coin-percent red">Rate-({priceChange.toFixed(2)})%</p>
                    )
                    :(<p className="coin-percent green">Rate-({priceChange.toFixed(2)})%</p>
                    )}
                    <p className="coin-marketcap">Mkt Cap: ${marketcap.toLocaleString()}</p>
                </div>
            </div>
        </div>
  </>;
};

export default Coin;
