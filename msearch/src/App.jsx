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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-200 to-green-400 p-5">
      {/* CARD CONTAINER */}
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-lg p-6 md:p-10 text-center">
        
        <h1 className="font-extrabold text-3xl md:text-5xl my-5">
          <span className="text-red-600 underline decoration-wavy decoration-red-600 decoration-4 underline-offset-4">
            Movie
          </span>{' '}
          Search API
        </h1>

        {/* INPUT + BUTTON */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
          <input
            type="text"
            className="p-3 w-full md:w-2/3 bg-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400 transition"
            placeholder="Enter a movie title"
            onChange={(e) => setTt(e.target.value)}
            value={tt}
          />
          <button
            onClick={fetchMovie}
            className="rounded-lg bg-yellow-400 hover:bg-yellow-500 p-3 px-6 font-semibold transition"
          >
            Search
          </button>
        </div>

        {/* MOVIE DATA */}
        {movie && (
          <div className="mt-10 text-black flex flex-col items-center">
            <h3 className="text-2xl md:text-3xl font-bold">{movie.Title}</h3>
            <p className="mt-2 text-lg">🎬 Director: {movie.Director}</p>
            <p>⭐ Rating: {movie.imdbRating}</p>
            <p>📅 Year: {movie.Year}</p>
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="mt-5 w-64 md:w-80 rounded-xl shadow-md"
            />
          </div>
        )}
      </div>

      {/* FOOTNOTE / OUTSIDE TEXT */}
      <p className="mt-10 text-white font-medium text-center text-sm md:text-base">
        Built with ❤️ using React + Tailwind + OMDb API
      </p>
    </div>
  );
}

export default App;