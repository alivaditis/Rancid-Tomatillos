import {useState, useEffect} from 'react'
import Movies from '../Movies/Movies'
import Header from '../Header/Header'
import SelectedMovie from '../SelectedMovie/SelectedMovie';
import {getAllMovies} from '../../api';
import movieData from '../../dummy';
import './App.css';

function App() {
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)
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

  return (
      <div className="app">
        <Header/>
        {serverError && <p style={{backgroundColor: 'white', margin: 0, padding: '24px'}}>Sorry!  The server is down!</p>} 
        <Movies className='Movies' movies={movies} setSelectedMovie={setSelectedMovie}/>
        {/* <SelectedMovie  selectedMovie={selectedMovie}/> */}
      </div>
  );
}

export default App;