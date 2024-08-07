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
import { EmblaCarousel2 } from "@/components/ui/EmblaCarousel2";
import Form from "@/components/Form";
import Link from "next/link";
import { MotionLayout } from "@/components";
// import data from "@/app/content-en";

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
      `https://seenfox.com/api/get_data.php?actions=project&lang_code=ar&project_id=${params.projectId}`,
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
      title: product.project.project_name,
      description: `${product.project.project_descc}`,
      keywords: ` ${product.project.project_keyword}`,

      // openGraph: {
      //   images: ['/some-specific-page-image.jpg', ...previousImages],
      // },
    };
  }
}
async function Page({ params }) {
  async function getProjectsData() {
    const res = await fetch(
      `https://seenfox.com/api/get_data.php?actions=project&lang_code=ar&project_id=${params.projectId}`,
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
  const project = await getProjectsData();

  let exist = true;
  // metadata.title = decodeURIComponent(params.projectTitle).split("-").join(" ");

  // console.log(params.projectTitle);
  // console.log(decodeURIComponent(params.projectTitle));

  let projectObj = project.project;
  // metadata.title = `${projectObj.project_name}`;
  const arrayOfStrings = decodeURIComponent(params.projectTitle).split("-");

  // console.log(arrayOfStrings);
  let Title = `Visual-Identity-Souq-alfurat`;
  // let Title = arrayOfStrings.join(" ");

  // console.log(Title);
  if (
    !projectObj.service ||
    projectObj.project_name.replaceAll(" ", "-") !=
      decodeURIComponent(params.projectTitle)
  ) {
    exist = false;
    redirect(`/ar/not-found`);
  }
  const OPTIONS = { direction: "rtl" };
  return (
    <>
      <main className={` pt-[100px] ${cairoClass}`}>
        <MotionLayout>
          <section className="pt-10 md:pt-20">
            <div className="container">
              {/* {!exist ? null : (
          // <div className=" ">
          //   product title :{params.projectId} {params.projectTitle}{" "}
          //   {`${projectObj.title}`}
          // </div>
          )} */}
              <div>
                <h1 className=" text-center leading-[118%] text-[40px] md:text-[50px] font-black text-primaryDark">
                  {projectObj.project_name}
                </h1>

                <div className="project-details my-10 flex justify-center items-start gap-7 md:gap-[5rem]">
                  <div className="client flex flex-col items-center  justify-center">
                    <h4 className=" text-[#8A8A8A] font-semibold text-[15px] text-center ">
                      العميل
                    </h4>
                    <h6 className=" text-primaryDark font-bold text-center">
                      {projectObj.project_client}
                    </h6>
                  </div>
                  <div className="client flex flex-col items-center  ">
                    <h4 className=" text-[#8A8A8A] font-semibold text-[15px]">
                      الخدمات
                    </h4>
                    <h6 className=" text-primaryDark font-bold text-center">
                      {projectObj.service.service_name}
                    </h6>
                  </div>
                  <div className="client flex flex-col items-center ">
                    <h4 className=" text-[#8A8A8A] font-semibold text-[15px]">
                      المدة الزمنية
                    </h4>
                    <h6 className=" text-primaryDark font-bold text-center">
                      {projectObj.project_duration}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-images flex justify-end  ">
              <EmblaCarousel2>
                {projectObj.slider.map((project, i) => (
                  <div className=" mx-2 ms-[15px]  md:ms-[50px] " key={i}>
                    <div className="transition-colors  w-[350px] h-[250px] md:h-[535px] md:w-[800px] rounded-[10px] overflow-hidden">
                      <Image
                        src={project.slider_image}
                        alt={project.slider_image_alt}
                        className="w-[100%] h-[100%] object-cover"
                        width={1000}
                        height={500}
                      />
                    </div>
                  </div>
                ))}
                {}

                {/* <div className=" mx-2">
              <div className="transition-colors w-[350px] h-[250px] md:h-[535px] md:w-[800px] rounded-[10px] overflow-hidden">
              <Image
              src={projectObj.img}
              alt="img"
              className="w-[100%] h-[100%] object-cover"
              width={"100%"}
              height={"100%"}
              />
              </div>
              </div>
              <div className=" mx-2">
              <div className="transition-colors w-[350px] h-[250px] md:h-[535px] md:w-[800px] rounded-[10px] overflow-hidden">
              <Image
                  src={projectObj.img}
                  alt="img"
                  className="w-[100%] h-[100%] object-cover"
                  width={"100%"}
                  height={"100%"}
                  />
                  </div>
                  </div> */}
              </EmblaCarousel2>
            </div>
          </section>
          <section className=" bg-primaryDark py-[150px] mt-[-150px]">
            <div className="container">
              <div className="text-white my-6 flex flex-col md:flex-row md:justify-between">
                <h3 className=" text-[26px] font-bold">التحدي الذي يواجهنا</h3>
                <p className="mt-3 w-full md:w-[600px]">
                  {projectObj.project_text1}
                </p>
              </div>
              <div className="text-white my-20 flex flex-col md:flex-row md:justify-between">
                <h3 className=" text-[26px] font-bold">الحل والنتيجة</h3>
                <p className="mt-3 w-full md:w-[600px]">
                  {projectObj.project_text2}
                </p>
              </div>
            </div>
            <div className="container">
              <div className="w-full h-[2px] bg-slate-500"></div>
              <div className=" my-10 py-3">
                <h3 className=" text-white text-[24px] font-bold my-5 ">
                  المشاريع الأخيرة:{" "}
                </h3>
                <div className=" flex flex-col items-center md:flex-row md:justify-center gap-8">
                  {[...data.projects].slice(-3).map((project, i) => (
                    <div
                      className="project rounded-[10px] h-[416px] overflow-hidden w-[333px] relative"
                      key={i}
                    >
                      <div className=" w-full h-[50%] absolute bottom-0 project z-10 "></div>
                      <Image
                        src={project.project_image}
                        width={300}
                        height={600}
                        alt={project.project_image_alt}
                        className=" hover:scale-110  w-full h-full transition-all"
                      />
                      <div className="absolute bottom-[0px] z-20 px-3 translate-y-[-20%]">
                        <Link
                          href={`/ar/projects/${
                            project.project_id
                          }/${project.project_name.replaceAll(" ", "-")}`}
                        >
                          <h2 className=" text-white font-bold text-[28px] hover:text-secondary transition-colors cursor-pointer">
                            {project.project_name}
                          </h2>
                        </Link>
                        <div className="tags mt-4 flex gap-2">
                          <div className=" bg-white w-fit py-1 px-4 rounded-[5px] text-[14px] flex items-center font-semibold ">
                            {project.pcategory_lang_name}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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
