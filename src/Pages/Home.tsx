import Header from "../Components/Header";
import Nav from "../Components/Nav";
import NewsLetter from "../Components/NewsLetter";
import ProductsSecton from "../Components/ProductsSection";

function Home() {
  return (
    <>
      <Nav />
      <Header />
      <ProductsSecton />
      <NewsLetter />
    </>
  );
}

export default Home;
