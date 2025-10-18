import { useState } from 'react';
import './App.css';

function App() {

  const [tt, setTt] = useState("");
  const [movie, setMovie] = useState(null);

  const fetchMovie = async () => {
    if (tt.trim() === "") {
      alert("Please enter a movie title!");
      return;
    }

    const apiKey = "22a8c24e";
    const url = `https://www.omdbapi.com/?t=${tt}&apikey=${apiKey}`;

    
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "False") {
        alert("Movie not found!");
        return;

      }

      setMovie(data);
    } catch (error) {
      alert("Error fetching data!");
      console.error(error);

    }
    setTt("");
  };

  return (
    // Movie Search App(OMDb API) **
    //   Search movies by tt → show poster, rating, release year.
    //     Learn: debouncing search input + conditional rendering.

  <div className='bg-green-300 m-20 p-10 rounded-xl font-gaba text-center'>
    <h1 className='font-extrabold text-4xl my-10'> <span className="text-red-600 decoration-wavy underline decoration-red-600 decoration-4 underline-offset-6"> Movie</span>  Search Api</h1>
    <input
    type="text"
    className='p-2 bg-slate-200 rounded '
    placeholder='enter a movie title'
    onChange={(e) => setTt(e.target.value)} 
    value={tt}/>
    <button 
      onClick={fetchMovie}
      className='rounded bg-yellow-200 p-2 mx-5 cursor-pointer hover:bg-amber-500'>
      Search
    </button>

    
      {movie && (
        <div className="text-black mt-10">
          <h3 className="text-2xl font-bold">{movie.Title}</h3>
          <p>🎬 Director: {movie.Director}</p>
          <p>⭐ Rating: {movie.imdbRating}</p>
          <p>📅 Year: {movie.Year}</p>
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="mx-auto mt-5 rounded-lg shadow-lg"
          />
        </div>
      )}
  </div>
  );
}

export default App;
