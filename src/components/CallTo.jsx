"use client";

import React, { useState } from "react";
import { PhoneInputT } from "./ui/PhoneInputT";
import { PhoneInput } from "react-international-phone";
import { Alert } from "@mui/material";

const CallTo = ({ object }) => {
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);
  const [visible, setVisible] = useState(false);
  const submitData = {
    action: "phonesub",

    subphone_phone: phone,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const submitData = { name, age };
    if (!phone || phone.length < 8 || !phone.includes("+")) {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 5000);
      return;
    }
    try {
      const res = await fetch("https://seenfox.com/api/actions.php", {
        method: "POST",
        // mode: "no-cors",
        body: JSON.stringify(submitData),
        headers: {
          "content-type": "application/json",
        },
      });
      console.log(res);
      if (res.ok) {
        console.log("Yeai!");
        const data = await res.json(); // Parse response as JSON
        console.log("Response Data:", data); // Log the parsed data
        console.log("Yeai! Data sent successfully.");
        setSent(true);
        setTimeout(() => {
          setSent(false);
        }, 4000);
      } else {
        console.log("Oops! Something is wrong.");
      }
    } catch (error) {
      console.log(error);
    }
    // setName("");
    setPhone("");
    // setAge("");
  };
  return (
    <div className=" container mt-[-50px]">
      <div className="">
        <form
          action=""
          className=" relative bg-secondary flex flex-col justify-between md:flex-row items-center px-5 py-8 rounded-[10px]"
        >
          <div className="text  ">
            <h2 className=" text-white text-[26px] md:text-[32px] font-bold text-center">
              {object.callto.title}
            </h2>
            <p className=" mt-3 md:mt-1 text-white text-center md:text-start">
              {object.callto.subTitle}
            </p>
          </div>
          <div className=" flex flex-col w-full mt-6 md:mt-0 max-w-[400px] flex-1 md:ms-5 relative">
            {sent && (
              <Alert
                severity="success"
                className=" absolute top-[-50px] right-[10px] "
              >
                we have recived your message
              </Alert>
            )}
            {visible && (
              <Alert
                severity="error"
                className=" absolute top-[-50px] right-[10px] "
              >
                Please fill the required fields
              </Alert>
            )}
            <div>
              {/* <label htmlFor="phone">Phone</label> */}
              <PhoneInput
                defaultCountry="gb"
                value={phone}
                onChange={(phone) => setPhone(phone)}
                className=" font-semibold"
                id="phone"
                aria-label="phone"
              />
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className=" bg-primaryDark text-white py-3 mt-3 rounded-full"
            >
              {object.callto.btn}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CallTo;
