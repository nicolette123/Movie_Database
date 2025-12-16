import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const API_KEY = 'Yhttp://www.omdbapi.com/?i=tt3896198&apikey=a7f6753a'; 
const API_URL = 'http://www.omdbapi.com/';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(API_URL, {
          params: { apikey: API_KEY, i: id, plot: 'full' },
        });
        if (response.data.Response === 'True') {
          setMovie(response.data);
        } else {
          setError(response.data.Error);
        }
      } catch (err) {
        setError('Network error. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-red-600 text-center">{error}</p>;
  if (!movie) return null;

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <Link to="/" className="text-blue-600 hover:underline mb-4 block">&larr; Back to Search</Link>
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Poster'}
          alt={movie.Title}
          className="w-full md:w-1/3 rounded"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{movie.Title}</h1>
          <p className="text-gray-600 mb-4">{movie.Year} • {movie.Runtime} • {movie.Genre}</p>
          <p className="mb-4">{movie.Plot}</p>
          <p className="mb-2"><strong>Director:</strong> {movie.Director}</p>
          <p className="mb-2"><strong>Actors:</strong> {movie.Actors}</p>
          <p className="mb-2"><strong>Ratings:</strong> IMDb {movie.imdbRating}/10</p>
          {movie.Ratings && movie.Ratings.length > 1 && (
            <ul className="list-disc pl-5">
              {movie.Ratings.slice(1).map((rating, idx) => (
                <li key={idx}>{rating.Source}: {rating.Value}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;