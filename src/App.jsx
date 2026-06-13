import { CardsList } from "./components/CardsList";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { TopHeader } from "./components/TopHeader";
// import { product } from "../public/product.json";

// const products = JSON.stringify(product);

function App() {
  // console.log("hi", products);
  return (
    <>
      <Header />
      <TopHeader />
      <CardsList />
      <Footer />
    </>
  );
}

export default App;
