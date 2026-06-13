import { Card } from "./Card";

export const CardsList = ({ products }) => {
  return (
    <div className="flex flex-wrap gap-6">
      {products.map((item) => (
        <Card key={item.name} data={item} />
      ))}
    </div>
  );
};
