import MovieCard from './MovieCard';

const MovieList = ({ movies, onSelect }) => {
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {movies.map(movie => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          onClick={() => onSelect(movie.imdbID)}
        />
      ))}
    </div>
  );
};

export default MovieList;
