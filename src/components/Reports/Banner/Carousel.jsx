import axios from 'axios'
import React, {useState,useEffect} from 'react'
import './style.css'
import { Link } from "react-router-dom";
import { CryptoState } from '../CryptoContext';
import {TrendingCoins} from '../config/api';

const Carousel = () => {
const [trending, setTrending] = useState([]);
  const { currency,symbol } = CryptoState();

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    console.log(data);
    setTrending(data);
  };

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    fetchTrendingCoins()
  }, [currency])

  const items = trending.map((coin) => {
    let profit = coin?.price_change_percentage_24h >= 0;

    return (
          <Link className="carouselItem" to={`/coins/${coin.id}`}>
            <img
                src={coin?.image}
                alt={coin.name}
                height="80"
                style={{ marginBottom: 10 }}
            />
            <span>
            {coin?.symbol}
          &nbsp;
          <span
            style={{
              color: profit > 0 ? "rgb(14, 203, 129)" : "red",
              fontWeight: 500,
            }}
          >
            {profit && "+"}
            {coin?.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </span>
        <span style={{ fontSize: 22, fontWeight: 500 }}>
        {symbol} {numberWithCommas(coin.current_price.toFixed(2))}
        </span>
      </Link>
    );
  });

  return (
    <div className='containerC'>
      <div className='links'>
      {items}
      </div>
    </div>
  )
}

export default Carousel