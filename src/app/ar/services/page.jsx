import { cairoClass } from "@/app/font";
import dataAr from "@/app/content-ar";
import {
  Button,
  CallTo,
  Features,
  IconsSlider,
  MotionContainer,
  MotionLayout,
  Services,
  Strategy,
} from "@/components";
import React from "react";
import Link from "next/link";

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  // const id = params.id
  //  console.log('its id ===== ', params.blogId)
  //  console.log('its id ===== ', params.blogTitle)
  // fetch data
  async function getBlogsData() {
    const res = await fetch(
      `https://seenfox.com/api/get_data.php?actions=pageseo&lang_code=ar`,
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
  const page = await getBlogsData();

  //  console.log('its page ===== ', page)
  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []
  if (page === null) {
    // redirect("/en/not-found");
  } else {
    console.log("this is the description", page.pageseo.Services);
    return {
      title: page.pageseo.Services.pageseo_title,
      description: `${page.pageseo.Services.pageseo_desc}`,
      keywords: ` ${page.pageseo.Services.pageseo_keywords}`,

      // openGraph: {
      //   images: ['/some-specific-page-image.jpg', ...previousImages],
      // },
    };
  }
}

async function getServicesData() {
  const res = await fetch(
    "https://seenfox.com/api/get_data.php?actions=service&lang_code=ar",
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

async function getTeamData() {
  const res = await fetch(
    "https://seenfox.com/api/get_data.php?actions=team,logo&lang_code=ar",
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
  const services = await getServicesData();
  const team = await getTeamData();

  return (
    <main className={`${cairoClass}`}>
      <MotionLayout>
        <section className={`"flex  pb-[100px] py-[150px] md:pt-[200px] `}>
          <div className="container md:justify-center md:items-center  flex flex-col ">
            <div className=" textContent text-center flex flex-col items-center">
              <MotionContainer
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h1 className=" text-[40px] max-w-[350px] md:text-[50px] md:max-w-[600px] font-black text-primaryDark leading-[65px] md:*:text-center md:leading-[60px]">
                  {dataAr.heroServices.title}
                </h1>
              </MotionContainer>
              <MotionContainer
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.6 }}
              >
                <p className=" mt-3 max-w-[350px] md:max-w-[700px] text-[#686567] text-[16px]  font-semibold leading-[27px]">
                  {dataAr.heroServices.description}
                </p>
                <Button href={"/ar/contactUs"}>
                  {dataAr.heroServices.cta}
                </Button>
              </MotionContainer>
            </div>
          </div>
        </section>
        <section className="py-5 servicesAr">
          <div className="container flex flex-col items-center justify-center my-10">
            <div className=" flex flex-col items-start">
              <div className="flex items-center mb-[-5px]">
                <div className="w-[60px] h-[2px] bg-secondary mr-1"></div>
                <p className=" text-secondary font-bold">
                  {dataAr.services.smallTitle}
                </p>
              </div>
              <h2 className="text-[32px] font-bold">{dataAr.services.title}</h2>
            </div>
            <p className="text-center max-w-[550px]">
              {dataAr.services.description}
            </p>
          </div>
          <Services object={services.service} options={"rtl"} />
        </section>
        <section className="py-5 bg-primaryDark">
          <Strategy object={dataAr.strategy} />
        </section>
        <section className="py-10">
          <Features object={dataAr.features} />
        </section>
        <section className=" bg-primaryDark py-20 flex justify-center">
          <div className=" rounded overflow-hidden">
            <iframe
              className=" w-[400px] h-[300px] md:w-[560px] md:h-[315px]"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/OgDwsp2Tl1o?si=cpX0DIb8ig9EUiM-"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </section>
        <CallTo object={dataAr} />
        <section className="py-10">
          <div className="container flex flex-col items-center justify-center my-10">
            <div className=" flex flex-col items-center">
              <div className="flex items-center mb-[-5px]">
                <div className="w-[60px] h-[2px] bg-secondary mr-1"></div>
                <p className=" text-secondary font-bold">
                  {dataAr.partners.smallTitle}
                </p>
              </div>
              <h2 className="text-[27px] max-w-[550px] text-center font-bold">
                {dataAr.partners.title}
              </h2>
            </div>
            <p className="text-center max-w-[550px] mt-3">
              {dataAr.partners.description}
            </p>
          </div>
          <IconsSlider logos={team.logo} />
        </section>
      </MotionLayout>
    </main>
  );
};

export default page;
