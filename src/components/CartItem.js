import { useEffect } from "react";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import Aos from "aos";
import "aos/dist/aos.css"

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  return (
    <div className="col-sm-8 mb-2">
      <div className="row mb-0 mx-1 py-3 bg-white text-dark boxShadow" data-aos="slide-down">
        <div className="col-2 cartImg">
          <img src={item.imageUrl} alt={item.name} />
        </div>
        <div className="col-3">
          <Link to={`/product/${item.product}`}>
            <p>{item.name}</p>
          </Link>
        </div>
        <div className="col">
          <div className="row gap-sm-3">
            <p className="col">#{item.price}</p>
            <select
              value={item.qty}
              onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
              className="border rounded col"
            >
              {[...Array(item.countInStock).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </select>
            <p className="col">
              <DeleteIcon color="secondary" onClick={() => removeHandler(item.product)}/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;