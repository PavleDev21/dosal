import { motion } from "framer-motion";
import Image from "next/image";

const OfferSection = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-center text-3xl font-semibold">Ponuda</h2>
      <p className="text-center text-gray-600 mt-2">
        Lorem ipsum dolore sit amote Lorem ipsum dolore sit amote Lorem ipsum dolore...
      </p>

      <div className="mt-10 flex flex-col md:flex-row gap-4">
        {["Podovi i Stepenice", "Kuhinje", "Radne Površine"].map((title, index) => (
          <motion.div
            key={index}
            className="relative flex-[2] md:flex-1 md:hover:flex-[2] h-[300px] overflow-hidden rounded-lg cursor-pointer transition-all duration-300 ease-in-out"
          >
            <Image
              width={0}
              height={0}
              sizes="100%"
              src={`/images/offer-${index + 1}.jpg`}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end p-4 text-white">
              <h3 className="text-lg font-semibold">{title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OfferSection;
