import { poppinsClass } from "@/app/font";
import Image from "next/image";
import React from "react";
import {
  email,
  facebook,
  instagram,
  linkedin,
  location,
  phone,
  x,
} from "../../../../public/assets";
import Link from "next/link";

import { ContactMap, MotionLayout } from "@/components";
import dynamic from "next/dynamic";

const socialMedia = [
  {
    icon: facebook,
    link: "https://www.facebook.com/loyaltysocial",
  },
  {
    icon: instagram,
    link: "https://www.instagram.com/LOYALTYSOCIAL/",
  },
  {
    icon: linkedin,
    link: "https://www.linkedin.com/company/loyaltysocial",
  },
  {
    icon: x,
    link: "https://x.com/loyaltysocial",
  },
];

import Map from "@/components/Map";
import Form from "@/components/Form";
import data from "@/app/content-en";

export const metadata = {
  title: "Contact Loyalty Agency | Let's Start Your Success Journey",
  description:
    "Get in touch with Loyalty Agency. With offices in Turkey, Dubai, and the USA, we are ready to discuss your brand development, digital marketing, and programming needs. Let's start your success journey today!",
  keywords:
    " contact, Loyalty Agency, brand development, digital marketing, programming, Turkey, Dubai, USA, success journey",
};

async function getPreferenceData() {
  const res = await fetch(
    "https://seenfox.com/api/get_data.php?actions=preference&lang_code=en",
    { cache: "no-store" }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function page() {
  const preference = await getPreferenceData();

  return (
    <main className={`mt-[60px] ${poppinsClass}`}>
      <MotionLayout>
        <section className=" py-10  md:py-20">
          <div className="container  flex flex-col md:flex-row md:items-start md:justify-between ">
            <div className="text">
              <h1 className=" font-bold text-[40px] md:text-[50px]">
                Get in Touch
              </h1>
              <p className=" max-w-[500px]">
                {preference.preference[0].preference_desc}
              </p>
              <div className="contact my-6">
                <div className="phone my-2 flex items-center gap-2">
                  <div className=" bg-primaryDark w-[40px] h-[40px] rounded-full flex justify-center items-center p-2">
                    <Image src={phone} alt="phone" width={30} />
                  </div>
                  <p>{preference.preference[0].preference_phone}</p>
                </div>
                <div className="phone  my-2 flex items-center gap-2">
                  <div className=" bg-primaryDark w-[40px] h-[40px] rounded-full flex justify-center items-center p-2">
                    <Image src={email} alt="phone" width={30} />
                  </div>
                  <p>{preference.preference[0].preference_email}</p>
                </div>
              </div>
              <div className="social flex gap-2 mt-4">
                {socialMedia.map((icon, i) => (
                  <Link href={icon.link} key={i}>
                    <div className=" icon w-[40px] h-[40px] hover:bg-white transition-colors bg-secondary rounded-full flex justify-center items-center">
                      <Image
                        src={icon.icon}
                        alt="facebook"
                        width={23}
                        priority
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className=" mt-20 md:mt-0  max-w-[450px] flex-1">
              <Form object={data.form} />
            </div>
          </div>
        </section>
        <section>
          <div className=" bg-secondary flex flex-col md:flex-row  ">
            <div className="container flex flex-col md:flex-row">
              <div className=" flex flex-col items-start justify-center my-10">
                <div className=" flex flex-col items-start">
                  <div className="flex items-center mb-[-5px]">
                    <div className="w-[25px] h-[2px] bg-white mr-1"></div>
                    <p className=" text-white">Our office</p>
                  </div>
                  <h2 className="text-[32px] font-bold text-white">
                    See Our Location on The Map
                  </h2>
                </div>
                <div className=" flex gap-4 my-4">
                  <div className=" bg-primaryDark w-[40px] h-[40px] rounded-full p-2">
                    <Image src={location} alt="location" />
                  </div>
                  <p className=" max-w-[270px] md:max-w-[350px]">
                    {preference.preference[0].preference_address}
                  </p>
                </div>
              </div>
            </div>
            <Map />
          </div>
        </section>
      </MotionLayout>
    </main>
  );
};

export default page;