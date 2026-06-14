import { CardsList } from "./components/CardsList";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { TopHeader } from "./components/TopHeader";
import products from "./assets/data/product.json";
import { useState } from "react";

function App() {
  const [filter, setFilter] = useState("all");

  const displayData = products.filter((item) => {
    if (filter === "active") return item.isActive;
    if (filter === "inActive") return !item.isActive;
    return true;
  });

  return (
    <>
      <Header />
      <TopHeader displayData={displayData} setFilter={setFilter} />
      <CardsList displayData={displayData} />
      <Footer />
    </>
  );
}

export default App;
