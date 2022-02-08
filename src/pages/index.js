import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductList from "../components/ProductList";

const Home = ({ products }) => {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon-v2</title>
      </Head>
      <Header />
      <main>
        <Banner />
        <ProductList products={products} />
      </main>
    </div>
  );
};
export async function getServerSideProps() {
  const products = await fetch(`https://fakestoreapi.com/products`).then(
    (res) => res.json()
  );

  return { props: { products } };
}
export default Home;
