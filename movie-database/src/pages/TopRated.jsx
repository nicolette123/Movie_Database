import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

// Curated keywords to ensure quality results
const KEYWORDS = ["batman", "avengers", "inception", "matrix", "star"];

const TopRated = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopRated = async () => {
      try {
        const requests = KEYWORDS.map((keyword) =>
          fetch(
            `https://www.omdbapi.com/?s=${keyword}&type=movie&apikey=${API_KEY}`
          ).then((res) => res.json())
        );

        const results = await Promise.all(requests);

        const searchMovies = results
          .flatMap((result) => result.Search || [])
          .slice(0, 12);

        const detailedMovies = await Promise.all(
          searchMovies.map((movie) =>
            fetch(
              `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${API_KEY}`
            ).then((res) => res.json())
          )
        );

        const topRated = detailedMovies.filter(
          (movie) => Number(movie.imdbRating) >= 8
        );

        setMovies(topRated);
      } catch (error) {
        console.error("Error fetching top rated movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopRated();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading top rated movies...</p>;
  }

  return (
    <section className="max-w-6xl mx-auto px-4">
      <h1 className="text-2xl font-semibold mb-6">Top Rated Movies</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="bg-white rounded shadow-sm">
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
              alt={movie.Title}
              className="w-full h-64 object-cover rounded-t"
            />
            <div className="p-3">
              <h3 className="font-medium text-sm">{movie.Title}</h3>
              <p className="text-xs text-gray-500">
                {movie.Year} • ⭐ {movie.imdbRating}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopRated;
