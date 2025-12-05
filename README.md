# Movie_Database
🎬 Movie Finder App

A modern and responsive React application that allows users to search for movies, explore detailed movie information, and enjoy a smooth UI powered by Tailwind CSS.

🚀 Overview

The Movie Finder App enables users to search for movies using a public movie API (OMDB API). It displays essential movie information, supports detailed views, handles errors gracefully, and adapts to all screen sizes with a responsive Tailwind CSS layout.

📌 Features
🔍 1. Fetch Movie Data

Uses the OMDB API (or equivalent) to fetch movie data.

Displays search results including:

🎞️ Movie Poster

🎬 Title

📅 Release Year

📖 2. Movie Details View

When a user clicks a movie card, the detailed page shows:

📝 Plot Summary

🎭 Cast

⭐ Ratings (IMDB, Rotten Tomatoes, etc.)

📂 Genre

🧪 3. Search Functionality

Responsive search bar.

Fetches relevant movies based on user input.

Friendly "No results found" message for unmatched queries.

📱 4. Responsive UI (Tailwind CSS)

Fully responsive layout for:

Desktop

Tablet

Mobile

Clean and consistent design using Tailwind utility classes.

⚠️ 5. Error Handling

Handles API failures, invalid responses, or empty results.

Displays helpful and clear error messages.

🛠️ Technical Requirements
⚙️ Project Setup

React application (Vite recommended)

Tailwind CSS configured for styling

Environment variables for API key (.env)

🌐 API Integration

Uses fetch or axios to call the OMDB API.

Handles async operations with loading and error states.

🧩 Reusable Components

SearchBar

MovieCard

MovieList

MovieDetails

Each component is structured for reusability and clean UI.

🧠 State Management

Uses React Hooks:

useState

useEffect

Optional integration with Zustand or Redux as the app grows.

☁️ Deployment

Deployable on:

Netlify

Vercel


✨ Stretch Goals
⭐ Favorites List

Save favorite movies to localStorage.

📄 Pagination

Handle large datasets by dividing results into pages.

🔎 Sorting & Filtering

Sort by:

Release date

Ratings

Filter by:

Genre

Year

🎥 Movie Trailers

Embed YouTube trailers in the movie details page.

🌙 Theme Customization

Light/dark mode support.

🌍 Internationalization

Translate UI into multiple languages.

📂 Project Structure
src/
 ├── components/
 │   ├── SearchBar.jsx
 │   ├── MovieCard.jsx
 │   ├── MovieList.jsx
 │   └── MovieDetails.jsx
 ├── pages/
 │   ├── Home.jsx
 │   └── Details.jsx
 ├── App.jsx
 ├── main.jsx
 └── index.css

📦 Installation & Setup
# Clone the repository
git clone https://github.com/YOUR-USERNAME/movie-finder.git

# Navigate into project folder
cd movie-finder

# Install dependencies
npm install

# Create .env and add your OMDB API key
VITE_OMDB_API_KEY=your_api_key_here

# Start development server
npm run dev


👩‍💻 Author

Nicolette MUKESHIMANA