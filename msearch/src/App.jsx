import { useState } from 'react'

import './App.css'

function App() {

  const [tt, setTt] = useState("");
  const [movie, setMovie] = useState(null);

  const fetchMovie = async () => {
    if (tt.trim === "") return;

    const apiKey = "22a8c24e";
    const url = `https://www.omdbapi.com/?i=${tt}3896198&${apikey}=22a8c24e`;
    try {
      const response = await fetch(url);
      const data = await response.json();

      if(data.cod === "404") {
        alert("movie not found");
        return;

      }

      setMovie(data);
    } catch (error) {
      alert("error fetching data");
      console.log(error);

    }
    setTt("");
  }

  return (
    // Movie Search App(OMDb API) **
    //   Search movies by tt → show poster, rating, release year.
    //     Learn: debouncing search input + conditional rendering.

  <div >
    <input
    type="text"
    placeholder='enter a movie tt'
    onChange={(e) => setTt(e.target.value)} 
    value={tt}/>
    <button onClick={() => fetchMovie}>
      Search
    </button>

    {movie && 
    (
      <div className='text-black'>
        <h3>
          {movie.Title}
        </h3>
        <p>
          {movie.Director}
        </p>
        </div>
    )}
  </div>
  )
}

export default App
