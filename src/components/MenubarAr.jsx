"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { cairoClass } from "@/app/font";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { logo, menu, close, uk, ar } from "../../public/assets";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";
import { Router } from "next/router";

const links = [
  {
    link: "الرئيسية",
    href: "/ar/home",
  },
  {
    link: "من نحن",
    href: "/ar/about",
  },
  {
    link: "خدماتنا",
    href: "/ar/services",
  },
  {
    link: "المشاريع",
    href: "/ar/projects",
  },
  {
    link: "المدونة",
    href: "/ar/blogs",
  },
  {
    link: "تواصل معنا",
    href: "/ar/contactUs",
  },
];

// export async function getServerSideProps(context) {
//   const { params } = context;
//   const currentPath = `/${params.path.join("/")}`;
//   // Use currentPath for data fetching or other server-side logic

//   return {
//     props: {
//       currentPath,
//     },
//   };
// }

export default function MenubarAr() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // console.log(pathname);

  function onChange(e) {
    setSelectedLanguage(e.target.value);
  }

  let id = pathname.split("/");
  let path = pathname.split("/");

  function handleLAnguageChange() {}

  useEffect(
    function () {
      if (selectedLanguage) {
        if (path[1] === "ar") {
          if (path[3] && path[2] === "innovations") {
            async function IdFetchingAr() {
              async function getBlogsData() {
                const res = await fetch(
                  `https://seenfox.com/api/get_data.php?actions=innovation&lang_code=en&innovations_id=${id[3]}`,
                  { cache: "no-store" }
                );
                // The return value is *not* serialized
                // You can return Date, Map, Set, etc.

                if (!res.ok) {
                  // This will activate the closest `error.js` Error Boundary
                  throw new Error("Failed to fetch data");
                }
                //
                return res.json();
              }
              const innovation = await getBlogsData();
              // let blogObj = blogs.blog;
              // console.log("this is the blooooog ===================", project);
              // console.log(
              //   "this is the ARABIC blooooog modified ttttttttttttitle===================",
              //   project.project.project_name.replaceAll(" ", "-")
              // );
              // // setTitle(() => blogs.blog.blog_title);
              // console.log("this title staaaaaaaate =====", title);
              // console.log("this is a path test", pathname.replace("", "////"));
              router.push(
                `/en/innovations/${
                  id[3]
                }/${innovation.innovation.innovations_name.replaceAll(
                  " ",
                  "-"
                )}`
              );
            }
            IdFetchingAr();
            return;
          }

          if (path[3] && path[2] === "projects") {
            async function IdFetchingAr() {
              async function getBlogsData() {
                const res = await fetch(
                  `https://seenfox.com/api/get_data.php?actions=project&lang_code=en&project_id=${id[3]}`,
                  { cache: "no-store" }
                );
                // The return value is *not* serialized
                // You can return Date, Map, Set, etc.

                if (!res.ok) {
                  // This will activate the closest `error.js` Error Boundary
                  throw new Error("Failed to fetch data");
                }
                //
                return res.json();
              }
              const project = await getBlogsData();
              // let blogObj = blogs.blog;
              // console.log("this is the blooooog ===================", project);
              // console.log(
              //   "this is the ARABIC blooooog modified ttttttttttttitle===================",
              //   project.project.project_name.replaceAll(" ", "-")
              // );
              // setTitle(() => blogs.blog.blog_title);
              // console.log("this title staaaaaaaate =====", title);
              // console.log("this is a path test", pathname.replace("", "////"));
              router.push(
                `/en/projects/${
                  id[3]
                }/${project.project.project_name.replaceAll(" ", "-")}`
              );
            }
            IdFetchingAr();
            return;
          }

          if (path[3] && path[2] == "blogs") {
            async function IdFetchingEn() {
              async function getBlogsDataen() {
                const res = await fetch(
                  `https://seenfox.com/api/get_data.php?actions=blog&lang_code=en&blog_id=${id[3]}`,
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
              const blogs = await getBlogsDataen();
              // console.log("this is the blooooog ===================", blogs);
              // console.log(
              //   "this is the blooooog ENGLISH modified  ttttttttttttitle===================",
              //   blogs.blog.blog_title.replaceAll(" ", "-")
              // );

              router.push(
                `/en/blogs/${id[3]}/${blogs.blog.blog_title.replaceAll(
                  " ",
                  "-"
                )}`
              );
            }
            IdFetchingEn();
          } else {
            const newPath = pathname.replace("ar", selectedLanguage);
            router.push(newPath);
          }
        }
        if (path[1] === "en") {
          if (pathname.includes("blogs")) {
            //   async function IdFetchingAr() {
            //     async function getBlogsData() {
            //       const res = await fetch(
            //         `https://seenfox.com/api/get_data.php?actions=blog&lang_code=ar&blog_id=${id[3]}`,
            //         { cache: "no-store" }
            //       );
            //       // The return value is *not* serialized
            //       // You can return Date, Map, Set, etc.
            //       if (!res.ok) {
            //         // This will activate the closest `error.js` Error Boundary
            //         throw new Error("Failed to fetch data");
            //       }
            //       return res.json();
            //     }
            //     const blogs = await getBlogsData();
            //     let blogObj = blogs.blog;
            //     console.log("this is the blooooog ===================", blogs);
            //     console.log(
            //       "this is the ARABIC blooooog modified ttttttttttttitle===================",
            //       blogs.blog.blog_title.replaceAll(" ", "-")
            //     );
            //     setTitle(() => blogs.blog.blog_title);
            //     console.log("this title staaaaaaaate =====", title);
            //     console.log("this is a path test", pathname.replace("", "////"));
            //     router.push(
            //       `/ar/blogs/${id[3]}/${blogs.blog.blog_title.replaceAll(
            //         " ",
            //         "-"
            //       )}`
            //     );
            //   }
            //   IdFetchingAr();
            //   return;
          } else if (!pathname.includes("blogs")) {
            const newPath = pathname.replace("en", selectedLanguage);
            router.push(newPath);
          }
        }

        if (pathname === "/") {
          const newPath = pathname.replace("/", `${selectedLanguage}/home`);
          router.push(newPath);
        }
      }
    },
    [selectedLanguage, pathname, router]
  );

  // console.log(pathname);
  return (
    <div className="container flex justify-center">
      <header
        className={` ${
          isScrolled || isOpen ? "scrolled" : ""
        }  ${cairoClass} header py-4 rounded-[20px] md:rounded-full  flex flex-col max-w-[95%] md:max-w-[1200px]  mt-3  items-center font-Ibm fixed w-full bg-white z-[50] transition-all`}
      >
        <div className="container flex items-center justify-between ">
          <Link href="/ar/home">
            <Image src={logo} alt="logo" width={80} />
          </Link>

          <nav className="  hidden md:block">
            <ul className="flex gap-9">
              {/* {links.map((link) => {
                return (
                  <Link
                    href={link.href}
                    key={link.link}
                    className=" font-bold text-[17px] text-[#27272F] hover:text-[#F8360A] transition-colors"
                  >
                    {link.link}
                  </Link>
                );
              })} */}
              <li>
                <Link
                  href={`/ar/home`}
                  className=" font-bold text-[17px] text-[#27272F] hover:text-[#F8360A] transition-colors"
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  href={`/ar/about`}
                  className=" font-bold text-[17px] text-[#27272F] hover:text-[#F8360A] transition-colors"
                >
                  من نحن
                </Link>
              </li>
              <li>
                <Link
                  href={`/ar/services`}
                  className=" font-bold text-[17px] text-[#27272F] hover:text-[#F8360A] transition-colors"
                >
                  خدماتنا
                </Link>
              </li>
              <li>
                <div className=" dropdown ">
                  <Link
                    href={`/ar/projects?page=1`}
                    className=" flex items-center projects dropdown font-bold text-[17px] text-[#27272F] hover:text-[#F8360A] transition-colors"
                  >
                    المشاريع
                    <svg
                      className=" svg fill-current ms-2 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                    </svg>
                  </Link>
                  <ul class="dropdown-menu absolute hidden px-3  py-3 rounded-[10px] bg-white  pt-3">
                    <li class="">
                      <Link
                        className="font-bold text-[17px] text-[#27272F] hover:text-[#F8360A] transition-colors"
                        href="/ar/innovations"
                      >
                        الابتكارات
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  href={`/ar/blogs?page=1`}
                  className=" font-bold text-[17px] text-[#27272F] hover:text-[#F8360A] transition-colors"
                >
                  المدونة
                </Link>
              </li>
              <li>
                <Link
                  href={`/ar/contactUs`}
                  className=" font-bold text-[17px] text-[#27272F] hover:text-[#F8360A] transition-colors"
                >
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </nav>
          <div className="language relative hidden md:block">
            <div className="  p-2 font-bold    ">
              <div className=" items-center justify-center gap-1 flex hover:text-secondary transition-colors cursor-pointer">
                <div className="flex items-center">
                  <Image src={ar} alt="ar" width={25} />
                  <p className=" ms-1">Ar</p>
                </div>
                <svg
                  className=" svg fill-current ms-2 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                </svg>
              </div>
            </div>
            <ul
              className="  shadow-lg absolute bg-white hidden   flex-col px-1 rounded-[5px] border-1 border-solid border-black"
              value={selectedLanguage}
              onChange={(e) => onChange(e)}
            >
              <li
                className=" hover:text-secondary transition-colors cursor-pointer"
                onClick={() => setSelectedLanguage("en")}
              >
                <div className="flex items-center">
                  <Image src={uk} alt="uk" width={25} />
                  <p className=" ms-1">الإنجليزية</p>
                </div>
              </li>

              <li
                className=" hover:text-secondary transition-colors cursor-pointer"
                onClick={() => setSelectedLanguage("ar")}
              >
                <div className="flex items-center">
                  <Image src={ar} alt="ar" width={25} />
                  <p className=" ms-1">العربية</p>
                </div>
              </li>
            </ul>
          </div>

          <motion.button
            className="md:hidden"
            // animate={{ scale: 0.97 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.7 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Image
              src={isOpen ? close : menu}
              alt="logo"
              width={30}
              height={30}
            />
          </motion.button>
        </div>
        {isOpen && (
          <motion.div
            initial={{ x: -250, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            // transition={{ duration: 0.3, type: "spring" }}
            className={` w-[100%]  mobileNav md:hidden`}
          >
            <motion.ul
              className="flex flex-col gap-4 py-5 px-5"
              style={{ pointerEvents: isOpen ? "auto" : "none" }}
            >
              <motion.li
                initial={{ x: "100vh", opacity: 0 }}
                transition={{
                  delay: 0 * 0.2,
                }}
                animate={{ x: 0, opacity: 1 }}
              >
                <Link
                  href={`/ar/home`}
                  onClick={() => setIsOpen(false)}
                  className=" font-bold text-[17px] text-[#27272F] hover:text-[#F8360A] transition-colors"
                >
                  الرئيسية
                </Link>
              </motion.li>
              <motion.li
                initial={{ x: "100vh", opacity: 0 }}
                transition={{
                  delay: 1 * 0.2,
                }}
                animate={{ x: 0, opacity: 1 }}
              >
                <Link
                  href={`/ar/about`}
                  onClick={() => setIsOpen(false)}
                  className=" font-bold text-[17px] text-[#27272F] hover:text-[#F8360A] transition-colors"
                >
                  من نحن
                </Link>
              </motion.li>
              <motion.li
                initial={{ x: "100vh", opacity: 0 }}
                transition={{
                  delay: 2 * 0.2,
                }}
                animate={{ x: 0, opacity: 1 }}
              >
                <Link
                  href={`/ar/services`}
                  onClick={() => setIsOpen(false)}
                  className=" font-bold text-[17px] text-[#27272F] hover:text-[#F8360A] transition-colors"
                >
                  خدماتنا
                </Link>
              </motion.li>
              <motion.li
                className=" dropdown"
                initial={{ x: "100vh", opacity: 0 }}
                transition={{
                  delay: 3 * 0.2,
                }}
                animate={{ x: 0, opacity: 1 }}
              >
                <div className="flex w-full justify-between items-center dropdown">
                  <Link
                    href={`/ar/projects?page=1`}
                    onClick={() => setIsOpen(false)}
                    className="  font-bold text-[17px] text-[#27272F] hover:text-[#F8360A] transition-colors"
                  >
                    المشاريع
                  </Link>
                  <svg
                    className=" svg fill-current ms-2 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                  </svg>
                </div>
                <ul class="dropdown-menu  hidden px-3  py-3 rounded-[10px] bg-white  pt-3">
                  <li class="">
                    <Link
                      className="font-bold text-[17px] text-[#27272F] hover:text-[#F8360A] transition-colors"
                      href="/ar/innovations"
                      onClick={() => setIsOpen(false)}
                    >
                      الابتكارات
                    </Link>
                  </li>
                </ul>
              </motion.li>
              <motion.li
                initial={{ x: "100vh", opacity: 0 }}
                transition={{
                  delay: 4 * 0.2,
                }}
                animate={{ x: 0, opacity: 1 }}
              >
                <Link
                  href={`/ar/blogs?page=1`}
                  onClick={() => setIsOpen(false)}
                  className=" font-bold text-[17px] text-[#27272F] hover:text-[#F8360A] transition-colors"
                >
                  المدونة
                </Link>
              </motion.li>
              <motion.li
                initial={{ x: "100vh", opacity: 0 }}
                transition={{
                  delay: 5 * 0.2,
                }}
                animate={{ x: 0, opacity: 1 }}
              >
                <Link
                  href={`/ar/contactUs`}
                  className=" font-bold text-[17px]  text-[#27272F] hover:text-[#F8360A] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  تواصل معنا
                </Link>
              </motion.li>

              <motion.div
                className="language relative "
                initial={{ x: "100vh", opacity: 0 }}
                transition={{
                  delay: 5 * 0.2,
                }}
                animate={{ x: 0, opacity: 1 }}
              >
                <div className="  py-2 font-bold    ">
                  <div className=" items-center justify-between gap-1 flex hover:text-secondary transition-colors cursor-pointer">
                    <div className="flex">
                      <Image src={ar} alt="uk" width={25} />
                      <p className=" ms-1">Ar</p>
                    </div>
                    <svg
                      className=" svg fill-current ms-2 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                    </svg>
                  </div>
                </div>
                <ul
                  className="  shadow-lg  bg-white hidden   flex-col px-1 rounded-[5px] border-1 border-solid border-black"
                  value={selectedLanguage}
                  onChange={(e) => onChange(e)}
                >
                  <li
                    className=" hover:text-secondary transition-colors cursor-pointer"
                    onClick={() => setSelectedLanguage("ar")}
                  >
                    <div className="flex items-center">
                      <Image src={ar} alt="ar" width={25} />
                      <p className=" ms-1">العربية</p>
                    </div>
                  </li>
                  <li
                    className=" hover:text-secondary transition-colors cursor-pointer"
                    onClick={() => setSelectedLanguage("en")}
                  >
                    <div className="flex items-center">
                      <Image src={uk} alt="uk" width={25} />
                      <p className=" ms-1">الإنجليزية</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </motion.ul>
          </motion.div>
        )}
      </header>
    </div>
  );
}
