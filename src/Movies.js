import { useState } from "react";
import MovieCard from "./MovieCard";
import Adding from "./Adding";
const Movies = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description:
        "A thief who enters the dreams of others to steal their secrets.",
      posterURL: "https://example.com/inception.jpg",
      rating: "4.7",
    },
    {
      title: "The Shawshank Redemption",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      posterURL: "https://example.com/shawshank.jpg",
      rating: "4.9",
    },
    {
      title: "The Dark Knight",
      description:
        "When the menace known as the Joker emerges, Batman must confront one of the greatest psychological and physical tests of his ability to fight injustice.",
      posterURL: "https://example.com/darkknight.jpg",
      rating: "4.8",
    },
    {
      title: "Pulp Fiction",
      description:
        "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      posterURL: "https://example.com/pulpfiction.jpg",
      rating: "4.6",
    },
    {
      title: "Forrest Gump",
      description:
        "The story of a man with a low IQ who accomplished great things in his life.",
      posterURL: "https://example.com/forrestgump.jpg",
      rating: "4.5",
    },
  ]);
  const addToMovies = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  return (
    <div>

      <Adding addToMovies={addToMovies} />
    {movies.map((film)=>
        <MovieCard key={film.title}{...film}/>
    )}
        
    </div>
  );
};
export default Movies;
