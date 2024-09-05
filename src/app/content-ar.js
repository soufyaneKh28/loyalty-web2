const {
  Marketing,
  strategy,
  support,
  memberTeam,
  message,
  sou,
  innov1,
  project,
  projectDe,
  soufyane1,
  soufyane,
  soufyane2,
  soufyane3,
} = require("../../public/assets");

async function getData() {
  const res = await fetch(
    `https://seenfox.com/api/get_data.php?actions=client&lang_code=ar`,
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
    `https://seenfox.com/api/get_data.php?actions=counter&lang_code=ar`,
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
    `https://seenfox.com/api/get_data.php?actions=team,logo&lang_code=ar`,
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
    `https://seenfox.com/api/get_data.php?actions=preference&lang_code=ar`,
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
    `https://seenfox.com/api/get_data.php?actions=service&lang_code=ar`,
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
    `https://seenfox.com/api/get_data.php?actions=projects&lang_code=ar`,
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
    `https://seenfox.com/api/get_data.php?actions=innovations&lang_code=ar`,
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
    `https://seenfox.com/api/get_data.php?actions=blogs&lang_code=ar`,
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
// console.log(services);

const data = {
  heroServices: {
    title: "حلول رقمية شاملة",
    description:
      "استكشف مجموعة واسعة من الخدمات المصممة لتعزيز علامتك التجارية وحضورك الرقمي. من استراتيجيات التسويق إلى البرمجة المبتكرة، نحن هنا لتلبية احتياجاتك.",
    cta: "تواصل معنا",
  },
  heroAbout: {
    title: "عن شركة Loyalty",
    description:
      "تأسست شركة Loyalty في عام 2015، وتطورت لتصبح من المزودين العالميين الرائدين في خدمات التسويق الرقمي وحلول البرمجيات والتصميم وإنشاء المحتوى. على مدى العقد الماضي، بنينا سمعة قائمة على التميز والابتكار والموثوقية، مما جعلنا الشريك الموثوق للأعمال التجارية حول العالم.",
    cta: "ابدأ الآن",
    items: {
      message: {
        title: "مهمتنا",
        description:
          "مهمتنا هي تمكين الشركات من خلال حلول رقمية مبتكرة، وتقديم التميز لمساعدة العملاء على تحقيق أهدافهم وتجاوزها.",
      },
      vision: {
        title: "رؤيتنا",
        description:
          "رؤيتنا هي أن نكون الرائدين عالميًا في مجال التسويق الرقمي وحلول البرمجيات، وأن نكون معروفين بقدرتنا على تحقيق النجاح من خلال الإبداع والتكنولوجيا والرؤية الاستراتيجية.",
      },
      features: {
        title: "مميزاتنا",
        description:
          "التجربة الأكاديمية - الاحترافية - العمل الجماعي - الانتشار",
      },
    },
  },

  services: {
    smallTitle: "ماذا نفعل؟",
    title: "خدماتنا",
    description: `استكشف مجموعة خدماتنا المصممة لرفع مستوى عملك. من التخطيط الاستراتيجي والبحث في السوق إلى التنفيذ والحلول المبنية على البيانات، نقدم الخبرة والاستراتيجيات المصممة لتحقيق أهدافك.`,
    servicesItems: services.service,
  },
  strategy: {
    smallTitle: "سير العمل",
    title: "استراتيجيتنا للأعمال",
    description: `من تحسين هوية علامتك التجارية وإطلاق الحملات إلى تعزيز حضورك الرقمي، نحن نفعل كل شيء.`,
    items: {
      item1: {
        title: "البحث والتحليل",
        description: `يقوم باحثونا المتخصصون بتحليل السوق والمشاريع باستمرار لدعم احتياجات عملائنا بالكامل.`,
        num: "01",
      },
      item2: {
        title: "التخطيط",
        description: `نقدم تخطيطًا تفصيليًا لتحقيق أهدافك، بما في ذلك التخطيط الاستراتيجي والتنفيذ والتسويق.`,
        num: "02",
      },
      item3: {
        title: "التنفيذ",
        description: `ننفذ الخطط بناءً على الأدلة القوية والأبحاث الشاملة والبيانات الإحصائية لضمان تحقيق النتائج الفعالة.`,
        num: "03",
      },
    },
  },
  features: {
    smallTitle: "مميزاتنا",
    title: "شريكك الموثوق للنجاح",
    description: `نتميز من خلال دمج التسويق والبرمجة
     والتصميم المعقد لتحقيق نتائج مميزة. بعد صياغة هوية فريدة لعلامتك التجارية، نساعدك على النمو من خلال إطلاق حملات تسويقية فعالة عبر وسائل التواصل الاجتماعي ومحركات البحث. في الوقت نفسه، نطور مواقع الويب والتطبيقات وحلول البرمجيات لعلاقات العملاء والمبيعات والمحاسبة لتلبية احتياجات عملك.`,
    items: [
      {
        icon: strategy,
        title: "الخطط والنصائح",
      },
      {
        icon: support,
        title: "دعم على مدار الساعة",
      },
      {
        icon: strategy,
        title: "أفكار جديدة",
      },
    ],
  },
  callto: {
    title: `نمّي عملك اليوم`,
    subTitle: `دع فريقنا يساعدك في عملك`,
    btn: "إرسال",
  },
  stats: {
    smallTitle: "من نحن؟",
    title: "عملك ينمو معنا",
    description: `استكشف تأثيرنا من خلال الإحصاءات الرئيسية، التي تسلط الضوء على عدد العملاء الذين خدمناهم، وسنوات نشاطنا، والموظفين المكرسين الذين يقودون نجاحنا.`,
    numbers: counter,
  },
  members: {
    smallTitle: "فريقنا",
    title: "تعرف على فريقنا",
    description: `فريقنا، مثل خلية نحل منظمة جيدًا، يجمع بين أفضل المتخصصين من مختلف الصناعات لتحقيق نتائج متميزة. نتميز بوحدتنا وتنظيمنا وتفانينا. هل أنت مستعد لتجربة الفرق؟`,
    btn: "انضم إلى فريقنا",

    items: team.team,
  },
  partners: {
    smallTitle: "شركاؤنا",
    title: "الشراكة مع شركة Loyalty",
    description: `انضم إلى صفوف العديد من الشركات الناجحة التي تثق بشركة Loyalty لتعزيز حضورها الرقمي. سواء كنت شركة ناشئة تتطلع إلى ترك بصمة أو مؤسسة قائمة تسعى للوصول إلى آفاق جديدة، نحن هنا لدعمك في كل خطوة.`,
  },
  grow: {
    title: "نمّي عملك اليوم",
    description: `من تحسين هوية علامتك التجارية وإطلاق الحملات إلى تعزيز حضورك الرقمي، نحن نقوم بكل شيء.`,
    btn: "ابدأ الآن",
  },
  clients: {
    smallTitle: "عملاؤنا",
    title: "ماذا يقول عملاؤنا؟",
    description: `كما قلنا من قبل، نشجعك على الغوص قبل اليقين! نحن على يقين من أننا سنقدم لك أفضل خدمة، كما قدمنا للعديد من عملائنا أفضل النتائج. من المستحيل أن تشعر بخيبة الأمل إذا كنت تعمل معنا.`,
    items: datafetch.client,
  },
  innovations: innovations.innovations,

  projects: projects.projects,
  blogs: blogs.blogs,
  form: {
    title: "اتصل بنا",
    fullName: "الاسم الكامل",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    service: "نوع الخدمة",
    project: "أريد مشروعًا مثل",
    btn: "إرسال",
  },
  timeline: [
    {
      title: "التوسع الاستراتيجي: فرعنا الجديد في اسطنبول",
      date: "2017 – اسطنبول، تركيا",
      description:
        "تقديرًا للأهمية الاستراتيجية للشرق الأوسط وأوروبا، أنشأنا أول فرع دولي لنا في اسطنبول، المسجل برقم الشركة 6091025993. سمح لنا هذا التوسع بتقديم خبراتنا عن قرب للعملاء في هذه المناطق، وتقديم الدعم المحلي والخدمات المصممة.",
    },
    {
      title: "التوسع في الخليج: فرعنا الجديد في الإمارات",
      date: "2021 – الإمارات",
      description: `لتعزيز التزامنا بالأسواق الخليجية المتنامية بسرعة، أطلقنا فرعًا في الإمارات. ساعدتنا هذه الخطوة في معالجة التحديات والفرص الفريدة في الشرق الأوسط، وتقديم حلول مبتكرة تعزز نجاح الأعمال.`,
    },
    {
      title: "التوسع في المملكة المتحدة: محطة رئيسية في نموّنا الأوروبي",
      date: "2022 – المملكة المتحدة",
      description: `كان توسعنا الأخير إلى المملكة المتحدة، المسجل برقم الشركة 15257632، علامة فارقة مهمة. عززت هذه الخطوة وجودنا في أوروبا وزادت من قدرتنا على خدمة العملاء في جميع أنحاء القارة وخارجها.`,
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