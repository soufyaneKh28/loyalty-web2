import { poppinsClass } from "@/app/font";
import {
  BounceBall,
  Button,
  MotionContainer,
  MotionLayout,
} from "@/components";
import Image from "next/image";
import React from "react";
import { homeHero, innov1, innovaition } from "../../../../public/assets";
import data from "@/app/content-en";
import Link from "next/link";

export const metadata = {
  title: "Our Innovations | Cutting-Edge Solutions by Loyalty Agency",
  description:
    "Stay ahead with Loyalty Agency's innovations in brand development, digital marketing, and programming. Explore our latest solutions and strategies designed to boost your business.",
  keywords:
    " innovations, cutting-edge solutions, brand development, digital marketing, programming, Loyalty Agency, business boost",
};

async function getInnovationData() {
  const res = await fetch(
    "https://seenfox.com/api/get_data.php?actions=innovations&lang_code=en",
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
  const innovations = await getInnovationData();
  return (
    <main className={`${poppinsClass}`}>
      <MotionLayout>
        <section className={`"flex  py-[100px] md:my-10 `}>
          <div className="container md:justify-between md:items-center  flex flex-col md:flex-row">
            <MotionContainer
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className=" textContent">
                <MotionContainer
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <h1 className=" text-[40px] max-w-[350px] md:text-[50px] md:max-w-[500px] font-bold text-primaryDark leading-[48px] md:leading-[60px]">
                    Pioneering Digital Innovations
                  </h1>
                </MotionContainer>
                <p className=" mt-[10px] max-w-[300px] md:max-w-[400px] text-[#686567] text-[16px]  font-medium">
                  Discover the innovative solutions we`ve developed to keep our
                  clients ahead in the digital landscape. Innovation is at the
                  heart of what we do.
                </p>
                <Button href={"/en/contactUs"}>Get Started</Button>
              </div>
            </MotionContainer>
            <div className=" flex justify-end relative mt-10">
              <BounceBall />

              <Image
                src={innovaition}
                alt="homeHero"
                className=" md:w-[420px] "
                width={350}
                priority={true}
              />
            </div>
          </div>
        </section>
        <section className=" bg-primaryDark py-10 md:mt-[100px]">
          <div className="container">
            {innovations.innovations.map((innov, i) => (
              <MotionLayout delay={0.3 * i} key={i}>
                <div
                  className={`innov-container flex  my-10  ${
                    i % 2 === 0
                      ? " md:flex-row-reverse flex-col-reverse"
                      : "md:flex-row flex-col"
                  }  justify-around `}
                  key={i}
                >
                  <div className="innov-text my-5 flex flex-col items-start justify-center ">
                    <Link
                      href={`/en/innovations/${
                        innov.innovations_id
                      }/${innov.innovations_name.replaceAll(" ", "-")}`}
                    >
                      <h2 className=" text-[28px] md:text-[36px] text-white font-bold hover:text-secondary transition-colors">
                        {innov.innovations_name}
                      </h2>
                    </Link>
                    <p className=" text-white max-w-[370px] font-normal mt-4 leading-7">
                      {innov.innovations_desc}
                    </p>
                    <Button
                      href={`/en/innovations/${
                        innov.innovations_id
                      }/${innov.innovations_name.replaceAll(" ", "-")}`}
                    >
                      Continue Story
                    </Button>
                  </div>
                  <div className="innov-img overflow-hidden w-[100%] md:max-w-[422px] h-[438px] rounded-[10px]">
                    <Link
                      href={`/en/innovations/${
                        innov.innovations_id
                      }/${innov.innovations_name.replaceAll(" ", "-")}`}
                      className=" w-full"
                    >
                      <Image
                        src={`${innov.innovations_image}`}
                        alt={`${innov.innovations_image_alt}`}
                        width={500}
                        height={500}
                        className=" hover:scale-110  w-full h-[100%] object-cover transition-all"
                      />
                    </Link>
                  </div>
                </div>
              </MotionLayout>
            ))}
          </div>
        </section>
      </MotionLayout>
    </main>
  );
};

export default page;
