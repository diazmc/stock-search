import React from 'react';

const Latest = (props) => {

  return (
    <li>
      <div>{props.stock.ticker}</div>
    </li>
  );
}

export default Latest;