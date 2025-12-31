const TopRated = () => {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* HEADER */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Top Rated Movies
          </h1>
          <p className="text-gray-300">
            A curated list of highly rated movies.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <p className="text-gray-700">
            This section will showcase top rated movies in future updates.
          </p>
        </div>
      </section>
    </main>
  );
};

export default TopRated;
