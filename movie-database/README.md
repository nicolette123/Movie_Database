🎬 MOVIE DATABASE

MOVIE DATABASE is a modern, scalable React application for searching, discovering, and exploring movies using the OMDB API. The project follows a clean architecture with reusable components, custom hooks, service abstraction, and multiple pages, making it suitable for production-level development and portfolio presentation.

🚀 Features

🔍 Movie search with real-time results

⭐ Top Rated movies (IMDb rating–based)

📄 Dedicated movie details view

🧩 Reusable UI components

⚡ Custom data-fetching hook

🧭 Client-side routing with React Router

📱 Fully responsive design

❗ Graceful error handling and loading states

🛠️ Tech Stack

React (Vite)

React Router DOM

Tailwind CSS / Custom CSS

OMDB API

JavaScript (ES6+)

📂 Project Structure
src/
├── components/
│   ├── ErrorMessage.jsx       # API & UI error handling
│   ├── Footer.jsx             # Application footer
│   ├── Loader.jsx             # Loading spinner
│   ├── MovieCard.jsx          # Single movie card component
│   ├── MovieDetails.jsx       # Movie details view
│   ├── MovieList.jsx          # Movie grid/list wrapper
│   ├── Navbar.jsx             # Main navigation
│   ├── SearchBar.jsx          # Search input component
│   └── TopRatedMovies.jsx     # Top rated movies display logic
│
├── hooks/
│   └── useMovies.js            # Custom hook for fetching movies
│
├── pages/
│   ├── About.jsx               # About page
│   ├── Contact.jsx             # Contact page
│   ├── Home.jsx                # Landing page
│   ├── SearchPage.jsx          # Search results page
│   └── TopRated.jsx            # Top rated movies page
│
├── services/
│   └── omdbApi.js               # OMDB API service abstraction
│
├── utils/
│   └── helpers.js               # Utility/helper functions
│
├── App.jsx                      # App routes & layout
├── App.css
├── index.css
└── main.jsx                     # Application entry point

⭐ Top Rated Movies Logic

The OMDB API does not provide a native “Top Rated” endpoint.
MOVIE DATABASE implements a curated IMDb rating strategy:

Fetch movies using popular keywords

Retrieve full movie details per item

Filter movies with imdbRating ≥ 8.0

Display results using reusable components

This approach ensures quality results while respecting API limitations.

🔑 Environment Variables

Create a .env file in the project root:

VITE_OMDB_API_KEY=your_omdb_api_key_here

▶️ Getting Started
1. Clone the repository
git clone https://github.com/nicolette123/movie-database.git
cd movie-database

2. Install dependencies
npm install

3. Run the development server
npm run dev


Application runs at:

http://localhost:5173

🌐 Routes
Route	Description
/	Home page
/search	Movie search results
/top-rated	Top rated movies
/about	About page
/contact	Contact page
📌 Future Enhancements

Pagination & infinite scrolling

Favorites / watchlist

Local storage caching

Improved accessibility (ARIA)

Unit & integration tests

📄 License

This project is intended for educational and portfolio purposes.

👩‍💻 Author

Nicolette Mukeshimana
Front-End Developer | React & UI Engineering