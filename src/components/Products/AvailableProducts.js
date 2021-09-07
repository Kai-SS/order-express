import Card from "../UI/Card";
import ProductItem from "./ProductItem/ProductItem";
import classes from "./AvailableProducts.module.css";

const DUMMY_PRODS = [
  {
    id: "m1",
    name: "iPhone 12 Pro",
    description: "Blast past fast.",
    price: 1699,
  },
  {
    id: "m2",
    name: "iPad Pro 12.9-inch",
    description: "The ultimate iPad experience.",
    price: 1649,
  },
  {
    id: "m3",
    name: "MacBook Pro 16-inch",
    description: "The best for the brightest",
    price: 4099,
  },
  {
    id: "m4",
    name: "iMac 27-inch",
    description: "Ready for big things.",
    price: 2699,
  },
];

const AvailableProducts = () => {
  const mealsList = DUMMY_PRODS.map((prod) => (
    <ProductItem
      key={prod.id}
      name={prod.name}
      description={prod.description}
      price={prod.price}
    />
  ));
  return (
    <section className={classes.products}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableProducts;
