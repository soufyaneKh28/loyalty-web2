import data from "@/app/content-en";
import { poppinsClass } from "@/app/font";
import Image from "next/image";
import React from "react";
import {
  facebook,
  instagram,
  linkedin,
  nextSvg,
  projectDe,
  soufyane1,
  x,
} from "../../../../public/assets";
import Link from "next/link";
import { redirect } from "next/navigation";
import { MotionContainer, MotionLayout } from "@/components";

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
    console.log("this is the description", page.pageseo.Blogs);
    return {
      title: page.pageseo.Blogs.pageseo_title,
      description: `${page.pageseo.Blogs.pageseo_desc}`,
      keywords: ` ${page.pageseo.Blogs.pageseo_keywords}`,

      // openGraph: {
      //   images: ['/some-specific-page-image.jpg', ...previousImages],
      // },
    };
  }
}
export const productsLength = data.blogs.length;
export const defaultPage = 1;
export const itemsPerPage = 6;
const pagesArray = [];
for (let i = 1; i <= Math.ceil(productsLength / itemsPerPage); i++) {
  pagesArray.push(i);
}


async function Blogs({ searchParams }) {
  // console.log(data.blogs.reverse());
  async function getBlogsData() {
    const res = await fetch(
      "https://seenfox.com/api/get_data.php?actions=blogs&lang_code=en",
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

  const blogs = await getBlogsData();

  const page = Number(searchParams.page ?? defaultPage);
  // console.log(searchParams);
  // console.log("page", page);

  // console.log("length", productsLength);
  // console.log("itemsparpage", itemsPerPage);
  // console.log("array", pagesArray);
  // i should solve the problem here
  if (page < 1 || page > Math.ceil(productsLength / itemsPerPage)) {
    redirect(`/en/not-found`);
  }
  return (
    <main className={`${poppinsClass}`}>
      <MotionLayout>
        <section className={`"flex  pb-5 py-[150px] `}>
          <div className="container md:justify-center md:items-center  flex flex-col ">
            <div className=" textContent text-center flex flex-col items-center">
              <MotionContainer
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.3 }}
              >
                <h1 className=" text-[50px] max-w-[350px] md:text-[50px] md:max-w-[600px] font-bold text-primaryDark leading-[48px] md:*:text-center md:leading-[60px]">
                  Our <span className=" text-secondary">Latest</span> Posts
                </h1>
              </MotionContainer>
              <MotionContainer
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.6 }}
              >
                <p className=" mt-[10px] max-w-[300px] md:max-w-[800px] text-[#686567] text-[16px]  font-medium leading-[27px]">
                  Check out our specialized articles on marketing and business,
                  valuable articles on the importance of marketing, programming,
                  and design in different fields. Digitization is a vast and
                  innovative world, but it is actually a science that is
                  developing very quickly and at a very impressive rate. Read
                  some articles regarding digital marketing, programming,
                  design, and how to apply them scientifically and practically
                  on the ground.
                </p>
              </MotionContainer>
            </div>
          </div>
        </section>
        <section>
          <div className=" container my-10 mb-[200px] flex flex-col md:flex-row justify-between">
            <div>
              <div className="blogs-cont min-h-[1000px] md-w-[80%] flex-wrap flex flex-col md:flex-row items-center md:items-start justify-start">
                {[...blogs.blogs]
                  .reverse()
                  .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                  .map((blog, i) => (
                    <MotionLayout delay={0.3 * i} key={i}>
                      <div className="blog m-2 max-w-[360px]">
                        <div className=" h-[225px] w-[360px]  overflow-hidden rounded-[20px]">
                          <Link
                            href={`/en/blogs/${
                              blog.blog_id
                            }/${decodeURIComponent(
                              blog.blog_title.replaceAll(" ", "-")
                            )}`}
                            className="h-[100%] w-full block"
                          >
                            <Image
                              src={`${blog.blog_image}`}
                              width={400}
                              height={200}
                              alt={blog.blog_image_alt}
                              className=" h-[100%] w-full object-cover hover:scale-110 transition-all cursor-pointer "
                            />
                          </Link>
                        </div>
                        <Link
                          href={`/en/blogs/${
                            blog.blog_id
                          }/${blog.blog_title.replaceAll(" ", "-")}`}
                        >
                          <h3 className=" max-w-[368px] text-[22px] leading-8 mt-3 cursor-pointer hover:text-secondary transition-all font-bold">
                            {blog.blog_title}
                          </h3>
                        </Link>
                        <div className=" flex justify-between mt-4 items-center">
                          <div className="date text-[#807B75] font-medium">
                            {blog.blog_date}
                          </div>
                          <div className="tag bg-[#B0D9DF] px-3 py-1 texr-[#003642] font-medium rounded-[5px]">
                            {blog.category_lang_name}
                          </div>
                        </div>
                      </div>
                    </MotionLayout>
                  ))}
              </div>

              <div className="pagination my-10 flex justify-center md:justify-start">
                <nav aria-label="" className="">
                  <ul class="inline-flex -space-x-px text-sm">
                    {Number(searchParams.page) === 1 ? null : (
                      <li>
                        <Link
                          href={`/en/blogs/?${new URLSearchParams({
                            page: String(page > 1 ? page - 1 : 1),
                          }).toString()}`}
                          className="flex items-center  font-bold justify-center px-1 h-10 ms-0 leading-tight rounded-[10px]  text-gray-500 bg-white border border-e-0 border-gray-300 "
                        >
                          <Image
                            src={nextSvg}
                            alt="next"
                            className=" rotate-[180deg]"
                          ></Image>
                        </Link>
                      </li>
                    )}
                    {pagesArray.map((num, i) => (
                      <li key={i}>
                        <Link
                          href={`/en/blogs?page=${num}`}
                          className={` flex ${
                            Number(searchParams.page) === num
                              ? " text-secondary"
                              : ""
                          } items-center justify-center px-5 h-10 leading-tight rounded-[10px]  font-bold text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                        >
                          {num}
                        </Link>
                      </li>
                    ))}
                    {Number(searchParams.page) ===
                    Math.ceil(productsLength / itemsPerPage) ? null : (
                      <li className=" rounded-[10px]">
                        <Link
                          href={`/en/blogs/?${new URLSearchParams({
                            page: String(
                              page < Math.ceil(productsLength / itemsPerPage)
                                ? page + 1
                                : Math.ceil(productsLength / itemsPerPage)
                            ),
                          }).toString()}`}
                          className="flex items-center justify-center px-1 h-10 rounded-[10px]   font-bold leading-tight text-gray-500 bg-white border border-gray-300  hover:bg-gray-100  "
                        >
                          <Image src={nextSvg} alt="next" className=""></Image>
                        </Link>
                      </li>
                    )}
                  </ul>
                </nav>
              </div>
            </div>
            <div className="side-bar flex-1 md:max-w-[33%] basis-[75%] ">
              <div>
                <h4 className=" font-bold">RECENT POST</h4>
                <div className="recent-blogs mt-3">
                  {[...blogs.blogs]
                    .reverse()
                    .slice(0, 3)
                    .map((blog, i) => (
                      <div className=" my-4 flex items-start" key={i}>
                        <div className=" w-[82px] h-[82px] rounded-[5px] overflow-hidden">
                          <Image
                            src={`${blog.blog_image ? blog.blog_image : ""}`}
                            alt="project"
                            width={100}
                            height={100}
                            className=" h-[100%] w-full object-cover "
                          />
                        </div>
                        <div className=" flex-1 flex-col justify-between ms-3">
                          <Link
                            href={`blogs/${blog.blog_id}/${
                              blog.blog_title &&
                              blog.blog_title.replaceAll(" ", "-")
                            }`}
                          >
                            <p className="  font-semibold hover:text-secondary transition-all leading-5 cursor-pointer cur">
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
          <div></div>
        </section>
      </MotionLayout>
    </main>
  );
}

export default Blogs;
