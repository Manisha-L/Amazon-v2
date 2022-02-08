import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";

const Home = ({ products }) => {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon-v2</title>
      </Head>
      <Header />
      <Banner />
    </div>
  );
};

export default Home;
