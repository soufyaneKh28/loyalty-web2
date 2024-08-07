// "use client";

import data from "@/app/content-ar";
import Image from "next/image";
// import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { redirect } from "next/navigation";
import { cairoClass, poppinsClass } from "@/app/font";
import { MetaData } from "next";
import Head from "next/head";
import EmblaCarousel from "@/components/ui/EmblaCarousel";
import Form from "@/components/Form";
import { EmblaCarousel2 } from "@/components/ui/EmblaCarousel2";
import { MotionLayout } from "@/components";

// export const generateMetaData = ({ params }): Metadata => {
//   return {
//     title: params.projectTitle,
//   };
// };
export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  // const id = params.id
  //  console.log('its id ===== ', params.blogId)
  //  console.log('its id ===== ', params.blogTitle)
  // fetch data
  // const product = await fetch(
  //   `https://seenfox.com/api/get_data.php?actions=project&lang_code=en&project_id=${params.projectId}`
  // ).then((res) => res.json());

  // //  console.log('its product ===== ', product)
  // // optionally access and extend (rather than replace) parent metadata
  // // const previousImages = (await parent).openGraph?.images || []
  // if (product.project === null) {
  //   redirect("/en/not-found");
  // } else {
  //   // console.log("this is the description", product.blog.blog_desc);
  //   return {
  //     title: product.project.project_name,
  //     description: `${product.project.project_descc}`,
  //     keywords: ` ${product.project.project_keyword}`,

  //     // openGraph: {
  //     //   images: ['/some-specific-page-image.jpg', ...previousImages],
  //     // },
  //   };
  // }

  async function getBlogsData() {
    const res = await fetch(
      `https://seenfox.com/api/get_data.php?actions=innovation&lang_code=ar&innovations_id=${params.id}`,
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
  const product = await getBlogsData();

  //  console.log('its product ===== ', product)
  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []
  if (product.project === null) {
    redirect("/ar/not-found");
  } else {
    // console.log("this is the description", product.blog.blog_desc);
    return {
      title: product.innovation.innovations_name,
      description: `${product.innovation.innovations_descc}`,
      keywords: ` ${product.innovation.innovations_keyword}`,

      // openGraph: {
      //   images: ['/some-specific-page-image.jpg', ...previousImages],
      // },
    };
  }
}
// async function getStaticProps({ params }) {
//   console.log("Server-side log:", params.projectId);
//   return {
//     props: {
//       projectId: params.projectId,
//     },
//   };project.title

// }

async function Page({ params }) {
  let exist = true;
  async function getInnovationData() {
    const res = await fetch(
      `https://seenfox.com/api/get_data.php?actions=innovation&lang_code=ar&innovations_id=${params.id}`,
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
  const innovation = await getInnovationData();
  console.log("Visual-Identity-Souq-alfurat");

  let projectObj = innovation.innovation;
  // const arrayOfStrings = params.projectTitle.split("-");
  // metadata.title = `${projectObj.title}`;

  // // console.log(arrayOfStrings);
  // let Title = arrayOfStrings.join(" ");

  // console.log(Title);
  if (
    !projectObj.innovations_name ||
    projectObj.innovations_name.replaceAll(" ", "-") !=
      decodeURIComponent(params.innovTitle)
  ) {
    exist = false;
    redirect(`/ar/not-found`);
  }

  return (
    <>
      <main className={` pt-[100px] ${cairoClass}`}>
        <MotionLayout>
          <section className="py-10 md:py-20  ">
            <div className="container md:flex">
              {/* {!exist ? null : (
            // <div className=" ">
            //   product title :{params.projectId} {params.projectTitle}{" "}
            //   {`${projectObj.title}`}
            // </div>
            )} */}
              <div className=" my-5 md:w-[50%] flex-1">
                <div className=" font-bold text-secondary">اقرأ </div>
                <h1 className=" text-start leading-[118%] text-[50px] font-bold text-primaryDark">
                  {projectObj.innovations_name}
                </h1>
                <p
                  className="max-w-[400px] my-3 leading-7 font-semibold
                "
                >
                  {projectObj.innovations_desc}
                </p>
                {/* <button className="w-fit text-primary text-[14px] font-medium mt-4  bg-secondary rounded-full px-9 py-3">
                  Get Started
                </button> */}
              </div>
              <div className="project-images innovations  flex-1">
                <EmblaCarousel2>
                  {projectObj.slider.map((innov, i) => (
                    <div className=" mx-2  md:ms-10  " key={i}>
                      <div className="transition-colors w-[350px] h-[300px] md:h-[438px] md:w-[420px] rounded-[10px] overflow-hidden">
                        <Image
                          src={innov.slider_image}
                          alt={innov.slider_image_alt}
                          className="w-[100%] h-[100%] object-cover"
                          width={500}
                          height={500}
                        />
                      </div>
                    </div>
                  ))}
                  {}
                </EmblaCarousel2>
              </div>
            </div>
          </section>
          <section className=" bg-primaryDark  pb-[100px] ">
            <div className="container">
              <section className="relative overflow-hidden">
                <div className="mt-2 md:mt-0 py-12 pb-6 sm:py-16 lg:pb-24 overflow-hidden">
                  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
                    <div className="relative mt-12 lg:mt-20">
                      <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                        <svg
                          className="w-full"
                          xmlns="http://www.w3.org/2000/svg"
                          width="870"
                          height="48"
                          viewBox="0 0 875 48"
                          fill="none"
                        >
                          <path
                            d="M2 29C20.2154 33.6961 38.9915 35.1324 57.6111 37.5555C80.2065 40.496 102.791 43.3231 125.556 44.5555C163.184 46.5927 201.26 45 238.944 45C312.75 45 385.368 30.7371 458.278 20.6666C495.231 15.5627 532.399 11.6429 569.278 6.11109C589.515 3.07551 609.767 2.09927 630.222 1.99998C655.606 1.87676 681.208 1.11809 706.556 2.44442C739.552 4.17096 772.539 6.75565 805.222 11.5C828 14.8064 850.34 20.2233 873 24"
                            stroke="#D4D4D8"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-dasharray="1 12"
                          />
                        </svg>
                      </div>
                      <div className="relative grid grid-cols-1 text-center gap-y-8 sm:gap-y-10 md:gap-y-12 md:grid-cols-3 gap-x-12">
                        <div>
                          <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gray-800 border-2 border-gray-700 rounded-full shadow">
                            <span className="text-xl font-semibold text-gray-200">
                              1
                            </span>
                          </div>
                          <h3 className="mt-4 sm:mt-6 text-xl font-bold leading-tight text-white md:mt-10">
                            الفكرة
                          </h3>
                          <p className="mt-3 sm:mt-4 text-base text-gray-400 leading-7">
                            {projectObj.innovations_text1}
                          </p>
                        </div>
                        <div>
                          <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gray-800 border-2 border-gray-700 rounded-full shadow">
                            <span className="text-xl font-semibold text-gray-200">
                              2
                            </span>
                          </div>
                          <h3 className="mt-4 sm:mt-6 text-xl font-bold leading-tight text-white md:mt-10">
                            التصميم
                          </h3>
                          <p className="mt-3 sm:mt-4 text-base text-gray-400 leading-7">
                            {projectObj.innovations_text2}
                          </p>
                        </div>
                        <div>
                          <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gray-800 border-2 border-gray-700 rounded-full shadow">
                            <span className="text-xl font-semibold text-gray-200">
                              3
                            </span>
                          </div>
                          <h3 className="mt-4 sm:mt-6 text-xl font-bold leading-tight text-white md:mt-10">
                            التطبيق
                          </h3>
                          <p className="mt-3 sm:mt-4 text-base text-gray-400 leading-7">
                            {projectObj.innovations_text3}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="container">
              <div className="w-full h-[2px] bg-slate-500"></div>
            </div>
          </section>
          <section className=" bg-primaryDark pb-[100px]">
            <div className="container flex justify-center">
              <div className="w-[100%] md:w-[80%]">
                <Form object={data.form} />
              </div>
            </div>
          </section>
        </MotionLayout>
      </main>
    </>
  );
};

export default Page;
