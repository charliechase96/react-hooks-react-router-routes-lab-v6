import { useEffect, useState } from "react";
import NavBar from '../components/NavBar';

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/directors')
      .then(response => response.json())
      .then(data => setDirectors(data))
  }, []);

  return (
    <>
      <header>
        {<NavBar />}
      </header>
      <main>
        <h1>Directors Page</h1>
        {directors.length > 0 ? (
          directors.map((director, index) => (
            <article key={index}>
              <h2>{director.name}</h2>
              <ul>
                {director.movies.map((movie, idx) => (
                  <li key={idx}>{movie}</li>
                ))}
              </ul>
            </article>
          ))
        ) : (
          <p>Loading directors...</p>
        )}
      </main>
    </>
  );
};

export default Directors;
