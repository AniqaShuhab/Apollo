import Image from "next/image";
import { partnerLogos } from "./partnerData";

const Partners = () => {
  return (
    <section className="py-4">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-6 max-w-[510px]">
              <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-2 dark:text-white">
                Our Technology Partners
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                We collaborate with industry leaders to deliver the best solutions
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-0">
          {partnerLogos.map((partner) => (
            <div
              key={partner.id}
              className="p-2 flex items-center justify-center"
            >
              <div className="relative h-20 w-full flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                  className="object-contain max-h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;