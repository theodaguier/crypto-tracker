import React, {useRef} from 'react'

const CoinData = ({ name, image, symbol, price, volume, priceChange, marketcap, marketcaprank }) => {

  const ref = useRef(null);
  
  return (
    <div>
        <div className="coin-data-container noactive">
          <div className="row">
            <div className="coin">
              <img src={image} alt="crypto-img" />
              <div className="coin-name">
                <h1>{name}</h1>
                <p className='symbol'>{symbol}</p>
              </div>
            </div>
            <div className="coin-data">
              <div className="title-m"> Price
                <p className="coin-price">${price}</p> 
              </div>
              <div className="title-m"> Volume
                <p className="coin-volume">${volume.toLocaleString()}</p>
              </div>
              <div className="title-m"> Price Change
                {priceChange < 0 ? (
                  <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
                ) : (<p className="coin-percent green">{priceChange.toFixed(2)}%</p>
                )}
              </div>
              <div className="title-m"> Market Cap
                <p className="marketcap">${marketcap.toLocaleString()}</p>
              </div>

            <div></div>

            </div> 
          </div>
        </div>
    </div>
  )
}

export default CoinData