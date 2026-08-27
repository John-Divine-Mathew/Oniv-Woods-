// ---------------------------------------------
// FULL STANDARDIZED COURSE & MODULE DATA
// Structure aligned fully to `productDesign`

import {
  FiActivity,
  FiAnchor,
  FiBox,
  FiLayers,
  FiTool,
  FiTrendingUp,
} from "react-icons/fi";

// ---------------------------------------------
// COMMON MODULES (CONSISTENT STRUCTURE)
// ---------------------------------------------

export const commonModules = {
  productDesign: [
    { icon: <FiLayers size={25} />, title: "Wood-Based Product Design", desc: "Learn designing home decor, toys, utility items and handcrafted wood products." },
    { icon: <FiTool size={25} />, title: "Hand Tools & Machine Tools", desc: "Understanding essential wood machinery, joinery and workshop safety." },
    { icon: <FiBox size={25} />, title: "Prototype Building", desc: "Create real working models from raw timber to finished products." },
    { icon: <FiActivity size={25} />, title: "Design Thinking", desc: "Solve user problems with systematic design processes." },
    { icon: <FiTrendingUp size={25} />, title: "Market Fit & Pricing", desc: "Know how to price products and identify audience demand." },
    { icon: <FiAnchor size={25} />, title: "Final Portfolio", desc: "Design and develop professional portfolio projects." },
  ],

  industrialDesign: [
    { icon: <FiActivity size={25} />, title: "Industrial Design Fundamentals", desc: "Form, function, ergonomics and user-centered design principles." },
    { icon: <FiLayers size={25} />, title: "Material & Manufacturing", desc: "Wood, metal, polymers, CNC machining and mass production." },
    { icon: <FiTool size={25} />, title: "Prototyping & Model Making", desc: "Rapid prototyping with wood, foam and 3D printing." },
    { icon: <FiTrendingUp size={25} />, title: "Product Market Research", desc: "Understanding consumer needs and competition." },
    { icon: <FiAnchor size={25} />, title: "Ergonomics & Human Factors", desc: "User comfort, reach and movement analysis." },
    { icon: <FiBox size={25} />, title: "3D CAD & Visualization", desc: "Modeling products digitally for manufacturing." },
  ],

  business: [
    { icon: <FiTrendingUp size={25} />, title: "Startup Foundation", desc: "Idea validation, business models and competitor analysis." },
    { icon: <FiActivity size={25} />, title: "Brand Building", desc: "Naming, brand identity and customer psychology." },
    { icon: <FiBox size={25} />, title: "Product Development Strategy", desc: "From idea to launch." },
    { icon: <FiTool size={25} />, title: "Sales & Operations", desc: "Pricing, logistics, vendor management and scaling." },
    { icon: <FiAnchor size={25} />, title: "Marketing Essentials", desc: "Social media, ads and funnels." },
    { icon: <FiLayers size={25} />, title: "Financial Planning", desc: "Budgeting, investments and profit tracking." },
  ],

  webDev: [
    { icon: <FiLayers size={25} />, title: "Frontend Development", desc: "HTML, CSS, JavaScript, React and UI/UX." },
    { icon: <FiBox size={25} />, title: "Backend Development", desc: "Node.js, Express, APIs and databases." },
    { icon: <FiActivity size={25} />, title: "Full-Stack Projects", desc: "Authentication-based applications." },
    { icon: <FiTool size={25} />, title: "Debugging & Deployment", desc: "Hosting and production debugging." },
    { icon: <FiTrendingUp size={25} />, title: "Performance Optimization", desc: "Speed, SEO and best practices." },
    { icon: <FiAnchor size={25} />, title: "Portfolio Building", desc: "Multiple deployable projects." },
  ],

  dm: [
    { icon: <FiTrendingUp size={25} />, title: "SEO & Website Ranking", desc: "On-page, off-page and keywords." },
    { icon: <FiTool size={25} />, title: "Google & Meta Ads", desc: "Search, display and conversion ads." },
    { icon: <FiActivity size={25} />, title: "Social Media Marketing", desc: "Content, growth and engagement." },
    { icon: <FiBox size={25} />, title: "Brand Growth", desc: "Audience building strategies." },
    { icon: <FiLayers size={25} />, title: "Content Creation", desc: "Copywriting, creatives and reels." },
    { icon: <FiAnchor size={25} />, title: "Freelancing Setup", desc: "Client onboarding and pricing." },
  ],

  mobileApp: [
    { icon: <FiBox size={25} />, title: "App UI Design", desc: "Design mobile UI using Figma." },
    { icon: <FiLayers size={25} />, title: "App Development", desc: "Flutter or React Native apps." },
    { icon: <FiTool size={25} />, title: "Backend Integration", desc: "APIs, Firebase and auth." },
    { icon: <FiActivity size={25} />, title: "Testing & Deployment", desc: "Play Store and App Store." },
    { icon: <FiTrendingUp size={25} />, title: "Analytics & Scaling", desc: "Usage insights and growth." },
    { icon: <FiAnchor size={25} />, title: "Capstone Project", desc: "Complete production app." },
  ],

  uiux: [
    { icon: <FiLayers size={25} />, title: "UI Design Principles", desc: "Color, typography and layout." },
    { icon: <FiTool size={25} />, title: "Figma Mastery", desc: "Apps, websites and prototypes." },
    { icon: <FiActivity size={25} />, title: "UX Research", desc: "Personas, journeys and interviews." },
    { icon: <FiTrendingUp size={25} />, title: "Wireframing & Prototyping", desc: "Low and high fidelity flows." },
    { icon: <FiBox size={25} />, title: "Design Systems", desc: "Reusable components." },
    { icon: <FiAnchor size={25} />, title: "Portfolio Projects", desc: "3 UX case studies." },
  ],

  ecommerce: [
    { icon: <FiLayers size={25} />, title: "Online Store Setup", desc: "Shopify, WooCommerce or custom." },
    { icon: <FiBox size={25} />, title: "Product & Inventory", desc: "Catalogs, pricing and stock." },
    { icon: <FiTrendingUp size={25} />, title: "E-Commerce Marketing", desc: "Ads, funnels and remarketing." },
    { icon: <FiActivity size={25} />, title: "Order & Logistics", desc: "Shipping and warehousing." },
    { icon: <FiTool size={25} />, title: "Revenue Optimization", desc: "CRO and upsells." },
    { icon: <FiAnchor size={25} />, title: "Store Automation", desc: "Payments and CRM." },
  ],
};

