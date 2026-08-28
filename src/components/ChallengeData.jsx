// -------------------------------------------------------------
// VERIFIED CHALLENGE DATA & BRIEF STRUCTURE
// -------------------------------------------------------------

export const challengeDetails = {
  "heirloom-timber": {
    id: "heirloom-timber",
    num: "01",
    title: "The Heirloom Timber Living Object",
    category: "Wooden Lifestyle & Furniture",
    heroSubtitle: "Crafting Functional Seating & Living Objects from Solid Certified Hardwood",
    heroImage: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1800&auto=format&fit=crop",
    scope: "Individual Designers or Duo Teams",
    brief: "Design and fabricate a functional accent chair, low lounge seating, or utility storage credenza utilizing solid certified Indonesian teak, rosewood, or temperate ash with zero exposed metallic hardware.",
    problemStatement: "Modern mass-market furniture relies heavily on short-lived composite chipboards, toxic synthetic adhesives, and non-recyclable hardware fasteners that fail within a few years, filling landfills and degrading craftsmanship.",
    designObjective: "Re-establish the permanence of heirloom woodworking by harmonizing traditional mortise-and-tenon or sliding dovetail joinery with contemporary ergonomic contours and biodegradable organic oil finishes.",
    requirements: [
      "Must utilize 100% solid certified replanted timber or responsibly sourced hardwood.",
      "Primary load-bearing connections must rely strictly on mechanical wood-to-wood joinery.",
      "Surface finishing must use non-toxic organic hardwax oils or plant-based sealants.",
      "Must include full-scale 1:1 physical prototyping validation of human weight and balance.",
    ],
    process: [
      { step: "01", title: "Grain & Species Analysis", desc: "Select timber species considering moisture equilibria, growth ring density, and directional grain strength." },
      { step: "02", title: "Ergonomic Scale Modeling", desc: "Test lumbar curvature, seating angle, and weight distribution through 1:5 scale wood and foam models." },
      { step: "03", title: "Precision Joinery & Machining", desc: "Execute joints using workshop table saws, tenoners, spindle moulders, or CNC tooling." },
      { step: "04", title: "Hand-Burnishing & Oil Seal", desc: "Hand-sand through progressive grits to 400-grit and hand-rub cold-pressed natural oils." },
    ],
    submission: [
      "High-resolution 300 DPI PDF presentation board with exploded joinery diagrams.",
      "Digital 3D CAD geometry (STEP / IGES) with orthographic dimensioned blueprints.",
      "Photo documentation of physical scale mockups and joinery test pieces.",
      "Material provenance certificate detailing timber source and finish ingredients.",
    ],
    criteria: [
      { title: "Material Innovation", score: "25%", desc: "Respectful and creative utilization of natural hardwood grain and live-edge character." },
      { title: "Ergonomics & Form", score: "25%", desc: "Distinctive sculptural presence, comfortable posture support, and tactile beauty." },
      { title: "Joinery Integrity", score: "25%", desc: "Precision structural tolerances and pure wood-to-wood mechanical strength." },
      { title: "Market Feasibility", score: "25%", desc: "Realistic workshop repeatability, packaging efficiency, and luxury interior appeal." },
    ],
    selectedWork: {
      title: "Komorebi Sculptural Teak Lounge",
      image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=900&auto=format&fit=crop",
      caption: "Exhibited at Trade Expo Indonesia with solid Indonesian teak mortise-and-tenon joints.",
    },
  },

  "parametric-partitions": {
    id: "parametric-partitions",
    num: "02",
    title: "Parametric Spatial & Acoustic Partitions",
    category: "Architectural & Spatial Elements",
    heroSubtitle: "Modular Sound-Diffusing Timber Systems for Luxury Architectural Interiors",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1800&auto=format&fit=crop",
    scope: "Architects, Spatial Designers & Computational Craftsmen",
    brief: "Develop a modular, demountable sound-diffusing timber partition system engineered for luxury interior spaces and manufactured via 5-axis CNC machining.",
    problemStatement: "Contemporary open-plan commercial and residential architecture struggles with acoustic reflection, lack of privacy, and generic drywall partitions that lack tactile soul or environmental sustainability.",
    designObjective: "Create an algorithmically driven wooden architectural screen that modulates daylight and diffuses acoustic reverberation while offering rapid flat-pack assembly and modular scalability.",
    requirements: [
      "Parametric module geometry designed for efficient multi-axis CNC nesting cut paths.",
      "Acoustic surface profiling tested for sound scattering and diffusion coefficients.",
      "Lightweight demountable interlocking assembly requiring minimal site tooling.",
      "FSC-certified hardwood or acoustic micro-perforated timber veneer panels.",
    ],
    process: [
      { step: "01", title: "Computational Acoustic Modeling", desc: "Simulate wave reflection and absorption curves using parametric scripting." },
      { step: "02", title: "CNC Nesting Optimization", desc: "Develop low-waste nesting algorithms to minimize timber sheet and offcut wastage." },
      { step: "03", title: "Interlocking Joint Machining", desc: "Machine friction-fit slide joints with 0.2mm precision tolerances." },
      { step: "04", title: "Modular Rig Installation", desc: "Assemble a 2.4m x 1.2m modular test bay to test structural rigidity." },
    ],
    submission: [
      "A1 PDF architectural drawings detailing modular repetition and ceiling/floor anchoring.",
      "Parametric 3D CAD files (Rhino/Grasshopper or STEP format) with CNC toolpaths.",
      "Acoustic simulation report and acoustic diffusion frequency response data.",
      "Physical module prototype photos demonstrating dry-fit assembly.",
    ],
    criteria: [
      { title: "Computational Rigor", score: "25%", desc: "Elegance of parametric algorithm and material utilization efficiency." },
      { title: "Acoustic Efficacy", score: "25%", desc: "Verified sound diffusion capability and spatial light modulation." },
      { title: "CNC Manufacturability", score: "25%", desc: "Toolpath efficiency and repeatability in production environments." },
      { title: "Architectural Integration", score: "25%", desc: "Versatility across diverse interior spatial typologies." },
    ],
    selectedWork: {
      title: "Ash Wave Parametric Diffusion Screen",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop",
      caption: "5-axis CNC machined from white ash, providing 45% acoustic reflection dampening.",
    },
  },

  "circular-wood": {
    id: "circular-wood",
    num: "03",
    title: "Circular Reclaimed Wood Innovation",
    category: "Sustainable Material Innovations",
    heroSubtitle: "Upcycling Industrial Timber Offcuts into High-Value Lifestyle Goods",
    heroImage: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1800&auto=format&fit=crop",
    scope: "Eco-Designers, Material Innovators & Artisans",
    brief: "Transform industrial timber end-grain offcuts, demolished building beams, or agricultural byproducts into luxury contemporary lifestyle and decor products.",
    problemStatement: "Over 40% of prime architectural timber is discarded as offcuts, sawdust, or irregular pieces during mass lumber milling, resulting in colossal environmental and economic waste.",
    designObjective: "Prove that circular upcycling can yield objects of superior luxury, grain complexity, and market desirability compared to virgin timber products.",
    requirements: [
      "At least 75% of total product volume must comprise reclaimed or post-industrial timber.",
      "End-grain alignment and moisture stabilization must be engineered against warping.",
      "Adhesives must be low-VOC or bio-based non-toxic resin systems.",
      "Commercial pricing and bill of materials must demonstrate strong retail margin feasibility.",
    ],
    process: [
      { step: "01", title: "Offcut Grading & Sorting", desc: "Sort salvaged timber by moisture content, species density, and grain orientation." },
      { step: "02", title: "Stabilization & Finger-Jointing", desc: "Kiln-dry offcuts and mill precision finger-joints or laminated structural blocks." },
      { step: "03", title: "Sculptural Lathe & CNC Shaping", desc: "Turn, carve, or CNC-profile composite blanks into refined geometric silhouettes." },
      { step: "04", title: "Natural Resin & Beeswax Finish", desc: "Polish with natural beeswax and linseed oil to highlight kaleidoscopic end-grain." },
    ],
    submission: [
      "Complete life-cycle and circular economy assessment report.",
      "Production bill of materials detailing offcut sourcing and scrap reduction percentages.",
      "Full 3D CAD modeling and workshop step-by-step assembly diagrams.",
      "High-resolution photos of finished upcycled prototype.",
    ],
    criteria: [
      { title: "Circular Ethics", score: "25%", desc: "Percentage of reclaimed timber utilized and scrap diversion efficiency." },
      { title: "Aesthetic Transformation", score: "25%", desc: "Ability to elevate waste material into a luxurious, desirable design object." },
      { title: "Structural Longevity", score: "25%", desc: "Joint stability and resistance to seasonal moisture expansion." },
      { title: "Commercial Scalability", score: "25%", desc: "Viability of continuous supply chain and production economics." },
    ],
    selectedWork: {
      title: "Sonokeling & Rosewood End-Grain Matrix Vessel",
      image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=900&auto=format&fit=crop",
      caption: "Constructed from 120 reclaimed timber mill offcuts with bio-based bonding.",
    },
  },
};
