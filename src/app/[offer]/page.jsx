import { categories } from "./content";
import { notFound } from "next/navigation";
import Header from "../components/Header";
import OfferBanner from "../components/OfferBanner";
import Footer from "../components/Footer";
import OfferGallery from "../components/OfferGallery";

export default async function OfferPage({ params }) {
  const { offer } = await params;
  const offerData = categories[offer];

  if (!offerData) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero / Banner section */}
        <OfferBanner
          title={offerData.title}
          description={offerData.description}
          background={offerData.hero}
          heroPosition={offerData.hero_position}
        />

        {/* Gallery + Text section */}
        <section className="min-h-screen max-w-7xl mx-auto px-4 py-20">
          <OfferGallery images={offerData.images} />
        </section>
      </main>
      <Footer />
    </>
  );
}
