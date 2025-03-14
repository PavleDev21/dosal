import Catalog from "../components/Catalog";
import PagesBanner from "../components/PagesBanner";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CatalogPage() {
    return (
      <>
        <Header black />
        <main className="">
          <PagesBanner title={"Katalog"} text={"Pogledajte naš katalog pločica i pronađite savršen dizajn za vaš prostor."} />
          <Catalog />
        </main>
        <Footer />
      </>
    );
}