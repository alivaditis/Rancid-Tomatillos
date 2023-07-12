import {useState, useEffect} from 'react'
import Movies from '../Movies/Movies'
import Header from '../Header/Header'
import SelectedMovie from '../SelectedMovie/SelectedMovie';
import {getAllMovies, getMovie} from '../../api';
import './App.css';
import { Routes, Route } from 'react-router-dom';


function App() {
  let [movies, setMovies] = useState([])
 
  // const [movieView, setMovieView] = useState(false)
  const [serverError, setServerError] = useState(false)

  useEffect( () => {
    getAllMovies() 
      .then(data => {
        if (!data) {
          setServerError(true)
        } else {
          setMovies(data.movies)
        }
      })
    }, [])
    
  // const updateSelectedMovie = (event) => {
  //   getMovie(event.target.id || event.target.parentNode.id || event.target.parentNode.parentNode.id)
  //   .then(data => {
  //     if (!data) {
  //       setServerError(true)
  //     } else {
  //       setSelectedMovie(data.movie)
  //     }
  //   })
  //   .then(x => setMovieView(true))
  // }

  return (
      <div className="app">
        <Header/>
        {serverError && <p style={{backgroundColor: 'white', margin: 0, padding: '24px'}}>Sorry!  The server is down!</p>} 
        <Routes>
          <Route path='/' element={<Movies className='Movies' movies={movies} />}/>
          <Route path='/:id' element={<SelectedMovie />}/>
        </Routes>
      </div>
  );
}

export default App