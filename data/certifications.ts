export type Certification = {
  id: string;
  title: string;
  issuer: string;
  issued: string;
  /** Short line for the card. */
  summary: string;
  /** Skill labels that map to the Skills section. */
  skills: string[];
  /** Skill category ids from data/skills.ts for filtering. */
  skillCategories: string[];
  credentialId?: string;
  url?: string;
  /** Image under /public/certificates */
  image?: string;
  /** Accent for issuer branding in the UI. */
  color: string;
  featured?: boolean;
};

export const certifications: Certification[] = [
  {
    id: "deep-learning-essentials",
    title: "Deep Learning Essentials",
    issuer: "IBM Skills Network",
    issued: "Aug 2022",
    summary:
      "Core deep learning: neural networks, CNNs, and the statistical programming foundations behind production ML.",
    skills: ["Deep Learning", "Neural Networks", "Convolutional Neural Networks", "Data Science", "TensorFlow", "PyTorch"],
    skillCategories: ["ml", "languages"],
    credentialId: "6c5a86c3-1b9a-4db8-a878-de865eab4d5a",
    image: "/certificates/deep-learning-essentials.png",
    color: "#7A103D",
    featured: true,
  },
  {
    id: "mta-python",
    title: "MTA: Introduction to Programming Using Python",
    issuer: "Microsoft",
    issued: "Aug 2021",
    summary: "Certified Python programming fundamentals — the base layer under every data and AI build on this site.",
    skills: ["Python", "Python Programming"],
    skillCategories: ["languages", "engineering"],
    credentialId: "89657a11-0ab3-4fac-9f34-926ab3ef644c",
    image: "/certificates/mta-python.png",
    color: "#0F6CBD",
    featured: true,
  },
  {
    id: "python-data-science-ai",
    title: "Python for Data Science and AI",
    issuer: "Coursera",
    issued: "Aug 2021",
    summary: "Python data structures, analysis libraries, and visualisation for data science and AI workflows.",
    skills: ["Python", "Matplotlib", "Bokeh", "Data Science"],
    skillCategories: ["languages", "data-science", "bi"],
    credentialId: "9cfa644c-b0ed-4580-986d-50ca1b405472",
    image: "/certificates/python-for-data-science-and-ai.png",
    color: "#0056D2",
    featured: true,
  },
  {
    id: "ml-big-data",
    title: "Machine Learning with Big Data",
    issuer: "UC San Diego · Coursera",
    issued: "Nov 2022",
    summary: "ML at scale: pipelines, big-data tooling, and model thinking for large datasets.",
    skills: ["Machine Learning", "Big Data", "Spark", "Pandas / Spark"],
    skillCategories: ["ml", "mlops", "data-science"],
    credentialId: "SE7VSE2KH52J",
    url: "https://www.coursera.org/account/accomplishments/certificate/SE7VSE2KH52J",
    color: "#182B49",
  },
  {
    id: "cisco-programming",
    title: "Cisco Programming",
    issuer: "Cisco",
    issued: "Sep 2022",
    summary: "Programming fundamentals through Cisco’s curriculum — structured problem-solving and code literacy.",
    skills: ["Programming", "Software Engineering"],
    skillCategories: ["languages", "engineering"],
    url: "/certificates/cisco-programming.pdf",
    color: "#1BA0D7",
  },
  {
    id: "hacking-patching",
    title: "Hacking and Patching",
    issuer: "University of Colorado · Coursera",
    issued: "Oct 2022",
    summary: "Security mindset: finding weaknesses, patching systems, and handling software safely in production.",
    skills: ["Security", "Secure service design", "Enterprise security & data handling"],
    skillCategories: ["governance", "engineering"],
    credentialId: "6DB8M98ERH8J",
    url: "https://www.coursera.org/account/accomplishments/certificate/6DB8M98ERH8J",
    color: "#CFB87C",
  },
  {
    id: "product-management-framework",
    title: "Product Management Framework",
    issuer: "Coursera",
    issued: "Aug 2021",
    summary: "Product discovery, framing, and delivery — the bridge between engineering and stakeholder outcomes.",
    skills: ["Product Management", "PRDs", "Stakeholder management"],
    skillCategories: ["bi"],
    credentialId: "HWUYP35XCNHJ",
    url: "https://www.coursera.org/account/accomplishments/certificate/HWUYP35XCNHJ",
    color: "#0056D2",
  },
];

/** Skill display names → certification ids (for Skills chips). */
export const skillToCerts: Record<string, string[]> = {
  Python: ["mta-python", "python-data-science-ai"],
  "Python (Pandas, NumPy)": ["python-data-science-ai", "ml-big-data"],
  TensorFlow: ["deep-learning-essentials"],
  PyTorch: ["deep-learning-essentials"],
  "Pandas / Spark": ["ml-big-data"],
  "Secure service design": ["hacking-patching"],
  "Enterprise security & data handling": ["hacking-patching"],
  "scikit-learn": ["ml-big-data", "deep-learning-essentials"],
};
