const MovieCard = ({ movie, onClick }) => {
  const poster =
    movie.Poster !== 'N/A' ? movie.Poster : '/placeholder.png';

  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer"
    >
      <div className="relative overflow-hidden">
        <img
          src={poster}
          alt={movie.Title}
          className="h-72 w-full object-cover group-hover:scale-110 transition duration-300"
          loading="lazy"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-sm group-hover:text-indigo-600 transition">
          {movie.Title}
        </h3>
        <p className="text-xs text-gray-500">{movie.Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
