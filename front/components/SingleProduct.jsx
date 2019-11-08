import React from "react"
import { Link } from "react-router-dom"
import { CardDeck, Card } from "react-bootstrap";
import StarRatings from "react-star-ratings";


export default ({ selectedProduct }) => {
    if (selectedProduct.image) {
        let urlImg = selectedProduct.image.slice(1)    
    return ( 

            <div>
                <Link to={"/"}>Home</Link>

                <Card>
                <Card.Img variant="top" src={`${window.location.origin}${urlImg}`} />
                <Card.Body>
                <Card.Title>{selectedProduct.name}</Card.Title>
                <Card.Title>{selectedProduct.price}</Card.Title>
                <Card.Title>{selectedProduct.description}</Card.Title>

                </Card.Body>
                <Card.Footer>
                <small className="text-muted">
                    <StarRatings
                    rating={selectedProduct.rating}
                    starDimension="11px"
                    starSpacing="4px"
                    />
                </small>
                </Card.Footer>
                <button>Add to cart</button>
            </Card>
            </div>
    )
    } else return (<p>Loading...</p>)
}