import Image from "next/image";
import {
  whatsApp_stikey,
  whatsApp_stikey2,
  whatsApp_stikey2Mo,
} from "../../../public/assets";
import Link from "next/link";

const ContactBtn = () => (
  <div>
    <div className=" desktop md:block hidden ">
      {/* <Link
      href="https://wa.me/+905013444144"
      target="_blank"
      className="     w-20 h-20 rounded-full hover:scale-110 transition-all hover:shadow-md "
      ></Link> */}
      <div className=" bottom-[20px] left-5 cta-buttons flex items-end fixed">
        <div className=" bg-secondary shadow-2xl transition-all  absolute hover:scale-110 w-10 h-10 p-1 rounded-[5px]">
          <Link
            href="https://wa.me/+905345819193"
            target="_blank"
            className="         "
          >
            <Image src={whatsApp_stikey2} alt="whatsapp"></Image>
          </Link>
        </div>
        <div className=" absolute right-[-120px] text-[14px] bottom-1 whatsapp-message rounded-[5px] opacity-75 bg-secondary p-1 text-white">
          Whatsapp
        </div>
      </div>
    </div>
    {/* mobile version for the button  */}
    <div className=" fixed  bottom-[-1px] mobile flex md:hidden z-50  bg-white w-full">
      <Link
        href="https://wa.me/+905345819193"
        target="_blank"
        className="  w-full h-full px-2 py-3   flex items-center justify-center    "
      >
        <Image
          src={whatsApp_stikey2Mo}
          className=" w-[40px] h-[40px]"
          alt="whatsapp"
        ></Image>
        <p className=" ms-3 text-secondary">Whatsapp</p>
      </Link>
    </div>
  </div>
);

export default ContactBtn;
