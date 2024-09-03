import Image from "next/image";

import data from "@/app/content-en";
import BounceBall from "@/components/BounceBall";
import { contact, homeHero } from "../../public/assets";
import "./globals.css";

import {
  Services,
  Strategy,
  Features,
  Clients,
  Statis,
  CallTo,
  IconsSlider,
  MotionContainer,
  Button,
  MotionLayout,
  Menubar,
  Footer,
} from "@/components";
import Team from "@/components/Team";
import { motionContainer } from "@/components/ui/motionContainer";
import { poppinsClass } from "@/app/font";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
// import data from "@/app/content-en";
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
    console.log("this is the description", page.pageseo.Home);
    return {
      title: page.pageseo.Home.pageseo_title,
      description: `${page.pageseo.Home.pageseo_desc}`,
      keywords: ` ${page.pageseo.Home.pageseo_keywords}`,

      // openGraph: {
      //   images: ['/some-specific-page-image.jpg', ...previousImages],
      // },
    };
  }
}

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

async function getCounterData() {
  const res = await fetch(
    "https://seenfox.com/api/get_data.php?actions=counter&lang_code=en",
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

async function getData() {
  const res = await fetch(
    `https://seenfox.com/api/get_data.php?actions=client&lang_code=en`,
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

export default async function Home() {
  const team = await getTeamData();
  const counter = await getCounterData();
  const clients = await getData();
  const services = await getServicesData();
  return (
    <>
      <Menubar />
      <main className={`${poppinsClass}`}>
        <section className={`"flex  pb-5 pt-[100px] `}>
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
                    Empowering{" "}
                    <span className="text-secondary">Your Digital</span> Success
                  </h1>
                </MotionContainer>
                <p className=" mt-[10px] max-w-[300px] md:max-w-[400px] text-[#686567] text-[16px]  font-medium">
                  Loyalty is your partner in brand development, digital
                  marketing, and programming. Discover how we can elevate your
                  business to new heights
                </p>
                <Button href={"/en/contactUs"}>Get Started</Button>
              </div>
            </MotionContainer>
            <div className=" flex justify-end relative">
              <BounceBall />

              <Image
                src={homeHero}
                alt="homeHero"
                className=" md:w-[420px] "
                width={350}
                priority
              />
            </div>
          </div>
        </section>
        <section className="py-5">
          <MotionLayout>
            <div className="container flex flex-col items-center justify-center my-10">
              <div className=" flex flex-col items-start">
                <div className="flex items-center mb-[-5px]">
                  <div className="w-[60px] h-[2px] bg-secondary mr-1"></div>
                  <p className=" text-secondary">{data.services.smallTitle}</p>
                </div>
                <h2 className=" text-[26px] md:text-[32px] font-bold">
                  {data.services.title}
                </h2>
              </div>
              <p className="text-center max-w-[550px] mt-3">
                {data.services.description}
              </p>
            </div>
            <Services object={services.service} />
          </MotionLayout>
        </section>
        <section className="py-5 bg-primaryDark">
          <MotionLayout>
            <Strategy object={data.strategy} />
            <div className="container flex flex-col md:flex-row md:justify-between md:items-center">
              <div className=" flex flex-col py-4 ">
                <div className=" flex flex-col items-start">
                  <h2 className=" text-[26px] md:text-[32px] font-bold w-[350px] md:w-auto  leading-9 mt-3 text-white">
                    {data.grow.title}
                  </h2>
                </div>
                <p className=" text-white  w-[270px] md:w-[385px]  text-[16px] mt-4">
                  {data.grow.description}
                </p>
                <Button href={"/en/contactUs"}>{data.grow.btn}</Button>
              </div>
              <div className=" flex justify-end relative mt-4 md:mt-0 ">
                <Image
                  src={contact}
                  alt="homeHero"
                  className=" md:w-[420px] mr-[-40px] "
                  width={350}
                />
              </div>
            </div>
          </MotionLayout>
        </section>
        <section className="py-10">
          <Features object={data.features} />
        </section>
        <section className=" py-10">
          <MotionLayout>
            <div className="container flex flex-col items-center justify-center ">
              <div className=" flex flex-col items-center">
                <div className="flex items-center mb-[-5px]">
                  <div className="w-[60px] h-[2px] bg-secondary mr-1"></div>
                  <p className=" text-secondary">{data.stats.smallTitle}</p>
                </div>
                <h2 className=" text-[26px] md:text-[32px] w-[354px] font-bold text-center">
                  {data.stats.title}
                </h2>
              </div>
              <p className="text-center max-w-[550px] mt-3">
                {data.stats.description}
              </p>
            </div>
            <Statis object={data.stats} stats={counter.counter} />
          </MotionLayout>
        </section>
        <section className="py-10">
          <MotionLayout>
            <div className="container flex flex-col items-center justify-center my-10">
              <div className=" flex flex-col items-center">
                <div className="flex items-center mb-[-5px]">
                  <div className="w-[60px] h-[2px] bg-secondary mr-1"></div>
                  <p className=" text-secondary ">{data.clients.smallTitle}</p>
                </div>
                <h2 className=" text-[26px] md:text-[32px]   md:max-w-[300px] text-center font-bold">
                  {data.clients.title}
                </h2>
              </div>
              <p className="text-center max-w-[550px] mt-3">
                {data.clients.description}
              </p>
            </div>
            <Clients clients={clients.client} />
          </MotionLayout>
        </section>
        <section className="py-5 pb-10 bg-primaryDark">
          <MotionLayout>
            <div className="container flex flex-col items-center justify-center my-10">
              <div className=" flex flex-col items-center">
                <div className="flex items-center mb-[-5px]">
                  <div className="w-[60px] h-[2px] bg-secondary mr-1"></div>
                  <p className=" text-secondary">{data.members.smallTitle}</p>
                </div>
                <h2 className=" text-[26px] md:text-[32px] font-bold text-white">
                  {data.members.title}
                </h2>
              </div>
              <p className="text-center max-w-[550px] font-normal text-white mt-3">
                {data.members.description}
              </p>
              {/* <Button>{data.members.btn}</Button> */}
            </div>
            <Team members={team.team} />
          </MotionLayout>
        </section>
        <CallTo object={data} />
        <section className="py-10">
          <div className="container flex flex-col items-center justify-center my-10">
            <div className=" flex flex-col items-center">
              <div className="flex items-center mb-[-5px]">
                <div className="w-[60px] h-[2px] bg-secondary mr-1"></div>
                <p className=" text-secondary font-bold">
                  {data.partners.smallTitle}
                </p>
              </div>
              <h2 className="text-[26px] md:text-[32px] max-w-[550px] text-center font-bold">
                {data.partners.title}
              </h2>
            </div>
            <p className="text-center max-w-[550px] mt-3">
              {data.partners.description}
            </p>
          </div>
          <IconsSlider logos={team.logo} />
        </section>
      </main>
      <Footer />
    </>
  );
}
