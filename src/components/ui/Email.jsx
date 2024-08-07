"use client";

import { Alert } from "@mui/material";
import React, { useState } from "react";

function Email({ children }) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [visible, setVisible] = useState(false);
  const submitData = {
    action: "subscribe",

    subemail_email: email,
  };

  const handleSubmit = async (e) => {
    // const submitData = { name, age };
    if (!email || email.length < 5 || !email.includes("@")) {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 5000);
      return;
    }
    try {
      e.preventDefault();
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
    setEmail("");
    // setAge("");
  };

  const handleServiceChange = (value) => {
    console.log(
      "value:"
      // value.map((value) => value.value)
    );
    setServices(value);
    console.log("service value:", value);

    console.log("this is services 1", services);
    setServices2(value);
    console.log("this is services 2", services2);
  };

  const handleProjectChange = (value) => {
    console.log(project);

    setProject(value);
    console.log("project value:", value);
  };

  return (
    <form action="" className=" relative flex flex-col">
      {/* <PhoneInputT /> */}
      {sent && (
        <Alert
          severity="success"
          className=" absolute top-[-40px] right-[0px] "
        >
          we have recived your message
        </Alert>
      )}
      {visible && (
        <Alert severity="error" className=" absolute top-[-40px] right-[0px] ">
          Please fill the required fields
        </Alert>
      )}
      <div className=" flex flex-col my-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          required
          aria-label="email"
          placeholder="email"
          id="email"
          className=" p-3 mt-1 rounded-[10px] outline-none border-none text-primaryDark"
        />
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className=" bg-secondary py-3 rounded-full my-3 text-white font-semibold "
      >
        {children}
      </button>
    </form>
  );
}

export default Email;
