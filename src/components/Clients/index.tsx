import Image from "next/image";
import { clientLogos } from "./clientData";

const Clients = () => {
  return (
    <section className="py-4">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-6 max-w-[510px]">
              <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-2 dark:text-white">
                Our Happy Clients
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Join 50+ of satisfied customers using our solutions globally.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-0">
          {clientLogos.map((client) => (
            <div
              key={client.id}
              className="p-2 flex items-center justify-center"
            >
              <div className="relative h-20 w-full flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={client.image}
                  alt={client.name}
                  width={client.width}
                  height={client.height}
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

export default Clients;