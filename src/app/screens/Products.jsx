import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetch_products } from "../../store/actions";
const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((e) => e.productReducers);
  const fetch_get_products = async () => {
    const fetch_product_Data = await fetch_products();
    dispatch({ type: "setProductData", payload: fetch_product_Data });
    useEffect(() => {
      fetch_get_products();
    }, []);
  };
  return (
    <>
      <div className="flex flex-wrap justify-between gap-4 mt-5 px-3">
        {products.map((e) => (
          <ProductCard
            key={e.id}
            title={e.title}
            description={e.description}
            price={e.price}
          />
        ))}
      </div>
    </>
  );
};

export default Products;
