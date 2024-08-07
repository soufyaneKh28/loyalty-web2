import Image from "next/image";

import dataAr from "@/app/content-ar";
import BounceBall from "@/components/BounceBall";
import { contact, homeHero } from "../../../../public/assets";

// import  from "@/components/Services";
import StrategyAr from "@/components/StrategyAr";
import Features from "@/components/Features";

import Team from "@/components/Team";
import Clients from "@/components/Clients";
import {
  CallTo,
  IconsSlider,
  Statis,
  Services,
  Button,
  MotionContainer,
  MotionLayout,
} from "@/components";
import { cairoClass } from "@/app/font";
import Link from "next/link";

export const metadata = {
  title: "وكالة لويالتي | تطوير العلامة التجارية، التسويق الرقمي، والبرمجة",
  description:
    "مرحبًا بكم في وكالة لويالتي، شريككم في تطوير العلامة التجارية، التسويق الرقمي، والبرمجة. تأسست في 2013 ولديها فروع في تركيا، دبي، والولايات المتحدة الأمريكية. اكتشف كيف يمكننا مساعدة أعمالك على النجاح.",
  keyowrds:
    "وكالة لويالتي، تطوير العلامة التجارية، التسويق الرقمي، البرمجة، تركيا، دبي، الولايات المتحدة الأمريكية، نجاح الأعمال",
};

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

async function getCounterData() {
  const res = await fetch(
    "https://seenfox.com/api/get_data.php?actions=counter&lang_code=ar",
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
    `https://seenfox.com/api/get_data.php?actions=client&lang_code=ar`,
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
    <main dir="rtl" className={` ${cairoClass}`}>
      <section className={`"flex  py-5 pt-[100px]  `}>
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
                <h1 className=" font-black text-[40px] max-w-[350px] md:text-[50px] md:max-w-[500px]  text-primaryDark leading-[48px] md:leading-[60px]">
                  نقدم لك <span className=" text-secondary">النجاح </span>الرقمي{" "}
                </h1>
              </MotionContainer>
              <p className="   max-w-[300px] md:max-w-[400px] text-[#686567] text-[16px] my-3 mt-5 leading-7  font-semibold">
                لويلتي هي شريكك في تطوير العلامات التجارية والتسويق الرقمي
                والبرمجة. اكتشف كيف يمكننا رفع عملك إلى آفاق جديدة
              </p>
              <Button href={"/ar/contactUs"}>تواصل معنا</Button>
            </div>
          </MotionContainer>
          <div className=" flex justify-end relative mt-10 md:mt-0">
            <BounceBall />
            <MotionContainer
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.5 }}
            >
              <Image
                src={homeHero}
                alt="homeHero"
                className=" w-[350px] md:w-[420px]  scale-x-[-1] "
                width={350}
                priority={true}
              />
            </MotionContainer>
          </div>
        </div>
      </section>
      <section className="py-5 servicesAr">
        <MotionLayout>
          <div className="container flex flex-col items-center justify-center my-10">
            <div className=" flex flex-col items-start">
              <div className="flex items-center mb-[-5px]">
                <div className="w-[25px] h-[2px] bg-secondary mr-1"></div>
                <p className=" text-secondary font-bold">
                  {dataAr.services.smallTitle}
                </p>
              </div>
              <h2 className="text-[32px] font-extrabold">
                {dataAr.services.title}
              </h2>
            </div>
            <p className="text-center mt-3 leading-7 max-w-[550px]">
              {dataAr.services.description}
            </p>
          </div>
          <Services object={services.service} options={"rtl"} />
        </MotionLayout>
      </section>
      <section className="py-5 bg-primaryDark">
        <MotionLayout>
          <StrategyAr object={dataAr.strategy} />

          <div className="container flex flex-col md:flex-row md:justify-between md:items-center">
            <div className=" flex flex-col py-4 ">
              <div className=" flex flex-col items-start">
                <h2 className="text-[32px] font-bold w-[300px] md:w-auto  leading-9 mt-3 text-white">
                  {dataAr.grow.title}{" "}
                </h2>
              </div>
              <p className=" text-white  w-[270px] md:w-[385px]  text-[16px] mt-3 font-semibold">
                {dataAr.grow.description}
              </p>
              <Button href={"/ar/contactUs"}>{dataAr.grow.btn}</Button>
            </div>
            <div className=" flex justify-end relative mt-4 md:mt-0 ">
              <Image
                src={contact}
                alt="homeHero"
                className=" md:w-[420px] ml-[-40px] scale-x-[-1] "
                width={350}
                priority={true}
              />
            </div>
          </div>
        </MotionLayout>
      </section>
      <section className="py-5">
        <Features object={dataAr.features} />
      </section>
      <section className=" py-10">
        <MotionLayout>
          <div className="container flex flex-col items-center justify-center ">
            <div className=" flex flex-col items-center">
              <div className="flex items-center mb-[-5px]">
                <div className="w-[60px] h-[2px] bg-secondary mr-1"></div>
                <p className=" text-secondary">{dataAr.stats.smallTitle}</p>
              </div>
              <h2 className="text-[32px] w-[354px] font-bold text-center">
                {dataAr.stats.title}
              </h2>
            </div>
            <p className="text-center max-w-[550px] mt-3 leading-7 font-semibold">
              {dataAr.stats.description}
            </p>
          </div>
          <Statis stats={counter.counter} />
        </MotionLayout>
      </section>
      <section className="py-10">
        <MotionLayout>
          <div className="container flex flex-col items-center justify-center my-10">
            <div className=" flex flex-col items-center">
              <div className="flex items-center mb-[-5px]">
                <div className="w-[60px] h-[2px] bg-secondary mr-1"></div>
                <p className=" text-secondary ">{dataAr.clients.smallTitle}</p>
              </div>
              <h2 className="text-[32px] max-w-[300px] text-center font-bold">
                {dataAr.clients.title}
              </h2>
            </div>
            <p className="text-center max-w-[550px] mt-3 leading-7 font-semibold">
              {dataAr.clients.description}{" "}
            </p>
          </div>
          <Clients clients={clients.client} />
        </MotionLayout>
      </section>
      <section className="py-10 bg-primaryDark">
        <MotionLayout>
          <div className="container flex flex-col items-center justify-center my-10">
            <div className=" flex flex-col items-center">
              <div className="flex items-center mb-[-5px]">
                <div className="w-[60px] h-[2px] bg-secondary mr-1"></div>
                <p className=" text-secondary">{dataAr.members.smallTitle}</p>
              </div>
              <h2 className="text-[32px] font-bold text-white">
                {dataAr.members.title}
              </h2>
            </div>
            <p className="text-center max-w-[550px] leading-7 font-normal text-white mt-3">
              {dataAr.members.description}
            </p>
            {/* <Button>{dataAr.members.btn} </Button> */}
          </div>
          <Team members={team.team} />
        </MotionLayout>
      </section>

      <CallTo object={dataAr} />
      <section className="py-10">
        <div className="container flex flex-col items-center justify-center my-10">
          <div className=" flex flex-col items-center">
            <div className="flex items-center mb-[-5px]">
              <div className="w-[60px] h-[2px] bg-secondary mr-1"></div>
              <p className=" text-secondary ">{dataAr.partners.smallTitle}</p>
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
    </main>
  );
}
