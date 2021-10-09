import Card from "../UI/Card";
import ProductItem from "./ProductItem/ProductItem";
import classes from "./AvailableProducts.module.css";
import { useEffect, useState } from "react";

const AvailableProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://orderexpress-fda47-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
      );
      const responseData = await response.json();
      const loadProducts = [];
      for (const key in responseData) {
        loadProducts.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setProducts(loadProducts);
    };
    fetchProducts();
  }, []);

  const productsList = products.map((prod) => (
    <ProductItem
      id={prod.id}
      key={prod.id}
      name={prod.name}
      description={prod.description}
      price={prod.price}
    />
  ));
  return (
    <section className={classes.products}>
      <Card>
        <ul>{productsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableProducts;
