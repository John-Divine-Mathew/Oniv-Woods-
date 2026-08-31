import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";
import { Link } from "react-router-dom";
import {
  FiSun,
  FiShield,
  FiCheckCircle,
  FiArrowRight,
  FiLayers,
  FiCompass,
  FiRefreshCw,
} from "react-icons/fi";

const SUSTAINABLE_SPECIES = [
  {
    id: "teak",
    name: "Indonesian Teak (Tectona Grandis)",
    origin: "Sustainable Replanted Plantations, Java",
    trait: "High Natural Silica & Protective Oils",
    density: "650 kg/m³",
    ecoBenefit: "Natural weather & pest defense requiring zero synthetic chemical preservatives.",
    image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "walnut",
    name: "American & European Walnut",
    origin: "FSC-Certified Managed Temperate Forests",
    trait: "Rich Natural Heartwood Figuring",
    density: "610 kg/m³",
    ecoBenefit: "Biodegradable organic linseed & hardwax finishes enhance grain without toxic VOCs.",
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "ash",
    name: "White Ash & European Oak",
    origin: "Responsibly Harvested Renewable Woodlands",
    trait: "High Tensile Steam-Bending Elasticity",
    density: "710 kg/m³",
    ecoBenefit: "Rapid regenerative woodland cycles with superior structural load capacity.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "rosewood",
    name: "Sonokeling Rosewood",
    origin: "Regulated Indonesian Agro-Forestry",
    trait: "Dense Purple-Black Streaked Grain",
    density: "830 kg/m³",
    ecoBenefit: "Carefully quota-controlled agro-forestry harvest with zero chemical bleaching.",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=800&auto=format&fit=crop",
  },
];

const LIFECYCLE_STAGES = [
  {
    num: "01",
    phase: "Agro-Forestry & Origin",
    title: "Living Canopy & Monitored Plantations",
    desc: "We exclusively source timber from certified replanted plantations and regulated agro-forestry in Java and temperate reserves. Trees are selected at biological maturity, allowing natural woodland regeneration.",
    tag: "Ethical Sourcing",
    icon: <FiSun size={18} />,
  },
  {
    num: "02",
    phase: "Material Science & Seasoning",
    title: "Solar & Air Moisture Diagnostics",
    desc: "Raw timber is slowly seasoned in controlled chambers to stabilize moisture content to 8–12%. Understanding expansion coefficients eliminates the need for plastic polymers or chemical stabilizers.",
    tag: "Material Diagnostics",
    icon: <FiCompass size={18} />,
  },
  {
    num: "03",
    phase: "Precision Fabrication",
    title: "Zero-Waste Nesting & Circular Design",
    desc: "Algorithmic nesting on 5-axis CNC software maximizes yield from every log. Offcuts and wood shavings are channeled into student upcycling design challenges and bio-heating.",
    tag: "Circular Workshop",
    icon: <FiLayers size={18} />,
  },
  {
    num: "04",
    phase: "Architectural Longevity",
    title: "Zero-Metal Joinery & Organic Oils",
    desc: "Mortise-and-tenon and dovetail joinery replace synthetic adhesives and disposable fasteners. Surfaces are hand-burnished with cold-pressed linseed oils and natural beeswaxes for lifetime renewal.",
    tag: "Heirloom Durability",
    icon: <FiShield size={18} />,
  },
];

