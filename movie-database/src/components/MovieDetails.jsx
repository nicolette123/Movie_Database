import { useEffect, useState } from 'react';
import { getMovieDetails } from '../services/omdbApi';

const MovieDetails = ({ movieId, onClose }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-white max-w-4xl w-full rounded-xl shadow-lg overflow-hidden relative">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
        >
          ×
        </button>

        <div className="grid md:grid-cols-2 gap-6 p-6">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-full h-full object-cover rounded-lg"
          />

          <div>
            <h2 className="text-2xl font-bold mb-2 tracking-tight">
              {movie.Title}
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              {movie.Genre} • {movie.Year}
            </p>

            <p className="mb-4 text-gray-700">{movie.Plot}</p>

            <p className="text-sm mb-4">
              <strong>Actors:</strong> {movie.Actors}
            </p>

            <div className="flex flex-wrap gap-2">
              {movie.Ratings?.map(r => (
                <span
                  key={r.Source}
                  className="bg-indigo-100 text-indigo-600 text-xs px-3 py-1 rounded-full"
                >
                  {r.Source}: {r.Value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
