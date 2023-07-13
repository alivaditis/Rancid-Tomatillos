import {useState, useEffect} from 'react'
import Movies from '../Movies/Movies'
import Header from '../Header/Header'
import SelectedMovie from '../SelectedMovie/SelectedMovie';
import {getAllMovies} from '../../api';
import './App.css';
import { Routes, Route } from 'react-router-dom';


function App() {
  let [movies, setMovies] = useState([])
  const [serverError, setServerError] = useState(false)
  
  useEffect( () => {
    getAllMovies() 
      .then(data => setMovies(data.movies))
      .catch(err => setServerError(err.message))
    }, [])

  return (
      <div className="app">
        <Header/>
        {serverError && <p style={{backgroundColor: 'white', margin: 0, padding: '24px'}}>{serverError}</p>} 
        <Routes>
          <Route path='/' element={<Movies className='Movies' movies={movies} setServerError={setServerError}/>}/>
          <Route path='/:movieId' element={<SelectedMovie setServerError={setServerError}/>} />
        </Routes>
      </div>
  );
}

export default App