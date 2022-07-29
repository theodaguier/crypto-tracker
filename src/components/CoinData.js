import React from 'react'

const CoinData = ({ name, image, symbol, price, volume}) => {
  return (
    <div>
        <div className="coin-data-container">
          <div className="row">
            <div className="coin">
              <img src={image} alt="crypto-img" />
              <h1>{name}</h1>
              <p className='symbol'>{symbol}</p>
            </div>
            <div className="coin-data">
              <p className="coin-price">${price}</p>
              <p className="coin-volume">${volume.toLocaleString()}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CoinData