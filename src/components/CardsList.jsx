import { Card } from "./Card";

export const CardsList = ({ displayData }) => {
  console.log("cardList", displayData);
  return (
    <div className="flex flex-wrap gap-6">
      {displayData.map((item) => (
        <Card key={item.name} data={item} />
      ))}
    </div>
  );
};
