"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Offer = () => {
  const offers = [
    { 
      title: "Podovi i Stepenice", 
      text: "Vrhunska keramika za dugotrajne i elegantne podne i stepenišne obloge.", 
      image: "/images/offer-1.jpeg",
      slug: "podovi-i-stepenice" 
    },
    { 
      title: "Stolovi, Šankovi, Pultovi", 
      text: "Elegantne i otporne površine za stolove, šankove i pultove koji traju.", 
      image: "/images/offer-2.jpeg",
      slug: "stolovi-sankovi-pultovi" 
    },
    { 
      title: "Zidne, Radne Površine/Poleđine", 
      text: "Moderni zidni i radni paneli koji prostoru daju sofisticiran izgled i trajnost.", 
      image: "/images/offer-3.jpeg",
      slug: "zidne-radne-povrsine-poledjine" 
    },
  ];

  return (
    <section id="ponuda" className="w-full max-w-7xl 2xl:max-w-[1800px] mx-auto px-4 py-28 pb-0 xl:pb-16">
      {/* Title & Description */}
      <h2 className="text-center text-6xl">Ponuda</h2>
      <p className="text-center text-gray-600 mt-8 max-w-2xl mx-auto">
      Prvi u Srbiji donosimo A-klasu porcelanskih pločica debljine <strong>15 mm</strong> – savršen spoj vrhunskog dizajna, trajnosti i funkcionalnosti. Naše ploče su univerzalne i mogu se koristiti za podove, zidove, radne ploče, stepenice, šankove, stolove i prozorske daske.
      </p>

      {/* Offer Cards */}
      <div className="mt-20 flex flex-col xl:flex-row gap-4">
        {offers.map((offer, index) => (
          <Link href={`/${offer.slug}`} passHref key={index} className="relative max-w-4xl max-xl:w-full mx-auto xl:max-w-none xl:flex-1 xl:hover:flex-[2] h-[500px] lg:h-[600px] 2xl:h-[900px] overflow-hidden cursor-pointer transition-all duration-500 ease-in-out group">
              {/* Background Image */}
              <img src={offer.image} alt={offer.title} className="w-full h-full object-cover" />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6 text-white">
                <div className="relative ">
                  <div className="w-full max-w-[250px]">
                      <h3 className="text-2xl uppercase">{offer.title}</h3>
                      <p className="text-sm mt-3">
                          {offer.text}
                      </p>
                  </div>
                  <motion.div
                      className="hidden xl:flex absolute right-4 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                      <div className="arrow">
                          <span></span>
                      </div>
                  </motion.div>
                </div>
              </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Offer;
