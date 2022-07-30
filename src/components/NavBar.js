import React, {useState, useEffect, Component} from 'react';

const NavBar = () => {

    const handleChange = e => {
        setSearch(e.target.value)
    }
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');

  return (
    <div>
        <div className="title">Crypto Tracker</div>
        <div className="search-bar">
            <form>
            <input 
            type="text" 
            placeholder='Search' 
            className="search-input" 
            onChange={handleChange}
            />
            </form>
        </div>
    </div>
  )
}

export default NavBar