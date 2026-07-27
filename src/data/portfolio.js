export const profile = {
  name: "Sreeja Vaddi",
  role: "Full Stack Developer",
  location: "Phoenix, Arizona",
  availability: "Open to full-time roles · Open to relocation",
  email: "sreejavaddi168@gmail.com",
  phone: "+1 (623) 320-6836",
  phoneHref: "tel:+16233206836",
  linkedin: "https://linkedin.com/in/sreeja-vaddi-b90149221",
  github: "https://github.com/19wh1a1249",
  resume: "/Sreeja-Vaddi-Resume.pdf",
  summary:
    "Building scalable products end-to-end across healthcare, fintech, SaaS, and construction with code that performs and experiences people enjoy using.",
  about: [
    "I turn messy product ideas into working systems—interfaces people understand, APIs teams can trust, and releases that hold up in production.",
    "My toolkit spans React and Next.js, Django and Node, SQL systems, and cloud delivery. The through-line is ownership: from first sketch to measurable outcome.",
    "I care about speed that users feel, workflows that reduce busywork, and architecture clean enough to evolve.",
  ],
};

export const experience = [
  {
    company: "Park My Ride",
    role: "Full Stack Web Developer",
    period: "Jan 2026 — Present",
    location: "Houston, Texas",
    color: "yellow",
    summary:
      "Built and deployed an event parking platform with interactive maps, secure bookings, payments, dashboards, and responsive marketing pages.",
    bullets: [
      "Next.js, Tailwind CSS, Django REST APIs, and JWT authentication",
      "Interactive homeowner garage maps and detail-page booking flows",
      "Used Cursor to accelerate feature delivery, debugging, and UI iteration",
      "20% faster deployments and a 15% lower bug rate",
    ],
    highlight: { value: "30%", label: "faster data retrieval" },
  },
  {
    company: "Irenix Empowerment Foundation",
    role: "Software Engineer Intern",
    period: "Sep — Dec 2025",
    location: "Sheridan, Wyoming",
    color: "green",
    summary:
      "Created a HIPAA-compliant EHR experience covering secure records, provider matching, appointment booking, billing, reports, and audit trails.",
    bullets: [
      "Role-based access protected 100% of client records",
      "Used Claude Code to speed up implementation, refactors, and test coverage",
      "Reduced administrative time by 30%",
      "Cut billing errors by 25% through a unified workflow",
    ],
    highlight: { value: "40%", label: "booking efficiency" },
  },
  {
    company: "Accenture",
    role: "Software Engineer",
    period: "Aug — Dec 2023",
    location: "Pune, India",
    color: "violet",
    summary:
      "Engineered reliable core-banking workflows across SQL Server, C#, and ASP.NET Core for high-volume customer loan systems.",
    bullets: [
      "Optimized stored procedures for 30% faster retrieval",
      "Developed logic across 10+ eligibility and repayment modules",
      "Reduced post-deployment issues by 40%",
    ],
    highlight: { value: "50+", label: "priority defects resolved" },
  },
  {
    company: "SMC-HNV",
    role: "Full Stack Software Developer",
    period: "Jul 2022 — Jun 2023",
    location: "Bengaluru, India",
    color: "pink",
    summary:
      "Shipped a cloud construction-management product with scheduling, appointments, calendars, invoices, real-time data, and mobile dashboards.",
    bullets: [
      "Reduced scheduling errors by 35%",
      "Improved booking efficiency by 40%",
      "Deployed through GitHub CI/CD to Vercel and Railway",
    ],
    highlight: { value: "8", label: "REST APIs integrated" },
  },
  {
    company: "SMC-HNV",
    role: "Software Engineer",
    period: "Jun 2021 — Jun 2022",
    location: "Bengaluru, India",
    color: "blue",
    summary:
      "Developed a secure cost-estimation platform with real-time budget tracking, automated thresholds, project search, and PDF reporting.",
    bullets: [
      "Secure owner-only authentication and encrypted credentials",
      "Alerts at 80% and 100% spend thresholds",
      "Automated exports reduced manual reporting effort",
    ],
    highlight: { value: "20%", label: "better budget accuracy" },
  },
];

export const projects = [
  {
    type: "Data Visualization",
    title: "Uber Data Analysis",
    text: "Analyzed 50,000+ ride records with Tableau and Python to reveal travel patterns and demand clusters.",
    result: "30% better clustering accuracy",
    stack: ["Python", "Tableau", "Analytics"],
    color: "yellow",
    github: "https://github.com/19wh1a1249/Uber-Data-Analysis",
  },
  {
    type: "Machine Learning",
    title: "Underwater Image Enhancement",
    text: "Used machine-learning models and OpenCV to correct low contrast, color distortion, and underwater visibility.",
    result: "40% clearer images",
    stack: ["Python", "OpenCV", "ML"],
    color: "pink",
    github: "https://github.com/19wh1a1249/Underwater-Image-Enhacement",
  },
  {
    type: "Product Development",
    title: "E-Commerce Platform",
    text: "Created a scalable commerce experience with scheduling, secure data handling, and real-time notifications.",
    result: "Nearly 50% less booking time",
    stack: ["Web", "APIs", "UX"],
    color: "green",
    github: "https://github.com/19wh1a1249/E-commerce_Website",
  },
];

export const skillGroups = [
  { title: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Figma", "WordPress"] },
  { title: "Backend", skills: ["Node.js", "Django", "Python", "C#", "ASP.NET Core", "REST APIs"] },
  { title: "Data & Cloud", skills: ["PostgreSQL", "MySQL", "SQL Server", "AWS", "GCP"] },
  { title: "Delivery", skills: ["Docker", "GitHub", "CI/CD", "Vercel", "Railway", "HubSpot", "Agile"] },
  { title: "AI Tools", skills: ["Cursor", "Claude Code", "GitHub Copilot", "Gemini", "ChatGPT", "Prompt Engineering"] },
];

export const education = [
  {
    period: "2024 — 2025",
    degree: "MS, Information Technology",
    school: "Arizona State University",
    detail: "Advanced Big Data Analytics · Data Visualization · NLP for IT",
    label: "Graduate degree",
    tone: "masters",
  },
  {
    period: "2019 — 2023",
    degree: "B.Tech, Information Technology",
    school: "BVRIT Hyderabad",
    detail: "Data Structures · Machine Learning · Networks · Web Programming",
    label: "Undergraduate degree",
    tone: "bachelors",
  },
];

export const certifications = [
  {
    issuer: "AWS",
    title: "Fundamentals of ML and AI",
    detail: "Applied machine learning and responsible AI fundamentals.",
  },
  {
    issuer: "AWS",
    title: "Foundations of Prompt Engineering",
    detail: "Methods for designing clear, reliable generative AI interactions.",
  },
  {
    issuer: "Leadership",
    title: "Campus cultural programming",
    detail: "Organized five cultural events with 200+ participants.",
  },
];

export const impactStats = [
  { value: "3+", label: "Years building", note: "Internal tools to customer platforms" },
  { value: "4+", label: "Engineering roles", note: "Across the US and India" },
  { value: "4+", label: "Product domains", note: "Healthcare · Fintech · SaaS · Construction" },
  { value: "40%", label: "Peak workflow gain", note: "Measured improvements, not vanity metrics" },
];
