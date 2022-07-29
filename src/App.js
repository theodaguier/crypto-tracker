import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import CoinData from './components/CoinData'
import './components/CoinData.css'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

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
    <div className="App">
      <NavBar />
      {filteredCoins.map(coin => {
        return (
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
        )
      })}
    </div>
  );
}

export default App; 
