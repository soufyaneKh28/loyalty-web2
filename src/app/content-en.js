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
    title: "About Loyalty Company",
    description:
      "Founded in 2015, Loyalty Company has evolved into a leading global provider of digital marketing, software solutions, design, and content creation services. Over the past decade, we’ve built a reputation for excellence, innovation, and reliability, becoming the trusted partner for businesses worldwide.",
    cta: "Get Started",
    items: {
      message: {
        title: "Our Mission",
        description:
          "Our mission is to empower businesses with innovative digital solutions, delivering excellence to help clients exceed their goals.",
      },
      vision: {
        title: "Our Vision",
        description:
          "Our vision is to be the global leader in digital marketing and software solutions, known for our ability to drive success through creativity, technology, and strategic insight.",
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
    title: "Your Trusted Partner in Success",
    description: `We excel by blending marketing, programming,
     and intricate design to achieve outstanding results. After crafting a 
     unique brand identity for your business, we help you grow by launching effective 
     marketing campaigns across social media and search engines. Simultaneously,
      we develop websites, applications, and software solutions for customer
       relations, sales, and accounting to meet your business needs.`,
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
    title: "Partner with Loyalty Company",
    description: `Join the ranks of the many successful businesses that trust Loyalty Company to elevate their digital presence. Whether you’re a startup looking to make a mark or an established enterprise aiming to reach new heights, we are here to support you every step of the way.
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
    btn: "Send",
    ServiceTypeOptions: [
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
      {
        value: "Search Engine Optimization",
        label: "Search Engine Optimization",
      },
      { value: "Websites", label: "Websites" },
      { value: "Other", label: "Other" },
    ],
  },
  timeline: [
    {
      title: "Strategic Expansion: Our New Istanbul Branch",
      date: "2017 – Istanbul, Turkey",
      description:
        "Recognizing the strategic importance of the Middle East and Europe, we established our first international branch in Istanbul, registered under company number 6091025993. This expansion allowed us to bring our expertise closer to clients in these regions, offering localized support and tailored services.",
    },
    {
      title: "Expanding into the Gulf: Our New UAE Branch",
      date: "2021 – UAE",
      description: ` To further our commitment to the rapidly growing Gulf markets, we launched a branch in the UAE. This step enabled us to address the unique challenges and opportunities in the Middle East, providing innovative solutions that drive business success.`,
    },
    {
      title: "UK Expansion: A Key Milestone in Our European Growth",
      date: "2022 – United Kingdom",
      description: `Our latest expansion into the UK, registered under company number 15257632, marked a significant milestone. This move strengthened our presence in Europe and enhanced our ability to serve clients across the continent and beyond.`,
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
