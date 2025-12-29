import { useState } from 'react';
import { searchMovies } from '../services/omdbApi';

export const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = async (query, page = 1) => {
    setLoading(true);
    setError(null);
    try {
      const data = await searchMovies(query, page);
      setMovies(data.Search);
    } catch (err) {
      setError(err.message);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  return { movies, fetchMovies, loading, error };
};
