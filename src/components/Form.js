import React, { useState } from 'react';

const Form = (props) => {

  const [stock, setStock] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.searchStock(stock)
    setStock('');
  }

  const handleChange = (e) => {
    setStock(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name='stock' type='text' value={stock} onChange={handleChange} autoComplete="off" />
      <button type="submit">
        Search
      </button>
    </form>
  )
}

export default Form;