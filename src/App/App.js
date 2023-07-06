import {useState} from 'react'
import Movies from '../Movies/Movies'
import SelectedMovie from '../SelectedMovie/SelectedMovie';
import movieData from '../dummy';
import './App.css';

function App() {
  const [movies, setMovies] = useState(movieData.movies)
  const [selectedMovie, setSelectedMovie] = useState(movieData.movies[0])
  return (
    <div className="App">
      hello
      {/* <Header /> */}
      {/* <Movies movies={movies}/> */}
      <SelectedMovie  selectedMovie={selectedMovie}/>
      {/* className='hidden' */}
    </div>
  );
}

export default App;