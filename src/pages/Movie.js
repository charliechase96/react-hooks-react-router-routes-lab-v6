import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then(response => response.json())
      .then(data => setMovie(data))
  }, [id]);

  return (
    <>
      <header>
        {<NavBar />}
      </header>
      <main>
        {movie ? (
          <>
            <h1>{movie.title}</h1>
            <p>Runtime: {movie.time}</p>
            <div>
              {movie.genres.map((genre, index) => (
                <span key={index}>{genre}</span>
              ))}
            </div>
          </>
        ) : (
          <p>Loading movie details...</p>
        )}
      </main>
    </>
  );
};

export default Movie;
