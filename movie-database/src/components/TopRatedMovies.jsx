import { useEffect, useState } from 'react';
import { getTopRatedMovies } from '../services/omdbApi';
import MovieCard from './MovieCard';

const TopRatedMovies = ({ onSelect }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTopRatedMovies().then(setMovies);
  }, []);

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-8 tracking-tight">
          Top Rated Movies
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {movies.map(movie => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              onClick={() => onSelect(movie.imdbID)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRatedMovies;
