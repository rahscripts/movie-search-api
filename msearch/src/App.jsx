import { useState } from 'react'

import './App.css'

function App() {

  const [title, setTitle] = useState("");
  const [movie, setMovie] = useState(null);

  const fetchMovie = async () => {
    if (title.trim === "") return;

    const apiKey = "";
    const url = "";
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
    

    

;
  }

  return (
    // Movie Search App(OMDb API) **
    //   Search movies by title → show poster, rating, release year.
    //     Learn: debouncing search input + conditional rendering.

  <div>

  </div>
  )
}

export default App
