"use client";

import React from "react";
import { PhoneInputT } from "./ui/PhoneInputT";

import { useState } from "react";
import Select from "react-tailwindcss-select";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { Alert } from "@mui/material";
const ServiceTypeOptions = [
  {
    value: "Marketing through social media",
    label: "Marketing through social media",
  },
  { value: "Content Marketing", label: "Content Marketing" },
  { value: "Digital Marketing", label: "Digital Marketing" },
  { value: "Landing pages", label: "Landing pages" },
  { value: "Logo & Visual Identity", label: "Logo & Visual Identity" },
  { value: "Mobile Application", label: "Mobile Application" },
  { value: "Production Services", label: "Production Services" },
  { value: "Search Engine Optimization", label: "Search Engine Optimization" },
  { value: "SWebsites", label: "Websites" },
  { value: "Other", label: "Other" },
];
const projectOptions = [
  { value: "fox", label: "🦊 Fox" },
  { value: "Butterfly", label: "🦋 Butterfly" },
  { value: "Honeybee", label: "🐝 Honeybee" },
  { value: "Honeybe", label: "🐝 Honeybe" },
  { value: "Honeye", label: "🐝 Honeye" },
];

const Form = ({ object }) => {
  const [services, setServices] = useState(null);
  const [services2, setServices2] = useState([]);
  const [project, setProject] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);
  const [visible, setVisible] = useState(false);
  // const [Phone, setPhone]  = useState('')

  const submitData = {
    action: "contactus",
    fullname: name,
    email: email,
    mobile: phone,
    services: services2 && [...services2],

    projects: [""],
  };

  // function service(){
  //   setServices((services)=> services.map)

  //   }

  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const submitData = { name, age };
    if (
      !name ||
      name.length < 3 ||
      !email ||
      email.length < 5 ||
      !phone ||
      phone.length < 5 ||
      !services
    ) {
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
      console.log("this is submitdata", submitData);
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
    setName("");
    setEmail("");
    setPhone("");
    // setProject(null);
    setServices(null);
    // setAge("");
  };

  const handleServiceChange = (value) => {
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
    <form
      action=""
      className=" relative bg-primaryDark text-white p-5 flex flex-col py-12 w-full  rounded-[20px]"
    >
      {sent && (
        <Alert
          severity="success"
          className=" absolute bottom-[-10px] right-[20px] "
        >
          we have recived your message
        </Alert>
      )}
      {visible && (
        <Alert
          severity="error"
          className=" absolute bottom-[-10px] right-[20px] "
        >
          Please fill the required fields
        </Alert>
      )}
      <h3 className=" text-[28px] text-center font-semibold">{object.title}</h3>
      <div className=" flex flex-col my-2">
        <label htmlFor="name">{object.fullName}</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="full name"
          id="name"
          className=" p-3 mt-1 rounded-[10px] outline-none border-none text-primaryDark"
        />
      </div>
      <div className=" flex flex-col my-2">
        <label htmlFor="email">{object.email}</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          placeholder="email"
          required
          id="email"
          className=" p-3 mt-1 rounded-[10px] outline-none border-none text-primaryDark"
        />
      </div>
      <div className=" flex flex-col my-2">
        <label htmlFor="phone">{object.phone}</label>
        <div>
          {/* <label htmlFor="phone">Phone</label> */}
          <PhoneInput
            defaultCountry="tr"
            value={phone}
            onChange={(phone) => setPhone(phone)}
            className=" font-semibold"
            id="phone"
            aria-label="phone"
          />
        </div>
      </div>
      <div className=" flex flex-col my-2">
        <label htmlFor="">{object.service}</label>
        <div className="select">
          <Select
            primaryColor={"orange"}
            value={services}
            onChange={handleServiceChange}
            options={ServiceTypeOptions}
            isMultiple={true}
            isSearchable={true}
          />
        </div>
      </div>
      {/* <div className=" flex flex-col my-2">
        <label htmlFor="phone">{object.project}</label>
        <div className="select">
          <Select
            primaryColor={"orange"}
            value={project}
            onChange={handleProjectChange}
            options={projectOptions}
            isMultiple={true}
            isSearchable={true}
            classNames="py-3"
          />
        </div>
      </div> */}
      {/* <div className=" flex flex-col my-2">
        <label htmlFor="">Message</label>
        <textarea
          name=""
          id=""
          className=" h-[150px] rounded-[10px] p-3 text-black"
        ></textarea>
      </div> */}
      <button
        onClick={handleSubmit}
        className=" bg-secondary py-3 px-10 mt-5 rounded-full font-bold "
      >
        {object.btn}
      </button>
    </form>
  );
};

export default Form;
