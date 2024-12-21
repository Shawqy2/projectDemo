import React from "react";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MenFeaturedProducts from "./components/MenFeaturedProducts";
import WomenFeaturedProducts from "./components/WomenFeaturedProducts";
import KidsFeaturedProducts from "./components/KidsFeaturedProductes";
import OurTeam from "./components/OurTeam";
import Footer from "./components/Footer";



const App = () => {
  return (
    <div>
      <Preloader />
      <Header />
      <HeroSection />
      <MenFeaturedProducts />
      <WomenFeaturedProducts />
      <KidsFeaturedProducts />
      <OurTeam />
      <Footer />
    </div>
  );
};

export default App;
