import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function MovieCard({ posterURL, title, description, rating }) {
  const cardStyle = {
    border: "1px solid #ccc", //adjusting the card
    padding: "10px",
    margin: "10px",
    width: "200px",
  };

  const imageStyle = {
    width: "10%", //adjusting the image
    height: "auto",
    maxHeight: "250px",
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
