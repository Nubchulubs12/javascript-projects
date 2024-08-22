import './App.css';
import BookList from './components/BookList.jsx';
import ChoresList from './components/ChoresList.jsx';
import HobbyLinks from './components/HobbyLinks.jsx';
import MovieList from './components/MovieList.jsx';

function App() {
  return (
    <div className="App">
      <MovieList />
      <ChoresList />
      <BookList />
      <HobbyLinks />
    </div>
  );
}

export default App;
