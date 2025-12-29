import { useState } from 'react';
import MovieCard from '../components/MovieCard';

function SearchPage({ initialMovies = [] }) {
  const [movies, setMovies] = useState(initialMovies);

  return (
    <div>
      {movies.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-4xl font-light mb-4">Discover Your Next Favorite Movie</h2>
          <p className="text-gray-400">Use the search bar above to find movies</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;