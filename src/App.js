import React, {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import axios from 'axios';
import CoinData from './components/CoinData'
import './components/CoinData.css'
import NavBar from './components/NavBar'

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  const handleChange = e => {
    setSearch(e.target.value)
  }

  // Change Theme

  const container = document.querySelector('.App')

  const handleClick = event => {
    if (event.currentTarget.classList.contains('dark')) {
      container.classList.remove('dark');
      container.classList.add('white');
    } else {
      container.classList.add('white');
      container.classList.remove('dark');
    }
  };

  // Call API 

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data);
      console.log(res.data);
    }).catch(error =>  console.log(error))
  }, []);

  // Search Filter

  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLocaleLowerCase()))

  return (
    <div className="App dark">
        <div className="nav-bar">
        <div className="title">Crypto Tracker</div>
        <div className="theme" onClick={handleClick}>Change Theme</div>
          <div className="search-bar">
              <form>
              <p>Search</p>  
              <input 
              type="text" 
              className="search-input" 
              onChange={handleChange}
              />
              </form>
          </div>
      </div>
        <div className="title-items">
          <div className="id-coin">
            <p>Icon</p>
            <p>Name</p>
          </div>
          <div className="tag">
            <p>Price</p>
            <p>Volume</p>
            <p>Price Change</p>
            <p>Mkt Cap</p>
          </div>
        </div>
        {filteredCoins.map(coin => {
          return (
            <>
            <CoinData 
            key={coin.id} 
            name={coin.name} 
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
            />
            </>
          )
        })}
    </div>
  );
}

export default App; 
