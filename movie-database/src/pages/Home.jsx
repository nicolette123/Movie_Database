import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import MovieDetails from '../components/MovieDetails';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import Footer from '../components/Footer';
import { useMovies } from '../hooks/useMovies';

const Home = () => {
  const { movies, fetchMovies, loading, error } = useMovies();
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* Left: Posters (static like Figma) */}
          <div className="flex gap-4">
            <img
              src="images/banner.jpg"
              alt="movie poster"
              className="w-1/3 h-80 w-150 object-cover rounded-lg shadow"
            />
           
          </div>

          {/* Right: Text + Search */}
          <div>
            <h1 className="text-4xl font-bold mb-4 tracking-tight">
              Find Your Favorite Movie
            </h1>

            <p className="text-gray-600 mb-8 max-w-md">
              Discover movies, explore ratings, and view detailed information
              about your favorite films.
            </p>

            <SearchBar onSearch={fetchMovies} />
          </div>

        </div>
      </section>

      {/* FEATURED MOVIES */}
      <section className="bg-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-white text-xl font-semibold mb-8">
            Featured Movies
          </h2>

          {loading && <Loader />}
          {error && <ErrorMessage text={error} />}

          {!loading && movies.length > 0 && (
            <MovieList movies={movies} onSelect={setSelectedMovieId} />
          )}

          {!loading && movies.length === 0 && (
            <p className="text-gray-300">
              Search for a movie to see results here.
            </p>
          )}
        </div>
      </section>

      {/* MOVIE DETAILS MODAL */}
      {selectedMovieId && (
        <MovieDetails
          movieId={selectedMovieId}
          onClose={() => setSelectedMovieId(null)}
        />
      )}

      <Footer />
    </>
  );
};

export default Home;
