const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = 'https://www.omdbapi.com/';

export const searchMovies = async (query, page = 1) => {
  const response = await fetch(
    `${BASE_URL}?s=${query}&page=${page}&apikey=${API_KEY}`
  );
  const data = await response.json();

  if (data.Response === 'False') {
    throw new Error(data.Error);
  }

  return data;
};

export const getMovieDetails = async (id) => {
  const response = await fetch(
    `${BASE_URL}?i=${id}&plot=full&apikey=${API_KEY}`
  );
  return response.json();
};
