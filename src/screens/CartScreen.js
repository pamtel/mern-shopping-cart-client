import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css"
// component
import CartItem from "../components/CartItem";
// Actions
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

function CartScreen() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, [])

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  }

  const getCartSubtotal = () => {
    return cartItems.reduce((price, item) => item.price * item.qty + price, 0);
  }

  return (
    <div className="container p-sm-5">
      <h2 className="pt-3 pt-sm-0 pb-4 text-center fs-2 fw-bold">
        Shopping Cart
      </h2>
      <div className="row">
        {cartItems.length === 0 ? (
          <div>
            Your Cart is empty <Link to="/">Go Back</Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.product}
              item={item}
              qtyChangeHandler={qtyChangeHandler}
              removeHandler={removeHandler}
            />
          ))
        )}
        <div className="col-sm-3 mt-3 mt-sm-0">
          <div className="card boxShadow" data-aos="fade-up" style={{ width: "18rem" }}>
            <ul className="list-group mb-2">
              <li className="list-group-item">
                <h5>Subtotal ({getCartCount()}) items</h5>
                <p>#{getCartSubtotal().toFixed(2)}</p>
              </li>
            </ul>
            <p className="text-center mb-2">
              <button className="btn btn-outline-info">
                Proceed to checkbox
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartScreen;
