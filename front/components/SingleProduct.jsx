import React from "react";
import StarRatings from "react-star-ratings";
import Review from "../components/Review"

export default ({ selectedProduct, addProduct, reviews }) => {
  if (selectedProduct.image) {
    let urlImg = selectedProduct.image.slice(1);
    return (
      <div id="singleView" className="container">
        <form>
          <div className="row">
            <div id="singleProdImg" className="col-8 card card-body">
              <img
                src={`${window.location.origin}${urlImg}`}
                className="thumbnail"
                alt="Image"
              />
            </div>
            <div className="col-6">
              <br />

              <h2 className="mb-4">{selectedProduct.name}</h2>
              <ul className="list-group">
                <li id="singlePrice" className="list-group-item">
                  <strong>{selectedProduct.price}</strong>
                </li>
                <li className="list-group-item">
                  <strong>{selectedProduct.description}</strong>
                </li>
                <li className="list-group-item">
                  <small className="text-muted">
                    <StarRatings
                      rating={selectedProduct.rating}
                      starDimension="11px"
                      starSpacing="4px"
                      starRatedColor="rgb(188, 100, 100)"
                    />
                  </small>
                </li>
                <li className="list-group-item">
                  <strong>Product Reviews:</strong>
                  {reviews.map(review=>{
                    return (<Review key={review.id} author={review.author} rating ={review.rating} comment ={review.comment}/>)
                  })}
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="card card-body bg-dark my-5 text-light">
              <button
                onClick={() => addProduct(selectedProduct)}
                type="button"
                className="btn btn-default text-light"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  } else return <p>Loading...</p>;
};
