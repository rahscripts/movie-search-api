import { useState } from 'react';
import Header from '../components/Header';
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
    <div className='min-h-screen bg-gray-50'>
      <Header />

      <div className='px-8 py-16 flex justify-center'>
        <div className='w-full max-w-3xl space-y-8'>
          <div className='bg-white p-10 rounded-lg shadow-sm border border-gray-200'>
            <h1 className='font-bold text-3xl lg:text-4xl md:text-4xl text-center text-gray-900 mb-8'>
              Movie Search
            </h1>
            <div className='space-y-4'>
              <input
                className='w-full bg-gray-100 p-3 rounded border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400'
                type="text"
                placeholder="Enter a movie title"
                onChange={(e) => setTt(e.target.value)}
                value={tt}
              />
              <button className='w-full btn bg-gray-800 text-white hover:bg-gray-900 border-0' onClick={fetchMovie}>
                Search
              </button>
            </div>
          </div>

          {movie && (
            <div className='bg-white p-8 rounded-lg shadow-sm border border-gray-200'>
              <div className='text-center'>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>{movie.Title}</h3>
                {movie.Poster && movie.Poster !== 'N/A' && (
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className='mx-auto mb-6 rounded shadow-sm max-h-96'
                  />
                )}
                <div className='space-y-2 text-gray-700'>
                  <p><span className='font-semibold'>Year:</span> {movie.Year}</p>
                  <p><span className='font-semibold'>Rating:</span> {movie.imdbRating}/10</p>
                  <p><span className='font-semibold'>Director:</span> {movie.Director}</p>
                  <p><span className='font-semibold'>Actors:</span> {movie.Actors}</p>
                </div>
              </div>
            </div>
          )}

          <p className='text-center text-gray-500 text-sm py-4'>
            Built using React + OMDb API
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;