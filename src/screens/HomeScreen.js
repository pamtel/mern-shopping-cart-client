import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// Components
import Carousel from "../components/Carousel";
import MobileCarousel from "../components/MobileCarousel";
import Product from "../components/Product";
// Actions
import { getProducts as listProducts } from "../redux/actions/productActions";

function HomeScreen() {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <div className="d-none d-md-block">
        <Carousel />
      </div>

      <div className="d-md-none">
        <MobileCarousel />
      </div>

      <div className="container py-5 ps-4 p-sm-5">
        <h2 className="text-center text-uppercase fs-1 my-4 fw-bolder">Latest Products</h2>
        <div className="">
          <div className="row gap-5 sm-gap-0">
            {loading ? (
              <h2>Loading...</h2>
            ) : error ? (
              <h2>{error}</h2>
            ) : products.length > 0 ? (
              products.map((product, index) => (
                <Product key={index} product={product} />
              ))
            ) : (
              <p>Products not found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;