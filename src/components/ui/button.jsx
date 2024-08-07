import Link from "next/link";
import React from "react";

const Button = ({ children, href }) => {
  return (
    <div className=" mt-[25px]">
      <Link
        href={`${href}`}
        className="w-fit text-white rtl:font-black text-[14px] font-medium mt-4  bg-secondary rounded-full px-9 py-3 hover:px-12 transition-all hover:bg-amber-500"
      >
        {children}
      </Link>
    </div>
  );
};

export default Button;
