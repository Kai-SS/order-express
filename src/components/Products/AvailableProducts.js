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
  const mealsList = DUMMY_PRODS.map((prod) => <li>{prod.name}</li>);
  return (
    <section className={classes.products}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableProducts;
