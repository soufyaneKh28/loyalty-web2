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
      "استكشف مجموعة خدماتنا الواسعة المصممة لتعزيز علامتك التجارية وحضورك الرقمي. من استراتيجيات التسويق إلى البرمجة المبتكرة، نحن هنا لدعمك.",
    cta: "اتصل بنا",
  },
  heroAbout: {
    title: "اكتشف رحلتنا",
    description:
      "تأسست Loyalty في عام 2013 وتخصصت في تطوير العلامات التجارية والتسويق الرقمي والبرمجة. مع فروع في تركيا ودبي والولايات المتحدة، نحن ملتزمون بنجاحك.",
    cta: "ابدأ الآن",
    items: {
      message: {
        title: "رسالتنا",
        description:
          "مساعدة عملائنا لتحقيق أفضل نمو نحو الاستقرار من خلال تسويق ذكي ومبدع ممزوج باستراتيجية واضحة.",
      },
      vision: {
        title: "رؤيتنا",
        description:
          "مساعدة عملائنا لتحقيق أفضل نمو نحو الاستقرار من خلال تسويق ذكي ومبدع ممزوج باستراتيجية واضحة.",
      },
      features: {
        title: "ميزاتنا",
        description:
          "الخبرة الأكاديمية - الاحترافية - العمل الجماعي - الانتشار",
      },
    },
  },
  services: {
    smallTitle: "ماذا نقدم؟",
    title: "خدماتنا",
    description: `استكشف مجموعة خدماتنا المصممة لرفع مستوى عملك. من التخطيط الاستراتيجي وبحوث السوق إلى التنفيذ والحلول المعتمدة على البيانات، نقدم خبرتنا واستراتيجياتنا المخصصة لتحقيق أهدافك.`,
    servicesItems: services.service,
  },
  strategy: {
    smallTitle: "سير العمل",
    title: "استراتيجيتنا التجارية",
    description: `من تحسين هوية علامتك التجارية وتشغيل الحملات إلى تعزيز وجودك الرقمي، نحن نقدم كل ذلك.`,
    items: {
      item1: {
        title: "البحث والتحليل",
        description: `يواصل باحثونا المتخصصون تحليل السوق والمشاريع لدعم احتياجات عملائنا بشكل كامل.`,
        num: "01",
      },
      item2: {
        title: "التخطيط",
        description: `نقدم تخطيطاً مفصلاً لتحقيق أهدافك، بما في ذلك التخطيط الاستراتيجي والتنفيذ والتسويق.`,
        num: "02",
      },
      item3: {
        title: "التنفيذ",
        description: `نطبق الخطط بناءً على الأدلة القوية، والبحث الدقيق، والبيانات الإحصائية لضمان تحقيق النتائج الفعالة.`,
        num: "03",
      },
    },
  },
  features: {
    smallTitle: "ميزاتنا",
    title: "أفضل شركة في إسطنبول",
    description: `نحن الأفضل لأننا ندمج بين التسويق والبرمجة والتصميم المعقد للحصول على أفضل النتائج. بعد تطوير هوية علامتك التجارية، نساعدك في تنمية علامتك التجارية من خلال إعداد حملات تسويقية عبر وسائل التواصل الاجتماعي ومحركات البحث.

    في الوقت نفسه، نقوم بتطوير موقعك الإلكتروني بالإضافة إلى التطبيقات والبرامج لإدارة علاقات العملاء والمبيعات والمحاسبة.`,
    items: [
      {
        icon: strategy,
        title: "خطط ونصائح",
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
    title: `نمِّ عملك اليوم`,
    subTitle: `دع فريقنا يساعد عملك`,
    btn: "إرسال",
  },
  stats: {
    smallTitle: "من نحن؟",
    title: "عملك ينمو معنا",
    description: `استكشف تأثيرنا من خلال الإحصائيات الرئيسية، مع تسليط الضوء على عدد العملاء الذين قدمنا لهم خدمات، سنوات نشاطنا، والموظفين الم dedicated لنا.`,
    numbers: counter,
  },
  members: {
    smallTitle: "فريقنا",
    title: "تعرف على فريقنا",
    description: `فريقنا، مثل خلية نحل منظمة جيداً، يجمع بين أفضل المتخصصين من مختلف الصناعات لتحقيق نتائج رائعة. نحن نتميز من خلال وحدتنا وتنظيمنا وتفانينا. هل أنت مستعد لتجربة الفرق؟`,
    btn: "انضم إلى فريقنا",
    items: team.team,
  },
  partners: {
    smallTitle: "شركاؤنا",
    title: "شركاؤنا في رحلة النجاح",
    description: `منذ بداية رحلتنا، ساعدتنا هذه الشركات في تمهيد طريق النجاح. بالعمل جنباً إلى جنب لفترة طويلة، أصبحنا شركاء ومصدرين موثوقين لخدماتهم.`,
  },
  grow: {
    title: "نمِّ عملك اليوم",
    description: `من تحسين هوية علامتك التجارية وتشغيل الحملات إلى تعزيز وجودك الرقمي، نحن نقدم كل ذلك.`,
    btn: "ابدأ الآن",
  },
  clients: {
    smallTitle: "عملائنا",
    title: "ماذا يقول عملائنا؟",
    description: `كما قلنا سابقاً، نشجعك على الغوص قبل التأكيد! نحن واثقون من أننا سنقدم لك أفضل خدمة، كما قدمنا للعديد من عملائنا أفضل النتائج. من المستحيل أن تشعر بالإحباط إذا كنت تعمل معنا.`,
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
    project: "أريد مشروعاً مثل",
    btn: "إرسال",
  },
  timeline: [
    {
      title: "الانتقال إلى تركيا",
      date: "14 يناير 2014",
      description:
        "تأسيس مقر (Loyalty) في تركيا في إسطنبول في عام 2014 في مركز التجارة العالمي بإسطنبول، مما جعل الشركة تبرز بموقعها الاستراتيجي. كان فريق Loyalty يتكون من 4 أشخاص عازمين على تنفيذ رؤية الشركة.",
    },
    {
      title: "المقر الرسمي",
      date: "28 مارس 2018",
      description: `تم افتتاح المقر الجديد في مبنى "Vision Park" في منطقة "يني بوسنا" في إسطنبول. بمساحة مكتب تبلغ 140 مترًا مربعًا، مما جعله المقر الثاني للشركة. الآن، يتكون الفريق من 8 أشخاص يتشاركون خبراتهم في مجالاتهم مع التمسك برؤية وأهداف الشركة.`,
    },
    {
      title: "الانتقال إلى وسط المدينة",
      date: "10 ديسمبر 2019",
      description: `انتقلت الشركة إلى وسط مدينة إسطنبول لتكون قريبة من جميع المطارات الرئيسية ووسائل النقل. نحن في منطقة "جيفيزلي باغ" حيث أصبح لدينا فريق مكون من 15 شخصًا متخصصين في مجالاتهم ومخلصين لرؤية شركتنا.`,
    },
    {
      title: "عالميًا",
      date: "05 مايو 2021",
      description:
        "فتحنا فروعًا للشركة في الولايات المتحدة الأمريكية ودبي لتكون أقرب إلى جميع عملائنا حول العالم. أصبح فريق Loyalty الآن يتكون من حوالي 20 موظفًا متخصصين في التسويق والتصميم والبرمجة.",
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