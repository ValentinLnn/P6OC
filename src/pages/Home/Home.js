import React from "react";
import Banner from "../../components/Banner/Banner";
import Apt from "../../components/Apt/Apt";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Homebannerimg from "../../assets/homeBanner.png";
const Home = () => {
  return (
    <div className="home">
          <Header />
        <main>
          <Banner text="Chez vous, partout et ailleurs" image={Homebannerimg} />
          <Apt />
        </main>
        <Footer />
      </div>
  );
};

export default Home;