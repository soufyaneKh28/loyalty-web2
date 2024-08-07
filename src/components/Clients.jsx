// "use client";

import React from "react";
import EmblaCarouselClients from "./ui/EmblaCarouselClients";
import Image from "next/image";
import { sou } from "../../public/assets";

// async function getData() {
//   const res = await fetch(
//     `https://seenfox.com/api/get_data.php?actions=client&lang_code=en`
//   );
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

async function Clients({ clients }) {
  // const datafetch = await getData();

  // console.log(clients);
  // console.log(datafetch.client);
  // console.log(clients, "this the object");
  return (
    <div>
      {/* <EmblaCarouselClients slides={SLIDES} options={OPTIONS} /> */}

      <EmblaCarouselClients>
        {clients.map((client, i) => (
          <div className="emblaClient__slide" key={i}>
            <div className="emblaClient__slide__number p-4">
              <div className="client flex flex-col md:flex-row items-center">
                <div className=" w-[120px] h-[120px] ">
                  <Image
                    src={`${client.client_image}`}
                    alt={client.client_image_alt}
                    className=" rounded-full h-full w-full"
                    width={300}
                    height={300}
                  />
                </div>
                <div className=" mt-3 flex-1 md:ms-5">
                  <p className=" text-[14px] md:text-[17px] text-center text-white max-w-[500px] md:text-start font-medium">
                    {client.client_desc}
                  </p>
                  <div className="text-white mt-4 text-center md:text-start">
                    <p className=" font-bold">{client.client_name}</p>
                    <p className=" font-light">{client.client_job}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}{" "}
      </EmblaCarouselClients>
    </div>
  );
}

export default Clients;
