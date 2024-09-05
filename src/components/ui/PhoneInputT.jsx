"use client";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const PhoneInputT = () => {
  const [phone, setPhone] = useState("");

  return (
    <div>
      {/* <label htmlFor="phone">Phone</label> */}
      <PhoneInput
        defaultCountry="uk"
        value={phone}
        onChange={(phone) => setPhone(phone)}
        className=""
        id="phone"
        aria-label="phone"
      />
    </div>
  );
};

export { PhoneInputT };