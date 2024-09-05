import Image from "next/image";
import { whatsApp_stikey } from "../../../public/assets";
import Link from "next/link";

const ContactBtn = () => (
  <div className=" container absolute">
    <Link
      href="https://wa.me/+905013444144"
      target="_blank"
      className="  right-[10%] z-[100]  fixed  bottom-[130px] w-20 h-20 rounded-full hover:scale-110 transition-all hover:shadow-md "
    >
      <Image
        src={whatsApp_stikey}
        alt="whatsApp_stikey"
        className="w-full h-full"
      />
    </Link>
  </div>
);

export default ContactBtn;
