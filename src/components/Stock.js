import React from 'react';

const Stock = (props) => {

  const ticker = props.stock.ticker;
  const open = props.stock.results[0].o;
  const high = props.stock.results[0].h;
  const low = props.stock.results[0].l;

  return (
    <div className='col stock-col'>
      <h3>{ticker}</h3>
      <div className='btn' onClick={props.addToFavorites}>Add to Favorites</div>
      <p>Open: ${open}</p>
      <p>High: ${high}</p>
      <p>Low: ${low}</p>
    </div>
  )
};

export default Stock;