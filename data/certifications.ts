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
    id: "gdpr-certified",
    title: "GDPR Certified",
    issuer: "LinkedIn Learning",
    issued: "Mar 2026",
    summary:
      "Data protection regulation grounding: lawful bases, DPIAs, data subject rights, and cross-border transfer mechanisms.",
    skills: ["GDPR", "Data Privacy", "EU AI Act"],
    skillCategories: ["governance"],
    color: "#0A66C2",
    featured: true,
  },
  {
    id: "deep-learning-essentials",
    title: "Deep Learning Essentials",
    issuer: "IBM Skills Network",
    issued: "Aug 2022",
    summary:
      "Core deep learning: neural networks, CNNs, and the statistical programming foundations behind production ML.",
    skills: ["Deep Learning", "Neural Networks", "Convolutional Neural Networks", "Data Science", "TensorFlow", "PyTorch"],
    skillCategories: ["ai", "languages"],
    credentialId: "6c5a86c3-1b9a-4db8-a878-de865eab4d5a",
    image: "/certificates/deep-learning-essentials.png",
    color: "#7A103D",
    featured: true,
  },
  {
    id: "python-data-science-ai",
    title: "Python for Data Science and AI",
    issuer: "Coursera",
    issued: "Aug 2021",
    summary: "Python data structures, analysis libraries, and visualisation for data science and AI workflows.",
    skills: ["Python", "Matplotlib", "Bokeh", "Data Science"],
    skillCategories: ["languages", "data"],
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
    skillCategories: ["ai", "data"],
    credentialId: "SE7VSE2KH52J",
    url: "https://www.coursera.org/account/accomplishments/certificate/SE7VSE2KH52J",
    color: "#182B49",
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
    summary: "Product discovery, framing, and delivery: the bridge between engineering and stakeholder outcomes.",
    skills: ["Product Management", "PRDs", "Stakeholder management"],
    skillCategories: ["product"],
    credentialId: "HWUYP35XCNHJ",
    url: "https://www.coursera.org/account/accomplishments/certificate/HWUYP35XCNHJ",
    color: "#0056D2",
  },
];

/** Skill display names → certification ids (for Skills chips). */
export const skillToCerts: Record<string, string[]> = {
  Python: ["python-data-science-ai"],
  GDPR: ["gdpr-certified"],
  "Data Privacy": ["gdpr-certified"],
  SQL: ["python-data-science-ai"],
  "SQL & relational databases": ["python-data-science-ai"],
  TensorFlow: ["deep-learning-essentials"],
  PyTorch: ["deep-learning-essentials"],
  "Pandas / Spark": ["ml-big-data"],
  Spark: ["ml-big-data"],
  "Secure service design": ["hacking-patching"],
  "Secure design": ["hacking-patching"],
  "Enterprise security & data handling": ["hacking-patching"],
  "scikit-learn": ["ml-big-data", "deep-learning-essentials"],
};
