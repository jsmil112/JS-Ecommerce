import React from "react";
import StarRatings from "react-star-ratings";
import { CardDeck, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { TiPlus } from "react-icons/ti";

export default function SearchResults({ products }) {
  return (
    <div id="randomViewContainer">
      <CardDeck>
        {products.map(product => (
          <Card className="card text-center" id="productCard" key={product.id}>
            <Link to={`/product/${product.id}`}>
              <Card.Img variant="top" src={product.image} />
            </Link>
            <Card.Body id="prodBody">
              <Card.Title id="productName">{product.name}</Card.Title>
              <Card.Title id="productPrice">{product.price}</Card.Title>
              <small className="text-muted">
                <StarRatings
                  rating={product.rating}
                  starDimension="11px"
                  starSpacing="4px"
                  starRatedColor="rgb(188, 100, 100)"
                />
              </small>
              <hr />
              <Link to={`/product/${product.id}`}>
                <button id="plusBtn" className="btn btn-light">
                  <TiPlus /> info
                </button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </CardDeck>
    </div>
  );
}
