"use client";

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import React, { useEffect } from "react";
import Slider from "react-infinite-logo-slider";
import Image from "next/image";
import { Iso, ce, google, wipo, zoho } from "../../public/assets";

function IconsSlider({ logos }) {
  useEffect(() => {
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    const logosSlide = document.querySelector(".logos-slide");
    if (logosSlide) {
      const copy = logosSlide.cloneNode(true);
      document.querySelector(".logos").appendChild(copy);
    }
  }, []);
  //  console.log(logos);
  return (
    <div className="logos " dir="ltr">
      <div className="logos-slide ">
        {[...logos, ...logos].map((logo, i) => (
          <div className="w-[300px]" key={i}>
            <Image
              src={`${logo.logo_image}`}
              alt={`${logo.logo_image_alt}`}
              className="w-full"
              width={100}
              height={50}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default IconsSlider;
