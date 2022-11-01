import { useState } from 'react';
import Form from './components/Form';
import Stock from './components/Stock';
import Latest from './components/Latest';
import Favorite from './components/Favorite';
import './App.css';

function App() {

  const [stock, setStock] = useState(null);
  const [latestSearch, setLatestSearch] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState(null);
  const apiKey = '1R4Z48uurtLotNrExVwHn2P7sS1lNwh1';

  const searchStock = (ticker) => {

    const fetchStock = async () => {
      await fetch(`https://api.polygon.io/v2/aggs/ticker/${ticker}/prev?adjusted=true&apiKey=${apiKey}`)
        .then(response => {
          if(!response.ok) {
            throw new Error(`Error fetching stock`);
          }
          return response.json();
        })
        .then(data => {
          console.log(data);
          if(data.resultsCount === 0) {
            setError('Invalid Ticker');
            return;
          }
          setStock(data);
          setLatestSearch([...latestSearch, data]);
          setError(null);
        }) 
        .catch(err => {
          console.log(err);
          setStock(null);
        })
    }
    fetchStock();
  }

  const addToFavorites = () => {
    const duplicateFavorites = favorites.filter(item => item.ticker === stock.ticker);

    if(duplicateFavorites.length > 0) {
      alert(`${duplicateFavorites[0].ticker} is already added`)
    } else {
      setFavorites([...favorites, stock]);
    }
  }

  return (
    <div className="App">
      <h1 className='title'>Stock Search</h1>
      <Form searchStock={searchStock}/>
      {error && <div className='error'>{error}</div>}
      {stock && <Stock stock={stock} addToFavorites={addToFavorites} />}

      <div className='row'>
        <div className='col'>
          <h2>Latest Search</h2>
          <ul>
            {latestSearch.length > 0 && latestSearch.map((item) => {
              return <Latest addToFavorites={addToFavorites} stock={item} key={item.request_id} />
            })}
          </ul>
        </div>

        <div className='col'>
          <h2>Favorites</h2>
          <ul>
            {favorites.length > 0 && favorites.map((item) => {
              return <Favorite stock={item} key={item.request_id} />
            })}
          </ul>
        </div>
      </div>

    </div>
  );
}

export default App;
