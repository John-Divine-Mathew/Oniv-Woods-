// ---------------------------------------------
// FULL STANDARDIZED COURSE & MODULE DATA
// Structure aligned fully to ONIV WOODS core disciplines
// ---------------------------------------------

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
    { icon: <FiAnchor size={25} />, title: "Marketing Essentials", desc: "Social media, brand presence and distribution." },
    { icon: <FiLayers size={25} />, title: "Financial Planning", desc: "Budgeting, investments and profit tracking." },
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
};