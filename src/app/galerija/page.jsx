import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import PagesBanner from "../components/PagesBanner";

export default function GalleryPage() {
    return (<>
      <Header black />
      <main className="">
        <PagesBanner title={"Galerija"} text={"Pogledajte našu galeriju!"} />
        <Gallery />
      </main>
      <Footer />
      </>
    );
}