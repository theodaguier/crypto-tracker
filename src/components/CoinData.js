import React, {useRef} from 'react'

const CoinData = ({ name, image, symbol, price, volume, priceChange, marketcap }) => {

  const ref = useRef(null);
  const container = document.querySelector('.coin-data-container')

    const handleClick = event => {
      if (event.currentTarget.classList.contains('noactive')) {
        container.classList.add('active');
        container.classList.remove('noactive');
      } else {
        container.classList.remove('active');
        container.classList.add('noactive');
      }
    };

  return (
    <div>
        <div className="coin-data-container noactive" onClick={handleClick}>
          <div className="row">
            <div className="coin">
              <img src={image} alt="crypto-img" />
              <div className="coin-name">
                <h1>{name}</h1>
                <p className='symbol'>{symbol}</p>
              </div>
            </div>
            <div className="coin-data">
              <p className="coin-price">${price}</p>
              <p className="coin-volume">${volume.toLocaleString()}</p>

              {priceChange < 0 ? (
                <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
              ) : (<p className="coin-percent green">{priceChange.toFixed(2)}%</p>
              )}
            <p className="marketcap">Mkt Cap: ${marketcap.toLocaleString()}</p>

            <div></div>

            </div> 
          </div>
        </div>
    </div>
  )
}

export default CoinData