export default function SustainabilitySection({ onEnroll }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [selectedSpecies, setSelectedSpecies] = useState(SUSTAINABLE_SPECIES[0]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const isMobile = window.innerWidth < 768;
    const width = container.clientWidth;
    const height = container.clientHeight || (isMobile ? 280 : 420);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, isMobile ? 3.0 : 2.6, isMobile ? 4.2 : 3.8);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: !isMobile,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));

    const grainGroup = new THREE.Group();
    scene.add(grainGroup);

    const ringCount = isMobile ? 16 : 26;
    for (let i = 1; i <= ringCount; i++) {
      const radius = (i / ringCount) * 1.5;
      const pts = [];
      const segments = isMobile ? 48 : 80;
      for (let s = 0; s <= segments; s++) {
        const angle = (s / segments) * Math.PI * 2;
        const wobble =
          Math.sin(angle * 3 + i * 0.4) * 0.02 +
          Math.cos(angle * 5 - i * 0.2) * 0.015;
        const r = radius + wobble;
        pts.push(new THREE.Vector3(Math.cos(angle) * r, 0, Math.sin(angle) * r));
      }

      const ringGeo = new THREE.BufferGeometry().setFromPoints(pts);
      const ringMat = new THREE.LineBasicMaterial({
        color: i % 4 === 0 ? 0xd4b28c : 0xb0713c,
        transparent: true,
        opacity: 0.25 + (i / ringCount) * 0.45,
      });
      const ringLine = new THREE.Line(ringGeo, ringMat);
      grainGroup.add(ringLine);
    }

    const slabGeo = new THREE.CylinderGeometry(1.54, 1.54, 0.12, isMobile ? 32 : 48);
    const slabMat = new THREE.MeshStandardMaterial({
      color: 0x1f1b17,
      roughness: 0.9,
      metalness: 0.1,
      transparent: true,
      opacity: 0.94,
    });
    const slab = new THREE.Mesh(slabGeo, slabMat);
    slab.position.y = -0.06;
    grainGroup.add(slab);

    const coreGeo = new THREE.SphereGeometry(0.06, 12, 12);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b });
    const core = new THREE.Mesh(coreGeo, coreMat);
    core.position.y = 0.02;
    grainGroup.add(core);

    const rayMat = new THREE.LineBasicMaterial({
      color: 0xe2cbaf,
      transparent: true,
      opacity: 0.18,
    });
    const rayCount = isMobile ? 8 : 16;
    for (let r = 0; r < rayCount; r++) {
      const angle = (r / rayCount) * Math.PI * 2;
      const rayGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0.005, 0),
        new THREE.Vector3(Math.cos(angle) * 1.5, 0.005, Math.sin(angle) * 1.5),
      ]);
      const ray = new THREE.Line(rayGeo, rayMat);
      grainGroup.add(ray);
    }

    const ambLight = new THREE.AmbientLight(0xffedd5, 1.0);
    scene.add(ambLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(2, 4, 3);
    scene.add(dirLight);

    let animationFrameId;
    let clock = new THREE.Clock();
    let mouse = { x: 0, y: 0 };
    let targetRotation = { x: 0.45, y: 0 };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      targetRotation.y += 0.003;
      grainGroup.rotation.y += (targetRotation.y - grainGroup.rotation.y) * 0.05;
      grainGroup.rotation.x += (targetRotation.x + mouse.y * 0.2 - grainGroup.rotation.x) * 0.05;
      grainGroup.rotation.z += (mouse.x * 0.15 - grainGroup.rotation.z) * 0.05;

      core.scale.setScalar(1 + Math.sin(elapsed * 2) * 0.15);

      renderer.render(scene, camera);
    };

    animate();

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) / rect.width - 0.5;
      mouse.y = (e.clientY - rect.top) / rect.height - 0.5;
    };

    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const nw = container.clientWidth;
      const nh = container.clientHeight || (window.innerWidth < 768 ? 280 : 420);
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };

    window.addEventListener("resize", handleResize);
    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handleMouseMove);
      slabGeo.dispose();
      slabMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section
      className="relative w-full py-16 sm:py-24 overflow-hidden border-t"
      style={{
        background: "var(--oniv-ivory)",
        color: "var(--oniv-charcoal)",
        borderColor: "rgba(74, 53, 37, 0.1)",
      }}
      aria-label="ONIV WOODS Sustainability Experience"
    >
      <div
        className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full pointer-events-none opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #b0713c 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="eyebrow inline-block mb-3 px-3 py-1 rounded-full border text-[10px] sm:text-xs"
            style={{
              color: "var(--oniv-amber-dark)",
              background: "rgba(176,113,60,0.1)",
              borderColor: "rgba(176,113,60,0.25)",
            }}
          >
            Material Integrity & Ecological Responsibility
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-2xl sm:text-4xl md:text-5xl leading-tight"
            style={{ color: "var(--oniv-charcoal)" }}
          >
            From Living Forest to Generational Object
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base leading-relaxed"
            style={{ color: "rgba(30,27,24,0.72)" }}
          >
            At Oniv Woods, sustainability is the direct consequence of authentic woodworking science: selecting certified replanted species, honoring natural grain mechanics, and creating pieces built to last centuries.
          </motion.p>
        </div>

        <div className="mb-14 sm:mb-20 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          <div className="lg:col-span-4 relative rounded-2xl overflow-hidden shadow-md h-[280px] sm:h-[360px] group border" style={{ borderColor: "rgba(74,53,37,0.12)" }}>
            <img
              src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=1200&auto=format&fit=crop"
              alt="Sustainable teak canopy and managed forestry"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#14110e]/85 via-[#14110e]/30 to-transparent flex flex-col justify-end p-5 text-white">
              <span className="eyebrow text-[9px] sm:text-[10px] text-amber-300 mb-1">
                The Living Origin
              </span>
              <h3 className="font-display text-lg sm:text-xl font-medium">
                Regulated Agro-Forestry
              </h3>
              <p className="text-[11px] sm:text-xs text-stone-300 mt-1 leading-relaxed">
                Replanted Java teak plantations & managed European temperate forests.
              </p>
            </div>
          </div>

          <div
            ref={containerRef}
            className="lg:col-span-4 relative rounded-2xl overflow-hidden border shadow-md h-[280px] sm:h-[360px] flex flex-col justify-between p-4 sm:p-6"
            style={{
              background: "linear-gradient(160deg, #181512 0%, #12100e 100%)",
              borderColor: "rgba(249,246,240,0.1)",
              color: "var(--oniv-ivory)",
            }}
          >
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <span className="eyebrow text-[9px] sm:text-[10px] text-amber-400">
                  Interactive 3D Simulation
                </span>
                <h4 className="font-display text-sm sm:text-base text-white">
                  Annual Growth Rings
                </h4>
              </div>
              <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded bg-white/10 text-stone-300 font-mono">
                Cellular Anatomy
              </span>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <canvas
                ref={canvasRef}
                className="w-full h-full block cursor-grab"
                style={{ touchAction: "pan-y" }}
                aria-label="3D Tree ring and cellular grain cross-section simulation"
              />
            </div>

            <div className="relative z-10 text-[10px] sm:text-[11px] text-stone-400 text-center flex items-center justify-center gap-1.5 backdrop-blur-sm bg-black/40 py-1.5 px-3 rounded-lg mx-auto">
              <FiRefreshCw size={11} className="text-amber-400" />
              <span>Hover / touch to inspect grain planes</span>
            </div>
          </div>

          <div className="lg:col-span-4 relative rounded-2xl overflow-hidden shadow-md h-[280px] sm:h-[360px] group border" style={{ borderColor: "rgba(74,53,37,0.12)" }}>
            <img
              src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1200&auto=format&fit=crop"
              alt="Handcrafted joinery finished with natural non-toxic oil"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#14110e]/85 via-[#14110e]/30 to-transparent flex flex-col justify-end p-5 text-white">
              <span className="eyebrow text-[9px] sm:text-[10px] text-amber-300 mb-1">
                The Enduring Result
              </span>
              <h3 className="font-display text-lg sm:text-xl font-medium">
                Generational Joinery
              </h3>
              <p className="text-[11px] sm:text-xs text-stone-300 mt-1 leading-relaxed">
                Zero metallic fasteners, zero toxic lacquers—repaired and renewed for life.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 sm:mb-20">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <h3 className="font-display text-xl sm:text-3xl" style={{ color: "var(--oniv-charcoal)" }}>
              The 4 Pillars of Responsible Wood Design
            </h3>
            <p className="text-xs sm:text-sm mt-1.5 sm:mt-2" style={{ color: "rgba(30,27,24,0.65)" }}>
              How our students and studio craftsmen execute true sustainability through craft integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {LIFECYCLE_STAGES.map((stage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-5 sm:p-6 rounded-xl border bg-white flex flex-col justify-between relative transition-all duration-300 hover:shadow-lg"
                style={{ borderColor: "rgba(74, 53, 37, 0.12)" }}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="font-display text-xl sm:text-2xl font-bold"
                      style={{ color: "var(--oniv-amber-dark)" }}
                    >
                      {stage.num}
                    </span>
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: "rgba(176,113,60,0.12)", color: "var(--oniv-amber-dark)" }}
                    >
                      {stage.icon}
                    </div>
                  </div>

                  <span className="eyebrow text-[9px] sm:text-[10px] block mb-1 text-amber-700">
                    {stage.phase}
                  </span>
                  <h4
                    className="font-display text-base sm:text-lg font-semibold mb-1.5"
                    style={{ color: "var(--oniv-charcoal)" }}
                  >
                    {stage.title}
                  </h4>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(30,27,24,0.7)" }}>
                    {stage.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t flex items-center gap-1.5 text-[10px] sm:text-[11px] font-medium" style={{ borderColor: "rgba(74,53,37,0.08)", color: "var(--oniv-amber-dark)" }}>
                  <FiCheckCircle size={12} />
                  <span>{stage.tag}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div
          className="rounded-2xl p-5 sm:p-8 lg:p-10 border relative overflow-hidden"
          style={{
            background: "linear-gradient(145deg, #181512 0%, #12100e 100%)",
            borderColor: "rgba(176,113,60,0.3)",
            color: "var(--oniv-ivory)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="eyebrow text-[10px] sm:text-[11px] text-amber-400">
                Biological Sourcing Matrix
              </span>
              <h3 className="font-display text-xl sm:text-3xl text-white">
                Verified Timber Sourcing
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-3 sm:mb-4">
                We work strictly with certified hardwoods possessing proven natural preservation properties—avoiding synthetic impregnations.
              </p>

              <div className="space-y-2">
                {SUSTAINABLE_SPECIES.map((species) => {
                  const isSelected = selectedSpecies.id === species.id;
                  return (
                    <button
                      key={species.id}
                      onClick={() => setSelectedSpecies(species)}
                      className="w-full p-3 sm:p-3.5 rounded-lg text-left transition-all flex items-center justify-between border cursor-pointer"
                      style={{
                        background: isSelected
                          ? "rgba(176,113,60,0.22)"
                          : "rgba(255,255,255,0.03)",
                        borderColor: isSelected
                          ? "rgba(176,113,60,0.6)"
                          : "rgba(255,255,255,0.08)",
                      }}
                    >
                      <div>
                        <p className="font-display text-xs sm:text-sm font-semibold text-white">
                          {species.name}
                        </p>
                        <p className="text-[11px] text-amber-400/90 mt-0.5">
                          {species.origin}
                        </p>
                      </div>
                      <span
                        className={`w-2 h-2 rounded-full ${
                          isSelected ? "bg-amber-400 ring-4 ring-amber-400/20" : "bg-stone-600"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedSpecies.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.35 }}
                  className="rounded-xl border p-4 sm:p-6 lg:p-7 bg-white/5 backdrop-blur-md"
                  style={{ borderColor: "rgba(249,246,240,0.12)" }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-center">
                    <div className="sm:col-span-5 h-36 sm:h-44 rounded-lg overflow-hidden border border-white/10">
                      <img
                        src={selectedSpecies.image}
                        alt={selectedSpecies.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="sm:col-span-7 space-y-2.5 sm:space-y-3">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-amber-400 font-semibold">
                          Natural Biological Trait
                        </span>
                        <h4 className="font-display text-lg sm:text-xl text-white">
                          {selectedSpecies.trait}
                        </h4>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs py-2 border-y border-white/10">
                        <div>
                          <span className="text-stone-400 block text-[10px]">Harvest Density</span>
                          <strong className="text-white font-mono">{selectedSpecies.density}</strong>
                        </div>
                        <div>
                          <span className="text-stone-400 block text-[10px]">Origin Status</span>
                          <strong className="text-emerald-400">Certified & Regulated</strong>
                        </div>
                      </div>

                      <p className="text-xs text-stone-300 leading-relaxed">
                        {selectedSpecies.ecoBenefit}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Link
              to="/courses"
              className="btn-oniv-primary text-xs w-full sm:w-auto text-center"
            >
              <span>Explore Sustainable Wood Design Courses</span>
              <FiArrowRight size={14} />
            </Link>
            <button
              onClick={onEnroll}
              className="w-full sm:w-auto px-6 py-3 rounded-md text-xs font-semibold border transition-colors hover:bg-black/5 cursor-pointer text-center"
              style={{
                borderColor: "var(--oniv-charcoal)",
                color: "var(--oniv-charcoal)",
              }}
            >
              Request Material Science Syllabus
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
