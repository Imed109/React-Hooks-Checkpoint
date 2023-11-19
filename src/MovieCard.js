import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function MovieCard({ posterURL, title, description, rating }) {
  const cardStyle = {
    border: "1px solid #ccc",
    padding: "10px",
    margin: "10px",
    width: "200px", // Adjust this width as needed
  };

  const imageStyle = {
    width: "10%",
    height: "auto",
    maxHeight: "250px", // Adjust the max-height to control the image's maximum height
  };

  return (
    <div>
      <Card style={{ cardStyle }}>
        <Card.Img
          variant="top"
          src={posterURL}
          style={imageStyle}
          alt="NO MOVIE POSTER"
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <p>Rating : {rating}</p>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieCard;
