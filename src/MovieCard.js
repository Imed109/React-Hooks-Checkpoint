

function MovieCard({ posterURL, title, description, rating }) {
  return (
    <div>
      <img src={posterURL} />
      <h1>{title}</h1>
      <h3>{description}</h3>
      <h3>{rating}</h3>
    </div>
  );
}

export default MovieCard;
