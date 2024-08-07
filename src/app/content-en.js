import { Span } from "next/dist/trace";

const {
  Marketing,
  strategy,
  support,
  memberTeam,
  sou,
  innov1,
  project,
  projectDe,
  soufyane,
  soufyane1,
  soufyane2,
  soufyane3,
} = require("../../public/assets");

async function getData() {
  const res = await fetch(
    `https://seenfox.com/api/get_data.php?actions=client&lang_code=en`,
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

async function getTeamData() {
  const res = await fetch(
    "https://seenfox.com/api/get_data.php?actions=team,logo&lang_code=en",
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

async function getCounterData() {
  const res = await fetch(
    "https://seenfox.com/api/get_data.php?actions=counter&lang_code=en",
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
async function getPreferenceData() {
  const res = await fetch(
    "https://seenfox.com/api/get_data.php?actions=preference&lang_code=en",
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

async function getServicesData() {
  const res = await fetch(
    "https://seenfox.com/api/get_data.php?actions=service&lang_code=en",
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

async function getProjectsData() {
  const res = await fetch(
    "https://seenfox.com/api/get_data.php?actions=projects&lang_code=en",
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
async function getInnovationData() {
  const res = await fetch(
    "https://seenfox.com/api/get_data.php?actions=innovations&lang_code=en",
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

const datafetch = await getData();
const team = await getTeamData();
const counter = await getCounterData();
const preference = await getPreferenceData();
const services = await getServicesData();
const projects = await getProjectsData();
const innovations = await getInnovationData();
const blogs = await getBlogsData();

// console.log(preference.preference[0]);
const data = {
  heroServices: {
    title: "Comprehensive Digital Solutions",
    description:
      "Explore our wide range of services designed to boost your brand and digital presence. From marketing strategies to innovative programming, we've got you covered.",
    cta: "Contact Us",
  },
  heroAbout: {
    title: "Discover Our Journey",
    description:
      "Founded in 2013, Loyalty specializes in brand development, digital marketing, and programming. With branches in Turkey, Dubai, and the USA, we are committed to your success.",
    cta: "Get Started",
    items: {
      message: {
        title: "Our Message ",
        description:
          "Helping our clients to achieve the best growth towards stability through smart and creative marketing mixed with a clear strategy.",
      },
      vision: {
        title: "Our Vision",
        description:
          "Helping our clients to achieve the best growth towards stability through smart and creative marketing mixed with a clear strategy.",
      },
      features: {
        title: "Our Features",
        description:
          "Academic experience - professionalism - team work - Prevalence",
      },
    },
  },

  services: {
    smallTitle: "What we do ?",
    title: "Our Services",
    description: ` Explore our range of services designed to elevate your business. From strategic planning and market research to implementation and data-driven solutions, we provide expertise and tailored strategies to achieve your goals.`,
    servicesItems: services.service,
  },
  strategy: {
    smallTitle: "Workflow",
    title: "Our Business Strategy",
    description: ` From refining your brand identify and running campaigns to powering
    your digital presence, we do it all `,
    items: {
      item1: {
        title: "Search and Analysis",
        description: `Our specialized researchers continuously analyze the market and projects to fully support our clients' needs.`,
        num: "01",
      },
      item2: {
        title: "Planning",
        description: `We offer detailed planning to achieve your goals, including strategic planning, implementation, and marketing.`,
        num: "02",
      },
      item3: {
        title: "Implementation",
        description: `We implement plans based on solid evidence, thorough research, and statistical data to ensure effective results.`,
        num: "03",
      },
    },
  },
  features: {
    smallTitle: "Our Features",
    title: "The Best Company in Istanbul",
    description: `We are the best because we mix marketing, programming, and intricate design together to get the best results. After we develop your own brand identity, 
    we help you grow your brand by preparing marketing campaigns through social media and search engines.
    
    In parallel we develop your website in addition to applications and programs for customer's relations, sales, and accounting.`,
    items: [
      {
        icon: strategy,
        title: "Plans and Advice",
      },
      {
        icon: support,
        title: "24/7 Support",
      },
      {
        icon: strategy,
        title: "New Ideas",
      },
    ],
  },
  callto: {
    title: `Grow your Business today`,
    subTitle: `Let Our Team Help Your Business`,
    btn: "Submit",
  },
  stats: {
    smallTitle: "Who Are We ?",
    title: "Your Work Grows With Us",
    description: `Explore our impact through key statistics, highlighting the number of clients we’ve served, our years of activity, and the dedicated employees driving our success.`,
    numbers: counter,
  },
  members: {
    smallTitle: "Our Team",
    title: "Get To Know Our Team",
    description: ` Our team, like a well-organized beehive, brings together top specialists from various industries to produce outstanding results. We stand out through our unity, order, and dedication. Ready to experience the difference?`,
    btn: "Join Our Team",

    items: team.team,
  },
  partners: {
    smallTitle: "Our Partners",
    title: "Our Partners in The Journey To Succeed",
    description: `Since the beginning of our journey these companies have helped us pave the way of success.
     Working side by side for enough time we have become partners and the go to source for their services.
    `,
  },
  grow: {
    title: "Grow your Business today",
    description: `From refining your brand identify and running campaigns to powering your digital presence, we do it all
    `,
    btn: "Get Started",
  },
  clients: {
    smallTitle: "Our Clients",
    title: "What Our Clients Say ?",
    description: `As we said before we encourage you to dive in before certainty! We are
     sure that we will give you the best service, as we have given lots of our clients the best results. 
    It's impossible for you to be disappointed if you are working with us.
    `,
    items: datafetch.client,
  },
  innovations: innovations.innovations,

  projects: projects.projects,
  blogs: blogs.blogs,
  form: {
    title: "Contact Us",
    fullName: "Full Name",
    email: "Email",
    phone: "Phone",
    service: "Service Type",
    project: "I want a project like",
    btn: "send",
  },
  timeline: [
    {
      title: "Move to Turkey",
      date: "14 January 2014",
      description:
        "Setting up ( Loyalty) headquarters in turkey in Istanbul in 2014 in the world trade center in Istanbul, which made the company stand out with its strategic location. Loyalty's team was made up of 4 people who were determined to implement the vision of the company",
    },
    {
      title: "The official headquarters",
      date: "28 March 2018",
      description: ` New headquarters was opened in the "Vision Park" building in "Yeni Bosna" area in İstanbul. With 140 square meters of office space, making it the 2nd headquarters of the company. Now the team is made up of 8 people all sharing their expertise in their fields while holding on to the company's vision and goals`,
    },
    {
      title: "Moving downtown",
      date: "10 December 2019",
      description: `The company moved to downtown Istanbul so that it can be close to all the major airports and transportation. "Cevizlibağ" area is where we are located. After much success and many more clients our team grew to 15 people all specialized in their fields and loyal to our company's vision.`,
    },
    {
      title: "Worldwide",
      date: "05 May 2021",
      description:
        "Opening up branches of the company in The United States of America and in Dubai to make it closer to all of our clients around the world. Loyalty team are now around 20 employees specializing in marketing, design, and programming.",
    },
  ],
  logos: team.logo,
  counter: counter.counter,
  contactPreference: {
    phone: preference.preference[0].preference_phone,
    email: preference.preference[0].preference_email,
    whatsappPhone: preference.preference[0].preference_whatsapp_phone,
    locationLink: preference.preference[0].preference_location,
    address: preference.preference[0].preference_address,
    description: preference.preference[0].preference_desc,
  },
};

export default data;
