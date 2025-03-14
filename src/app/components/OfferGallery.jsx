"use client";

import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// Import plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Link from "next/link";
import Image from "next/image";

export default function OfferGallery({ images }) {
  return (
    <LightGallery
      speed={500}
      download={false}
      plugins={[lgThumbnail, lgZoom]}
      selector=".gallery-item"
      mobileSettings={{
        showCloseIcon: true,
        download: false,
      }}
    >
      {/* 
          For mobile: a single column grid
          For md and up: 4-column grid with the text div spanning 2 columns and 2 rows
      */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Text with buttons section */}
        <div className="p-4 flex flex-col justify-center md:col-span-2 md:row-span-2">
          <h2 className="text-4xl mb-4">Istražite Našu Ekskluzivnu Kolekciju</h2>
          <p className="text-lg mb-6">
            Otkrijte luksuzne podne i stepenišne pločice vrhunskog kvaliteta, dizajnirane da prostoru pruže eleganciju, dugotrajnost i sofisticiran izgled. Svaka pločica je pažljivo izrađena kako bi ispunila najviše estetske i funkcionalne standarde.
          </p>
          <div className="flex flex-col xl:flex-row gap-6">
            <Link
              href="/galerija"
              className="uppercase size-fit text-lg p-3 border-2 border-solid border-black"
            >
              Pogledajte celu Galeriju
            </Link>
            <Link
              href="#kontakt"
              className="uppercase size-fit text-lg p-3 border-2 border-solid border-black"
            >
              Kontaktirajte nas
            </Link>
          </div>
        </div>

        {/* Images: on mobile each takes a full row (auto height), on md+ a fixed height */}
        {images.map((src, index) => (
          <a
            key={index}
            href={src}
            className="gallery-item block w-full h-auto md:h-[220px]"
            data-src={src}
          >
            <Image
              alt={`Gallery image ${index + 1}`}
              width={0}
            height={0}
            sizes="100%"
              src={src}
              className="w-full h-full object-cover"
            />
          </a>
        ))}
      </div>
    </LightGallery>
  );
}
