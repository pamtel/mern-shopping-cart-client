import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Aos from "aos";
import "aos/dist/aos.css"
// Actions
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

function ProductScreen({ match, history }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, product, match]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push("/cart");
  }

  return (
    <div className="container p-5">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <div className="d-sm-flex" data-aos="fade-up">
          <div className="col">
            <div className="mb-4">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="rounded-3"
              />
            </div>
            <div className="mb-4">
              <p className="fs-5 fw-bold">{product.name}</p>
              <p className="fs-6 fw-bold">Price: #{product.price}</p>
              <p>Description: {product.description}</p>
            </div>
          </div>

          <div className="col ms-sm-5">
            <div className="ms-sm-5">
              <div className="card boxShadow">
                <div className="list-group list-group-flush m-3">
                  <h5 className="list-group-item mb-3 d-flex justify-content-between">
                    Price: <span>#{product.price}</span>
                  </h5>
                  <h6 className="list-group-item mb-3 d-flex justify-content-between">
                    Status: <span>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</span>
                  </h6>
                  <p className="list-group-item mb-3 d-flex justify-content-between">
                    Qty
                    <select value={qty} onChange={(e) => setQty(e.target.value)} className="border px-3 py-1 rounded">
                     {[...Array(product.countInStock).keys()].map((x) => {
                       return(
                        <option key={x+1} value={x+1}>{x+1}</option>
                       )
                     })}
                    </select>
                  </p>
                  <p className="text-center">
                    <button onClick={addToCartHandler} className="btn btn-outline-info">
                      Add to Cart
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductScreen;
