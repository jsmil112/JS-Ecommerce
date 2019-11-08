import React from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { CardDeck, Card } from "react-bootstrap";

export default function RandomView({ products }) {
  return (
    <div>
      <CardDeck>
        {products.map(product => (
          <Card key={product.id}>
            <Link to={`/product/${product.id}`}>
              <Card.Img variant="top" src={product.image} />
            </Link>
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Title>{product.price}</Card.Title>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                <StarRatings
                  rating={product.rating}
                  starDimension="11px"
                  starSpacing="4px"
                />
              </small>
            </Card.Footer>
            <button>Add to cart</button>
          </Card>
        ))}
      </CardDeck>
    </div>
  );
}
