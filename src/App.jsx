import { CardsList } from "./components/CardsList";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { TopHeader } from "./components/TopHeader";
import products from "./assets/data/product.json";

function App() {
  return (
    <>
      <Header />
      <TopHeader products={products} />
      <CardsList products={products} />
      <Footer />
    </>
  );
}

export default App;
