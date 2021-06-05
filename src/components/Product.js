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

    <div className="col-md-4 px-md-4  mb-5">
   
      <div className="card h-100 w-100" data-aos="zoom-in">
        <div className="img-box">
        <img
          src={imageUrl}
          alt={name}
          className="card-img-top"
        />
        </div>
       
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
