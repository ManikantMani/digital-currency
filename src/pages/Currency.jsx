import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Coin from '../components/Coin';
import "./currency.css"

const Currency = () => {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');

    const currencyData = async () => {

        const { data } = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
        setCoins(data)

    };

    // console.log(coin)

    useEffect(() => {
        currencyData()
    }, []);
    
    const filterCoin = coins.filter((val) => {
        if (search == "") {
            return val;
        } else if (val.name.toLowerCase().includes(search.toLocaleLowerCase())) {
            return val;
        }
    })

    const handleChange = e => {setSearch(e.target.value)}

    return <>
        <div className="coin-app">
            <div className="coin-search">
                <form>
                <div className="search-update">
                    <input type="text" placeholder='Search' className='coin-input' onChange={handleChange} />
                    <h3>Last update:{new Date().toLocaleString() + ""}</h3>
                    </div>
                </form>
                
            </div>


            {
                filterCoin.map((val, ind) =>
                    <Coin key={val.id}
                        name={val.name}
                        image={val.image}
                        symbol={val.symbol}
                        marketcap={val.market_cap}
                        price={val.current_price}
                        priceChange={val.price_change_percentage_24h}
                        volume={val.total_volume}

                    />
                )
            }
        </div>
    </>;
};

export default Currency;
