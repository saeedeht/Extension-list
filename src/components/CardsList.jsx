import { Card } from "./Card";
import product from "../assets/data/product.json";

export const CardsList = () => {
  //   console.log("hi", product);
  return (
    <div className="flex flex-wrap gap-6">
      {product.map((i) => (
        <Card key={i.name} data={i} />
      ))}
    </div>
  );
};
