import { useState } from 'react'

import './App.css'

function App() {

  const [tt, setTt] = useState("");
  const [movie, setMovie] = useState(null);

  const fetchMovie = async () => {
    if (tt.trim === "") return;

    const apiKey = "22a8c24e";
    const url = `https://www.omdbapi.com/?i=tt3896198&$apikey=22a8c24e`;
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

  <div className='bg-green-300 m-20 p-20 rounded-xl font-gaba text-center'>
    <h1 className='font-extrabold text-5xl my-10'> <span class="text-red-600 decoration-wavy underline decoration-red-600 decoration-4 underline-offset-6"> Movie</span>  Search Api</h1>
    <input
    type="text"
    className='p-2 bg-slate-200 rounded '
    placeholder='enter a movie tt'
    onChange={(e) => setTt(e.target.value)} 
    value={tt}/>
    <button onClick={() => fetchMovie}
      className='rounded bg-yellow-200 p-2 mx-5'>
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
