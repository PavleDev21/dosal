"use client";
import { useState, useEffect } from "react";
import LightGallery from "lightgallery/react";
import Masonry from "react-masonry-css";

// Import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// Import plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Image from "next/image";

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(Array.from({ length: 41 }, (_, i) => `/images/gallery/gallery-${i + 1}.jpeg`));
  }, []);

  const breakpointColumnsObj = {
    default: 4,
    1024: 3,
    768: 2,
    500: 1,
  };

  return (
    <div className="py-4 px-4">
      <LightGallery speed={500} download={false} plugins={[lgThumbnail, lgZoom]} selector=".gallery-item" mobileSettings={{
    showCloseIcon: true,
    download: false,
  }}>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto -ml-4" // Negative margin fixes extra spacing
          columnClassName="pl-4" // Adds horizontal gap
        >
          {images.map((src, index) => (
            <a key={index} href={src} className="gallery-item flex mb-4" data-src={src}>
              <Image
                width={0}
                height={0}
                sizes="100%"
                alt={`Gallery image ${index + 1}`}
                src={src}
                className="w-full h-auto object-cover"
              />
            </a>
          ))}
        </Masonry>
      </LightGallery>
    </div>
  );
}
