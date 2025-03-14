import Image from "next/image";
import Banner from "./components/Banner";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Offer from "./components/Offer";
import Options from "./components/Options";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <AboutUs />
        <Offer />
        <Options />
      </main>
      <Footer />
    </>
  );
}
