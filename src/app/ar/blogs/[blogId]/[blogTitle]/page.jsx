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
import Link from "next/link";
import { facebook, instagram, linkedin, x } from "../../../../../../public/assets";
import { MotionLayout } from "@/components";

// export const generateMetaData = ({ params }): Metadata => {
//   return {
//     title: params.projectTitle,
//   };
// };

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


export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  // const id = params.id
  async function getBlogsData() {
    const res = await fetch(
      `https://seenfox.com/api/get_data.php?actions=blog&lang_code=en&blog_id=${params.blogId}`,
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
  if (product.blog === null) {
    redirect("/en/not-found");
  } else {
    console.log("this is the description", product.blog.blog_desc);
    return {
      title: product.blog.blog_title,
      description: `${product.blog.blog_desc}`,
      keywords: ` ${product.blog.blog_keyword}`,

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
  //   let exist = true;
  async function getBlogsData() {
    const res = await fetch(
      `https://seenfox.com/api/get_data.php?actions=blog&lang_code=ar&blog_id=${params.blogId}`,
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
  //   console.log("Visual-Identity-Souq-alfurat");
  const blogs = await getBlogsData();
  let blogObj = blogs.blog;
  let title = decodeURIComponent(params.blogTitle);
  // console.log("it iiiiiiiis gereratestatic ====>", title);
  // console.log("it is params=============>", params.blogTitle);
  // console.log(
  //   "it is title with dashed=============>",
  //   blogObj.blog_title.replaceAll(" ", "-")
  // );
  // metadata.title = blogObj.title;
  //   const arrayOfStrings = params.projectTitle.split("-");

  //   console.log(arrayOfStrings);
  //   let Title = arrayOfStrings.join(" ");

  //   console.log(Title);
  if (
    blogObj === null ||
    blogObj.blog_title.replaceAll(" ", "-").replace("?", "") !=
      decodeURIComponent(params.blogTitle)
  ) {
    // exist = false;
    redirect(`/ar/not-found`);
  }

  return (
    <>
      <main className={` pt-[100px] ${cairoClass}`}>
        <MotionLayout>
          <section>
            <div className=" container my-10 mb-[200px] flex gap-5  flex-col md:flex-row justify-between">
              <div className="blogs-cont w-full md:w-[90%] flex-wrap flex flex-col md:flex-row items-center md:items-start justify-start">
                <MotionLayout>
                  <div className="blog m-2 ">
                    <div className="  h-[325px]  overflow-hidden rounded-[20px]">
                      <Image
                        src={`${blogObj.blog_image}`}
                        width={500}
                        height={300}
                        alt={`${blogObj.blog_image_alt}`}
                        className=" h-[100%] w-full object-cover hover:scale-110 transition-all cursor-pointer "
                      />
                    </div>
                    <h3 className=" font-black text-[28px] leading-9 mt-5 cursor-pointer  transition-all ">
                      {blogObj.blog_title}
                    </h3>
                    <div className=" flex justify-between mt-4 items-center">
                      <div className="date text-[#807B75] font-medium">
                        {blogObj.blog_date}
                      </div>
                      {/* <div className="tag bg-[#B0D9DF] px-3 py-1 texr-[#003642] font-medium rounded-[5px]">
                        {blogObj.tag}
                      </div> */}
                    </div>

                    <div className=" my-5 leading-7 font-semibold">
                      <div
                        dangerouslySetInnerHTML={{ __html: blogObj.blog_descc }}
                      ></div>
                    </div>
                  </div>
                </MotionLayout>
              </div>
              <div className="side-bar  ">
                <div>
                  <h4 className=" font-bold">RECENT POST</h4>
                  <div className="recent-blogs mt-3">
                    {[...data.blogs]
                      .slice(-3)
                      .reverse()
                      .map((blog, i) => (
                        <div className=" my-4 flex items-start" key={i}>
                          <div className=" w-[82px] h-[82px] rounded-[5px] overflow-hidden">
                            <Image
                              src={blog.blog_image}
                              alt={`${blog.blog_image_alt}`}
                              width={100}
                              height={100}
                              className=" h-[100%] w-full  object-cover "
                            />
                          </div>
                          <div className=" flex-1 flex-col justify-between ms-3">
                            <Link
                              href={`/ar/blogs/${blog.blog_id}/${
                                blog.blog_title &&
                                blog.blog_title.replaceAll(" ", "-")
                              }`}
                            >
                              <p className="  font-bold hover:text-secondary transition-all leading-5 cursor-pointer cur">
                                {blog.blog_title}
                              </p>
                            </Link>
                            <div className="date text-[#807B75] font-medium mt-3">
                              {blog.blog_date}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                <div className=" w-full h-[1px] bg-[#B9B9B9] my-5" />
                <div className="">
                  <h4 className=" font-bold">SOCIAL MEDIA</h4>
                  <div className=" flex  my-3 gap-1">
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
              </div>
            </div>
          </section>
        </MotionLayout>
      </main>
    </>
  );
};

export default Page;
