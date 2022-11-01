import React from 'react';

const Favorite = (props) => {

  return (
    <li>
      <div>{props.stock.ticker}</div>
    </li>
  )
}

export default Favorite;