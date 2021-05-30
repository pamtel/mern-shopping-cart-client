import { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css"

function Product(props) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, [])

  const {imageUrl, name, price, description, _id:productId} = props.product;

   return (
    <div className="col mb-3 mb-sm-0">
      <div className="card" data-aos="zoom-in" style={{width: "20rem"}}>
        <img
          src={imageUrl}
          alt={name}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title text-dark fs-6 fw-bold">{name}</h5>
          <p className="card-text text-dark">
           {description?.substring(0, 100)}...
          </p>
          <p className="card-text text-dark">#{price}</p>
          <Link to={`/product/${productId}`}>
            <button className="btn btn-info">View</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product;