// ---------------------------------------------
// COURSE DETAILS (FULLY STANDARDIZED)
// ---------------------------------------------

export const courseDetails = {
  productDesign: {
    title: "Product Designing Course",
    subtitle: "Design and develop wooden lifestyle products, decor items and utility goods.",
    heroDesc: "Learn woodworking techniques, product conceptualization, finishing and market-fit design.",
    heroImage: "https://res.cloudinary.com/dofuxic0j/image/upload/v1765010689/course3_rjg7ld.webp",
    topCards: [
      { icon: <FiTool size={25} />, title: "Workshop Training", desc: "Hands-on machinery training.", color: "green" },
      { icon: <FiBox size={25} />, title: "Design Foundation", desc: "Sketching & modeling.", color: "blue" },
      { icon: <FiLayers size={25} />, title: "Final Portfolio", desc: "6+ products.", color: "amber" },
    ],
    modules: commonModules.productDesign,
    curriculum: [
      { week: "Week 1–2", text: "Design basics & ideation" },
      { week: "Week 3–4", text: "Materials & tools" },
      { week: "Week 5–8", text: "Product creation" },
      { week: "Week 9–12", text: "Finishing & branding" },
      { week: "Week 13–16", text: "Portfolio development" },
    ],
    whoShouldJoin: "Students, artisans, designers and entrepreneurs.",
    outcomes: ["6 finished products", "Product catalog", "Market-ready portfolio"],
  },

  industrialDesign: {
    title: "Industrial Designing Course",
    subtitle: "Design functional and manufacturable products.",
    heroDesc: "Hands-on CAD, ergonomics and prototyping training.",
    heroImage: "https://res.cloudinary.com/dofuxic0j/image/upload/v1765010699/course4_zk3izx.webp",
    topCards: [
      { icon: <FiActivity size={25} />, title: "Duration", desc: "4–8 Months", color: "blue" },
      { icon: <FiTool size={25} />, title: "Hands-on", desc: "Workshop + CAD", color: "green" },
      { icon: <FiBox size={25} />, title: "Portfolio", desc: "4 Products", color: "amber" },
    ],
    modules: commonModules.industrialDesign,
    curriculum: [
      { week: "Week 1–2", text: "Sketching & form studies" },
      { week: "Week 3–4", text: "Ergonomics" },
      { week: "Week 5–6", text: "CAD modeling" },
      { week: "Week 7–12", text: "Manufacturing & prototyping" },
      { week: "Week 13–16", text: "Final project" },
    ],
    whoShouldJoin: "Design students and product innovators.",
    outcomes: ["Industrial portfolio", "CAD drawings", "4 design projects"],
  },

  business: {
    title: "Business & Startup Course",
    subtitle: "Start and scale your own business.",
    heroDesc: "From idea validation to growth systems.",
    heroImage: "https://res.cloudinary.com/dofuxic0j/image/upload/v1765010688/course1_sucxsg.webp",
    topCards: [
      { icon: <FiTrendingUp size={25} />, title: "Startup Planning", desc: "Idea to launch.", color: "green" },
      { icon: <FiActivity size={25} />, title: "Brand Strategy", desc: "Identity & storytelling.", color: "blue" },
      { icon: <FiBox size={25} />, title: "Execution", desc: "Product systems.", color: "amber" },
    ],
    modules: commonModules.business,
    curriculum: [
      { week: "Week 1–2", text: "Business fundamentals" },
      { week: "Week 3–4", text: "Branding" },
      { week: "Week 5–6", text: "Finance & funding" },
      { week: "Week 7–8", text: "Marketing" },
      { week: "Week 9–12", text: "Scaling" },
    ],
    whoShouldJoin: "Entrepreneurs and founders.",
    outcomes: ["Business plan", "Brand system", "Sales roadmap"],
  },

  webDev: {
    title: "Web Development Course",
    subtitle: "Become a full-stack web developer.",
    heroDesc: "Frontend, backend and deployment training.",
    heroImage: "https://res.cloudinary.com/dofuxic0j/image/upload/v1765010688/course16_a5b0aj.webp",
    topCards: [
      { icon: <FiLayers size={25} />, title: "Frontend", desc: "React & UI", color: "blue" },
      { icon: <FiBox size={25} />, title: "Backend", desc: "Node & DB", color: "green" },
      { icon: <FiActivity size={25} />, title: "Deployment", desc: "Live apps", color: "amber" },
    ],
    modules: commonModules.webDev,
    curriculum: [
      { week: "Week 1–2", text: "HTML & CSS" },
      { week: "Week 3–4", text: "JavaScript" },
      { week: "Week 5–6", text: "React" },
      { week: "Week 7–8", text: "Backend" },
      { week: "Week 9–12", text: "Full-stack projects" },
    ],
    whoShouldJoin: "Students and job seekers.",
    outcomes: ["3 projects", "Portfolio website", "Job-ready skills"],
  },

  dm: {
    title: "Digital Marketing Course",
    subtitle: "Learn complete online marketing.",
    heroDesc: "SEO, ads, content and analytics.",
    heroImage: "https://res.cloudinary.com/dofuxic0j/image/upload/v1765010688/course7_gh0vce.webp",
    topCards: [
      { icon: <FiTrendingUp size={25} />, title: "SEO", desc: "Ranking systems", color: "blue" },
      { icon: <FiTool size={25} />, title: "Ads", desc: "Google & Meta", color: "green" },
      { icon: <FiActivity size={25} />, title: "Social Media", desc: "Growth", color: "amber" },
    ],
    modules: commonModules.dm,
    curriculum: [
      { week: "Week 1–2", text: "SEO basics" },
      { week: "Week 3–4", text: "Ads" },
      { week: "Week 5–6", text: "Content" },
      { week: "Week 7–8", text: "Funnels" },
      { week: "Week 9–12", text: "Analytics" },
    ],
    whoShouldJoin: "Marketers and business owners.",
    outcomes: ["3 case studies", "Marketing strategy", "Certification prep"],
  },

  mobileApp: {
    title: "Mobile App Development",
    subtitle: "Build Android & iOS apps.",
    heroDesc: "UI to deployment.",
    heroImage: "https://res.cloudinary.com/dofuxic0j/image/upload/v1765010689/course20_fpjin1.webp",
    topCards: [
      { icon: <FiLayers size={25} />, title: "Cross Platform", desc: "Flutter / RN", color: "blue" },
      { icon: <FiTool size={25} />, title: "Backend", desc: "APIs & Firebase", color: "green" },
      { icon: <FiActivity size={25} />, title: "Deployment", desc: "Store publish", color: "amber" },
    ],
    modules: commonModules.mobileApp,
    curriculum: [
      { week: "Week 1–2", text: "UI Design" },
      { week: "Week 3–4", text: "App frontend" },
      { week: "Week 5–6", text: "Backend" },
      { week: "Week 7–8", text: "Testing" },
      { week: "Week 9–12", text: "Final app" },
    ],
    whoShouldJoin: "Beginners and developers.",
    outcomes: ["1 mobile app", "Store-ready build", "Portfolio"],
  },

  uiux: {
    title: "UI/UX Design",
    subtitle: "Design digital products.",
    heroDesc: "UI systems and UX research.",
    heroImage: "https://res.cloudinary.com/dofuxic0j/image/upload/v1765010688/course18_c3v8rf.webp",
    topCards: [
      { icon: <FiLayers size={25} />, title: "UI", desc: "Visual systems", color: "blue" },
      { icon: <FiTool size={25} />, title: "UX", desc: "Research", color: "green" },
      { icon: <FiBox size={25} />, title: "Portfolio", desc: "Case studies", color: "amber" },
    ],
    modules: commonModules.uiux,
    curriculum: [
      { week: "Week 1–2", text: "UI basics" },
      { week: "Week 3–4", text: "UX research" },
      { week: "Week 5–6", text: "Prototyping" },
      { week: "Week 7–8", text: "Design systems" },
      { week: "Week 9–12", text: "Case studies" },
    ],
    whoShouldJoin: "Design aspirants.",
    outcomes: ["3 case studies", "Portfolio", "Figma mastery"],
  },

  ecommerce: {
    title: "E-Commerce Course",
    subtitle: "Build and scale online stores.",
    heroDesc: "Store setup, marketing and automation.",
    heroImage: "https://res.cloudinary.com/dofuxic0j/image/upload/v1765010689/course19_mfahpc.webp",
    topCards: [
      { icon: <FiLayers size={25} />, title: "Store Setup", desc: "Platforms", color: "blue" },
      { icon: <FiTrendingUp size={25} />, title: "Marketing", desc: "Funnels", color: "green" },
      { icon: <FiBox size={25} />, title: "Inventory", desc: "Logistics", color: "amber" },
    ],
    modules: commonModules.ecommerce,
    curriculum: [
      { week: "Week 1–2", text: "Store setup" },
      { week: "Week 3–4", text: "Products" },
      { week: "Week 5–6", text: "Marketing" },
      { week: "Week 7–8", text: "Logistics" },
      { week: "Week 9–12", text: "Scaling" },
    ],
    whoShouldJoin: "Entrepreneurs and sellers.",
    outcomes: ["Online store", "Marketing system", "Automation setup"],
  },
};