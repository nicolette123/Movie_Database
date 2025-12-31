const About = () => {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* HEADER */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">
            About MovieDB
          </h1>
          <p className="text-gray-300">
            A simple and modern movie discovery platform.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
          <p className="text-gray-700 leading-relaxed">
            MovieDB is a frontend movie database application built using
            React and the OMDb API. It allows users to search for movies
            and explore detailed information such as plot summaries,
            ratings, genres, and release years.
          </p>

          <p className="text-gray-700 leading-relaxed">
            This project was developed as a capstone frontend project,
            focusing on clean UI design, responsive layouts, and
            real-world API integration.
          </p>

          <p className="text-gray-700 leading-relaxed">
            The goal is to deliver a smooth and intuitive user experience
            while maintaining simple and readable code architecture.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
