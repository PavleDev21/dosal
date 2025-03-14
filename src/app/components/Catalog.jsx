"use client";
import { useState } from "react";
import Image from "next/image";
import LightGallery from "lightgallery/react";

// Import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-rotate.css";

// Import plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgRotate from "lightgallery/plugins/rotate";
import { MagnifyingGlassPlus } from "@phosphor-icons/react";

const filters = ["800x3000", "800x2400", "800x3200", "1200x3200"];

const catalogItems = [
  { name: "DIAMOND GOLD – MT", image: "/images/catalog/800X2400/800X2400 DIAMOND GOLD.jpeg", dimension: "800x3000" },
  { name: "STATUARIO ORO MT", image: "/images/catalog/800X3000/800X3000 STATUARIO ORO.jpeg", dimension: "800x3000" },
  { name: "SNP IVORY - GL", image: "/images/catalog/800X3000/800X3000 SNP IVORY.jpeg", dimension: "800x3000" },
  { name: "STEEL GREY - GL", image: "/images/catalog/800X3000/800X3000 STEEL GREY.jpeg", dimension: "800x3000" },
  { name: "BIANCO CARRARA - GL", image: "/images/catalog/800X3000/800X3000 BIANCO CARRARA.jpeg", dimension: "800x3000" },
  { name: "CRYSTAL WHITE - MT", image: "/images/catalog/800X3000/800X3000 CRYSTAL WHITE.jpeg", dimension: "800x3000" },
  { name: "ARMANI GREY R - GL", image: "/images/catalog/800X2400/800x2400 ARMANI GREY.jpeg", dimension: "800x2400" },
  { name: "MACEDONIA WHITE R - GL", image: "/images/catalog/800X2400/800x2400 MECEDONIA WHITE.jpeg", dimension: "800x2400" },
  { name: "CRYSTAL WHITE", image: "/images/catalog/800X3000/800X3000 CRYSTAL WHITE.jpeg", dimension: "800x2400" },
  { name: "DIAMOND GOLD – MT", image: "/images/catalog/800X2400/800X2400 DIAMOND GOLD.jpeg", dimension: "800x2400" },
  { name: "BELLIZA SILVER R – GL", image: "/images/catalog/800X2400/800X2400 BELLIZA SILVER.jpeg", dimension: "800x2400" },
  { name: "NATURAL VENEER - MT", image: "/images/catalog/800X2400/800X2400 NATURAL VENEER.jpeg", dimension: "800x2400" },
  { name: "PLASTRO WHITE - MT", image: "/images/catalog/800X2400/800X2400 PLASTRO WHITE.jpeg", dimension: "800x2400" },
  { name: "PIETRA NERO - GL", image: "/images/catalog/800X2400/800X2400 PIETRA NERO.jpeg", dimension: "800x2400" },
  { name: "ARMANI GREY", image: "/images/catalog/800X2400/800x2400 ARMANI GREY.jpeg", dimension: "800x3200" },
  { name: "NERO SAINT LORENT - GL", image: "/images/catalog/800X3200/800X3200 NERO SAINT LORENT.jpeg", dimension: "800x3200" },
  { name: "STATURIO ALASKA - GL", image: "/images/catalog/800X3200/800X3200 STATUARIO ALASKA.jpeg", dimension: "800x3200" },
  { name: "PIETRA GREY - MT", image: "/images/catalog/800X3200/800X3200 PIETRA GREY.jpeg", dimension: "800x3200" },
  { name: "PETAGONIA GL", image: "/images/catalog/800X3200/800X3200 PANTAGONIA.jpeg", dimension: "800x3200" },
  { name: "NATURAL PINE - MT", image: "/images/catalog/800X3200/800X3200 NATURAL PINE.jpeg", dimension: "800x3200" },
  { name: "TURKIYE GRAPHITE R - GL", image: "/images/catalog/800X3200/800X3200 TURKIYE GRAPHITE.jpeg", dimension: "800x3200" },
  { name: "ANGEL WHITE - GL", image: "/images/catalog/800X3200/800X3200 ANGEL WHITE.jpeg", dimension: "800x3200" },
  { name: "CALISTO WHITE - GL", image: "/images/catalog/800X3200/800X3200 CALISTO WHITE.jpeg", dimension: "800x3200" },
  { name: "MARQUINA MTA", image: "/images/catalog/1200X3200/1200X3200 MARQUINA.jpeg", dimension: "1200x3200" },
  { name: "ARMANI GREY - GL", image: "/images/catalog/800X2400/800x2400 ARMANI GREY.jpeg", dimension: "1200x3200" },
  { name: "ROMA WHITE MTB", image: "/images/catalog/1200X3200/1200 X3200 ROMA WHITE.jpeg", dimension: "1200x3200" },
];

export default function Catalog() {
  const [selectedFilter, setSelectedFilter] = useState(null);

  const filteredItems = selectedFilter
    ? catalogItems.filter((item) => item.dimension === selectedFilter)
    : catalogItems;

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      {/* Filter Buttons */}
      <div className="flex flex-wrap items-center gap-3 mb-6 p-2">
        <p className="text-lg">Dimenzije:</p>
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter === selectedFilter ? null : filter)}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              selectedFilter === filter ? "bg-gray-700 text-white" : "bg-gray-300 text-gray-700"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Catalog Grid with LightGallery */}
      <LightGallery speed={500} download={false} rotate={false} zoom={false} plugins={[lgThumbnail, lgZoom, lgRotate]} selector=".catalog-item" mobileSettings={{
        showCloseIcon: true,
        zoom: true,
        flipHorizontal: false,
        flipVertical: false,
        rotateLeft: false,
        download: false,
        rotate: true
      }}>
        <div className="flex flex-wrap">
          {filteredItems.map((item, index) => (
            <div key={index} className="w-1/2 md:w-1/5 p-4 px-1 text-center flex flex-col items-center">
              <a href={item.image} className="catalog-item relative group" data-src={item.image}>
                <Image
                  src={item.image}
                  width={0}
                  height={0}
                  sizes="100%"
                  alt={item.name}
                  className="w-36 h-36 xl:w-44 xl:h-44 object-cover rounded-xl"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <MagnifyingGlassPlus size={50} className="text-white" />
                </div>
              </a>
              <p className="mt-2 text-md">{item.name}</p>
            </div>
          ))}
        </div>
      </LightGallery>
    </section>
  );
}
