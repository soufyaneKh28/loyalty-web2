import { cairoClass, poppinsClass } from "@/app/font";
import {
  BounceBall,
  Button,
  MotionContainer,
  MotionLayout,
} from "@/components";
import Image from "next/image";
import React from "react";
import { homeHero, innov1, innovaition } from "../../../../public/assets";
import data from "@/app/content-ar";
import Link from "next/link";

export const metadata = {
  title: "ابتكاراتنا | حلول متطورة من وكالة لويالتي",
  description:
    "حافظ على الصدارة مع ابتكارات وكالة لويالتي في تطوير العلامة التجارية، التسويق الرقمي، والبرمجة. استكشف أحدث الحلول والاستراتيجيات المصممة لتعزيز أعمالك",
  keywords:
    "الابتكارات، حلول متطورة، تطوير العلامة التجارية، التسويق الرقمي، البرمجة، وكالة لويالتي، تعزيز الأعمالك",
};

async function getInnovationData() {
  const res = await fetch(
    "https://seenfox.com/api/get_data.php?actions=innovations&lang_code=ar",
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
    <main className={`${cairoClass}`}>
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
                  <h1 className=" text-[40px] max-w-[350px] md:text-[50px] md:max-w-[500px] font-black text-primaryDark leading-[48px] md:leading-[60px]">
                    الابتكارات <span className=" text-secondary">لدينا </span>
                  </h1>
                </MotionContainer>

                <p className="mt-[10px] max-w-[300px] md:max-w-[400px] text-[#686567] text-[16px] leading-7 my-3 font-semibold">
                  اكتشف الحلول المبتكرة التي طورناها للحفاظ على تقدم عملائنا في
                  العالم الرقمي. الابتكار هو جوهر ما نقوم به.
                </p>
                <Button href={"/ar/contactUs"}>تواصل معنا</Button>
              </div>
            </MotionContainer>
            <div className=" flex justify-end mt-10 md:mt-0 relative">
              <BounceBall />
              <Image
                src={innovaition}
                alt="homeHero"
                className=" md:w-[420px] scale-x-[-1] "
                width={350}
                priority={true}
              />
            </div>
          </div>
        </section>
        <section className=" bg-primaryDark py-10 md:mt-[100px]">
          <div className="container">
            {/* <div className="innov-container flex flex-col md:flex-row items-center justify-between">
            <div className="innov-text flex-1">
              <h2 className="text-[36px] text-white font-bold">
                The Story Of Monarize
              </h2>
              <p className=" text-white max-w-[370px] font-normal mt-4">
              Monarisa! Or Mona Lisa?MonaRize A commercial company working in
              the field of real estate and tourism, specifically located in
              Rize, Risa is the attractive city and unique painting in the
              Turkish north, its mountains, plateaus, sea and sky, as well as
              the case in its weather and people. Actually, this city is a
              unique painting, one of a kind in the natural creativity that it
              is in.
              </p>
              <button className="w-fit text-primary text-[14px] font-semibold mt-6  bg-secondary rounded-full px-9  py-3">
              Continue Story
              </button>
              </div>
              <div className="innov-img overflow-hidden rounded-[10px]">
              <Image
              src={innov1}
              alt="innov1"
              className=" hover:scale-110 transition-all"
              />
              </div>
              </div> */}
            {innovations.innovations.map((innov, i) => (
              <div
                className={`innov-container flex  my-10  ${
                  i % 2 === 0
                    ? " md:flex-row-reverse flex-col-reverse"
                    : "md:flex-row flex-col"
                }  justify-around `}
                key={i}
              >
                <div className="innov-text my-5 flex flex-col items-start ">
                  <div>
                    <Link
                      href={`/ar/innovations/${
                        innov.innovations_id
                      }/${innov.innovations_name.replaceAll(" ", "-")}`}
                    >
                      <h2 className="text-[36px] text-white font-bold hover:text-secondary transition-colors">
                        {innov.innovations_name}
                      </h2>
                    </Link>
                    <p className=" text-white max-w-[370px] leading-7 my-3 font-normal mt-4">
                      {innov.innovations_desc}
                    </p>
                  </div>
                  <Button
                    href={`/ar/innovations/${
                      innov.innovations_id
                    }/${innov.innovations_name.replaceAll(" ", "-")}`}
                  >
                    أكمل القصة
                  </Button>
                </div>
                <div className="innov-img overflow-hidden max-w-[422px] h-[438px] rounded-[10px]">
                  <Link
                    href={`/ar/innovations/${
                      innov.innovations_id
                    }/${innov.innovations_name.replaceAll(" ", "-")}`}
                  >
                    <Image
                      width={500}
                      height={500}
                      src={innov.innovations_image}
                      alt={innov.innovations_image_alt}
                      className=" hover:scale-110 h-[100%] object-cover transition-all"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </MotionLayout>
    </main>
  );
};

export default page;
