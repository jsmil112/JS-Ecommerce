import React from "react";
import StarRatings from "react-star-ratings";
import { CardDeck, Card } from "react-bootstrap";

export default function RandomView({ products }) {
  return (
    <CardDeck>
      {products.map(product => (
        <Card key={product.id}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Title>{product.price}</Card.Title>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <StarRatings
                rating={product.rating}
                starDimension="12px"
                starSpacing="4px"
              />
            </small>
          </Card.Footer>
          <button>Add to cart</button>
        </Card>
      ))}
    </CardDeck>
  );
}
