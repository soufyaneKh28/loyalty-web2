import { poppinsClass } from "@/app/font";
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
import data from "../../content-en";
import Link from "next/link";

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  // const id = params.id
  //  console.log('its id ===== ', params.blogId)
  //  console.log('its id ===== ', params.blogTitle)
  // fetch data
  async function getBlogsData() {
    const res = await fetch(
      `https://seenfox.com/api/get_data.php?actions=pageseo&lang_code=en`,
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
// async function getData() {
//   const res = await fetch(
//     "https://seenfox.com/api/get_data.php?actions=team,logo&lang_code=en"
//   );
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }
async function getServicesData() {
  const res = await fetch(
    "https://seenfox.com/api/get_data.php?actions=service&lang_code=en",
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
    "https://seenfox.com/api/get_data.php?actions=team,logo&lang_code=en",
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
    <main className={`${poppinsClass}`}>
      <MotionLayout delay={0.3}>
        <section className={`"flex  pb-5 py-[150px] `}>
          <div className="container md:justify-center md:items-center  flex flex-col ">
            <div className=" textContent text-center flex flex-col items-center">
              <MotionContainer
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h1 className="text-[40px] md:text-[50px] max-w-[350px]  md:max-w-[600px] font-bold text-primaryDark leading-[48px] md:*:text-center md:leading-[60px]">
                  {data.heroServices.title}
                </h1>
              </MotionContainer>
              <MotionContainer
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.6 }}
              >
                <p className=" mt-[10px] max-w-[300px] md:max-w-[700px] text-[#686567] text-[16px]  font-medium leading-[27px]">
                  {data.heroServices.description}
                </p>
                <Button href={"/en/contactUs"}>{data.heroServices.cta}</Button>
              </MotionContainer>
            </div>
          </div>
        </section>
        <section className="py-5">
          <div className="container flex flex-col items-center justify-center my-10">
            <div className=" flex flex-col items-start">
              <div className="flex items-center mb-[-5px]">
                <div className="w-[60px] h-[2px] bg-secondary mr-1"></div>
                <p className=" font-semibold text-secondary">
                  {data.services.smallTitle}
                </p>
              </div>
              <h2 className=" text-[26px] md:text-[32px] font-bold">
                {data.services.title}
              </h2>
            </div>
            <p className="text-center max-w-[550px]">
              {data.services.description}
            </p>
          </div>
          <Services object={services.service} />
        </section>
        <section className="py-5 bg-primaryDark">
          <Strategy object={data.strategy} />
        </section>
        <section className="py-10">
          <Features object={data.features} />
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
        <CallTo object={data} />
        <section className="py-10">
          <div className="container flex flex-col items-center justify-center my-10">
            <div className=" flex flex-col items-center">
              <div className="flex items-center mb-[-5px]">
                <div className="w-[60px] h-[2px] bg-secondary mr-1"></div>
                <p className=" text-secondary ">{data.partners.smallTitle}</p>
              </div>
              <h2 className="text-[27px] max-w-[550px] text-center font-bold">
                {data.partners.title}
              </h2>
            </div>
            <p className="text-center max-w-[550px] mt-3">
              {data.partners.description}
            </p>
          </div>
          <IconsSlider logos={team.logo} />
        </section>
      </MotionLayout>
    </main>
  );
};

export default page;
