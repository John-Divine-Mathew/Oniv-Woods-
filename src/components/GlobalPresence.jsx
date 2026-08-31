import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";
import { FiGlobe, FiRotateCw, FiShield, FiArrowRight } from "react-icons/fi";

const VERIFIED_HUBS = [
  {
    id: "india",
    country: "India",
    city: "Bangalore",
    title: "India Studio & Technology Lab",
    tagline: "Parametric CAD & Material Sciences Campus",
    lat: 12.9716,
    lon: 77.5946,
    coordinates: "12.97° N, 77.59° E",
    description:
      "The academic and computational design epicenter for Oniv Woods. Specializing in parametric joinery mechanics, timber seasoning engineering, and digital prototyping.",
    highlights: [
      "Parametric Wood CAD & Prototyping Setup",
      "Timber Species Grain & Stress Analysis",
      "Foundational & Advanced Design Admissions",
    ],
    status: "Active Campus & Studio",
  },
  {
    id: "indonesia",
    country: "Indonesia",
    city: "Jakarta & Java",
    title: "Indonesia Craft & Exhibition Hub",
    tagline: "Master Artisan Guild & Trade Expo Axis",
    lat: -6.2088,
    lon: 106.8456,
    coordinates: "6.21° S, 106.85° E",
    description:
      "Direct gateway to Southeast Asia's finest timber craft traditions. Anchoring hand-joinery masterclasses and student prototype showcases at Trade Expo Indonesia (TEI).",
    highlights: [
      "Master Hand-Joinery & Zero-Metal Craft",
      "FSC Indonesian Teak Fabrication",
      "Trade Expo Indonesia (TEI) Showcase Pipeline",
    ],
    status: "Active Guild & Showcase",
  },
];

function latLonToVector3(lat, lon, radius, alt = 0) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const r = radius + alt;
  const x = -(r * Math.sin(phi) * Math.cos(theta));
  const z = r * Math.sin(phi) * Math.sin(theta);
  const y = r * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

function generateLandPoints(radius, isMobile = false) {
  const landBoxes = [
    { minLat: 15, maxLat: 72, minLon: -168, maxLon: -52 },
    { minLat: 7, maxLat: 20, minLon: -105, maxLon: -75 },
    { minLat: -55, maxLat: 12, minLon: -82, maxLon: -35 },
    { minLat: 36, maxLat: 71, minLon: -10, maxLon: 42 },
    { minLat: -35, maxLat: 37, minLon: -18, maxLon: 52 },
    { minLat: 0, maxLat: 75, minLon: 42, maxLon: 150 },
    { minLat: -11, maxLat: 10, minLon: 95, maxLon: 141 },
    { minLat: -47, maxLat: -10, minLon: 112, maxLon: 178 },
  ];

  function isLand(lat, lon) {
    if (lat > 15 && lat < 55 && lon > -50 && lon < -15) return false;
    if (lat < 10 && lat > -45 && lon > 55 && lon < 95) return false;
    if (lon < -125 && lon > -175 && lat < 45 && lat > -20) return false;
    if (lon > 150 && lat < 25 && lat > -15) return false;

    for (let box of landBoxes) {
      if (
        lat >= box.minLat &&
        lat <= box.maxLat &&
        lon >= box.minLon &&
        lon <= box.maxLon
      ) {
        return true;
      }
    }
    return false;
  }

  const positions = [];
  const goldenRatio = (1 + Math.sqrt(5)) / 2;
  const totalSamples = isMobile ? 3600 : 7000;

  for (let i = 0; i < totalSamples; i++) {
    const theta = (2 * Math.PI * i) / goldenRatio;
    const phi = Math.acos(1 - (2 * (i + 0.5)) / totalSamples);

    const lat = 90 - (phi * 180) / Math.PI;
    const lon = ((theta * 180) / Math.PI) % 360 - 180;

    if (isLand(lat, lon)) {
      const v = latLonToVector3(lat, lon, radius, 0.02);
      positions.push(v.x, v.y, v.z);
    }
  }

  return new Float32Array(positions);
}

export default function GlobalPresence({ onEnroll }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [activeHub, setActiveHub] = useState(VERIFIED_HUBS[0]);
  const [autoRotate, setAutoRotate] = useState(true);

  const globeGroupRef = useRef(null);
  const targetRotationRef = useRef({ y: 0.8, x: 0.2 });
  const isDraggingRef = useRef(false);
  const prevPointerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const isMobile = window.innerWidth < 768;
    const width = container.clientWidth;
    const height = container.clientHeight || (isMobile ? 320 : 520);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
    camera.position.set(0, 0, isMobile ? 5.8 : 5.2);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: !isMobile,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);
    globeGroupRef.current = globeGroup;

    const GLOBE_RADIUS = 1.62;
    const segs = isMobile ? 32 : 64;

    const sphereGeo = new THREE.SphereGeometry(GLOBE_RADIUS, segs, segs);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: 0x181512,
      roughness: 0.88,
      metalness: 0.15,
      transparent: true,
      opacity: 0.96,
    });
    const baseSphere = new THREE.Mesh(sphereGeo, sphereMat);
    globeGroup.add(baseSphere);

    const ringsGroup = new THREE.Group();
    globeGroup.add(ringsGroup);
    const ringMat = new THREE.LineBasicMaterial({
      color: 0xb0713c,
      transparent: true,
      opacity: 0.16,
    });

    const latitudes = [0, 23.5, -23.5, 45, -45];
    latitudes.forEach((lat) => {
      const latRad = (lat * Math.PI) / 180;
      const r = GLOBE_RADIUS * Math.cos(latRad) * 1.002;
      const y = GLOBE_RADIUS * Math.sin(latRad) * 1.002;

      const circleGeo = new THREE.BufferGeometry();
      const pts = [];
      const steps = isMobile ? 36 : 64;
      for (let i = 0; i <= steps; i++) {
        const a = (i / steps) * Math.PI * 2;
        pts.push(new THREE.Vector3(Math.cos(a) * r, y, Math.sin(a) * r));
      }
      circleGeo.setFromPoints(pts);
      const line = new THREE.Line(circleGeo, ringMat);
      ringsGroup.add(line);
    });

    const meridianCount = isMobile ? 4 : 6;
    for (let m = 0; m < meridianCount; m++) {
      const lonRot = (m / meridianCount) * Math.PI;
      const meridianGeo = new THREE.BufferGeometry();
      const pts = [];
      const steps = isMobile ? 36 : 64;
      for (let i = 0; i <= steps; i++) {
        const a = (i / steps) * Math.PI * 2;
        pts.push(
          new THREE.Vector3(
            Math.sin(a) * GLOBE_RADIUS * 1.002,
            Math.cos(a) * GLOBE_RADIUS * 1.002,
            0
          )
        );
      }
      meridianGeo.setFromPoints(pts);
      const meridian = new THREE.Line(meridianGeo, ringMat);
      meridian.rotation.y = lonRot;
      ringsGroup.add(meridian);
    }

    const landPointsArray = generateLandPoints(GLOBE_RADIUS, isMobile);
    const landGeo = new THREE.BufferGeometry();
    landGeo.setAttribute("position", new THREE.BufferAttribute(landPointsArray, 3));

    const dotCanvas = document.createElement("canvas");
    dotCanvas.width = 16;
    dotCanvas.height = 16;
    const dotCtx = dotCanvas.getContext("2d");
    const grad = dotCtx.createRadialGradient(8, 8, 0, 8, 8, 8);
    grad.addColorStop(0, "rgba(235, 206, 170, 1)");
    grad.addColorStop(0.5, "rgba(176, 113, 60, 0.8)");
    grad.addColorStop(1, "rgba(176, 113, 60, 0)");
    dotCtx.fillStyle = grad;
    dotCtx.beginPath();
    dotCtx.arc(8, 8, 7, 0, Math.PI * 2);
    dotCtx.fill();

    const dotTexture = new THREE.CanvasTexture(dotCanvas);

    const landMat = new THREE.PointsMaterial({
      size: isMobile ? 0.05 : 0.045,
      map: dotTexture,
      transparent: true,
      opacity: 0.78,
      blending: THREE.NormalBlending,
      depthWrite: false,
    });
    const landMesh = new THREE.Points(landGeo, landMat);
    globeGroup.add(landMesh);

    const haloGeo = new THREE.SphereGeometry(GLOBE_RADIUS * 1.06, 24, 24);
    const haloMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.68 - dot(vNormal, vec3(0, 0, 1.0)), 2.2);
          gl_FragColor = vec4(0.82, 0.58, 0.35, 1.0) * intensity * 0.45;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
    });
    const haloMesh = new THREE.Mesh(haloGeo, haloMat);
    globeGroup.add(haloMesh);

    const indiaPos = latLonToVector3(VERIFIED_HUBS[0].lat, VERIFIED_HUBS[0].lon, GLOBE_RADIUS);
    const indonesiaPos = latLonToVector3(VERIFIED_HUBS[1].lat, VERIFIED_HUBS[1].lon, GLOBE_RADIUS);

    const pinGroup = new THREE.Group();
    globeGroup.add(pinGroup);

    const hubMarkers = [];
    [indiaPos, indonesiaPos].forEach((pos, idx) => {
      const hubData = VERIFIED_HUBS[idx];
      const singlePinGroup = new THREE.Group();
      singlePinGroup.position.copy(pos);
      singlePinGroup.lookAt(pos.clone().multiplyScalar(2));

      const ringGeometry = new THREE.RingGeometry(0.04, 0.065, 24);
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0xf59e0b,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.9,
      });
      const pinRing = new THREE.Mesh(ringGeometry, ringMaterial);
      singlePinGroup.add(pinRing);

      const dotGeometry = new THREE.CircleGeometry(0.025, 24);
      const dotMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
      const pinCenter = new THREE.Mesh(dotGeometry, dotMaterial);
      singlePinGroup.add(pinCenter);

      const stemGeo = new THREE.CylinderGeometry(0.003, 0.003, 0.18, 8);
      stemGeo.translate(0, 0.09, 0);
      stemGeo.rotateX(Math.PI / 2);
      const stemMat = new THREE.MeshBasicMaterial({ color: 0xe2cbaf, transparent: true, opacity: 0.6 });
      const stem = new THREE.Mesh(stemGeo, stemMat);
      singlePinGroup.add(stem);

      const beaconGeo = new THREE.SphereGeometry(0.015, 12, 12);
      const beaconMat = new THREE.MeshBasicMaterial({ color: 0xfbbf24 });
      const beacon = new THREE.Mesh(beaconGeo, beaconMat);
      beacon.position.set(0, 0, 0.18);
      singlePinGroup.add(beacon);

      pinGroup.add(singlePinGroup);
      hubMarkers.push({ group: singlePinGroup, ring: pinRing, data: hubData });
    });

    const midPoint = indiaPos.clone().lerp(indonesiaPos, 0.5);
    midPoint.normalize().multiplyScalar(GLOBE_RADIUS * 1.35);

    const curve = new THREE.QuadraticBezierCurve3(indiaPos, midPoint, indonesiaPos);
    const curvePoints = curve.getPoints(36);
    const arcGeometry = new THREE.BufferGeometry().setFromPoints(curvePoints);
    const arcMaterial = new THREE.LineDashedMaterial({
      color: 0xd97706,
      dashSize: 0.08,
      gapSize: 0.04,
      transparent: true,
      opacity: 0.7,
    });
    const arcLine = new THREE.Line(arcGeometry, arcMaterial);
    arcLine.computeLineDistances();
    globeGroup.add(arcLine);

    const photonGeo = new THREE.SphereGeometry(0.02, 12, 12);
    const photonMat = new THREE.MeshBasicMaterial({ color: 0xfffbeb });
    const photon = new THREE.Mesh(photonGeo, photonMat);
    globeGroup.add(photon);

    const ambientLight = new THREE.AmbientLight(0xffedd5, 0.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.4);
    dirLight1.position.set(5, 3, 4);
    scene.add(dirLight1);

    globeGroup.rotation.y = 1.1;
    globeGroup.rotation.x = 0.12;

    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (!isDraggingRef.current) {
        if (autoRotate) {
          targetRotationRef.current.y += 0.0018;
        }
        globeGroup.rotation.y += (targetRotationRef.current.y - globeGroup.rotation.y) * 0.05;
        globeGroup.rotation.x += (targetRotationRef.current.x - globeGroup.rotation.x) * 0.05;
      }

      const pulseScale = 1 + Math.sin(elapsedTime * 3) * 0.18;
      hubMarkers.forEach((hm) => {
        hm.ring.scale.set(pulseScale, pulseScale, 1);
      });

      const t = (elapsedTime * 0.35) % 1;
      const photonPos = curve.getPoint(t);
      photon.position.copy(photonPos);

      renderer.render(scene, camera);
    };

    animate();

    const handlePointerDown = (e) => {
      isDraggingRef.current = true;
      prevPointerRef.current = {
        x: e.clientX || (e.touches && e.touches[0].clientX) || 0,
        y: e.clientY || (e.touches && e.touches[0].clientY) || 0,
      };
    };

    const handlePointerMove = (e) => {
      const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;

      if (isDraggingRef.current) {
        const deltaX = clientX - prevPointerRef.current.x;
        const deltaY = clientY - prevPointerRef.current.y;

        targetRotationRef.current.y += deltaX * 0.006;
        targetRotationRef.current.x = Math.max(
          -0.6,
          Math.min(0.6, targetRotationRef.current.x + deltaY * 0.006)
        );

        prevPointerRef.current = { x: clientX, y: clientY };
      } else {
        const rect = canvas.getBoundingClientRect();
        const normY = (clientY - rect.top) / rect.height - 0.5;
        targetRotationRef.current.x = normY * 0.25;
      }
    };

    const handlePointerUp = () => {
      isDraggingRef.current = false;
    };

    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const nw = container.clientWidth;
      const nh = container.clientHeight || (window.innerWidth < 768 ? 320 : 520);
      camera.aspect = nw / nh;
      camera.position.z = nw < 640 ? 5.8 : 5.2;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("mouseup", handlePointerUp);

    canvas.addEventListener("touchstart", handlePointerDown, { passive: true });
    window.addEventListener("touchmove", handlePointerMove, { passive: true });
    window.addEventListener("touchend", handlePointerUp);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseup", handlePointerUp);
      canvas.removeEventListener("touchstart", handlePointerDown);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("touchend", handlePointerUp);

      sphereGeo.dispose();
      sphereMat.dispose();
      landGeo.dispose();
      landMat.dispose();
      dotTexture.dispose();
      haloGeo.dispose();
      haloMat.dispose();
      arcGeometry.dispose();
      arcMaterial.dispose();
      renderer.dispose();
    };
  }, [autoRotate]);

  const focusHub = (hub) => {
    setActiveHub(hub);
    if (globeGroupRef.current) {
      if (hub.id === "india") {
        targetRotationRef.current = { y: 0.95, x: 0.08 };
      } else if (hub.id === "indonesia") {
        targetRotationRef.current = { y: 1.45, x: -0.05 };
      }
    }
  };

  return (
    <section
      className="relative w-full py-16 sm:py-24 overflow-hidden border-t border-b"
      style={{
        background: "radial-gradient(ellipse at 50% 40%, #1c1917 0%, #12100e 100%)",
        borderColor: "rgba(249,246,240,0.08)",
        color: "var(--oniv-ivory)",
      }}
      aria-label="ONIV WOODS Global Presence"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full mb-3 sm:mb-4 border text-[10px] sm:text-xs"
            style={{
              background: "rgba(176,113,60,0.14)",
              borderColor: "rgba(176,113,60,0.35)",
              color: "#e2cbaf",
            }}
          >
            <FiGlobe className="text-amber-400" size={12} />
            <span className="eyebrow tracking-widest text-[10px] sm:text-[11px]">
              Cross-Continental Studio Axis
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-2xl sm:text-4xl md:text-5xl leading-tight"
            style={{ color: "var(--oniv-ivory)" }}
          >
            Verified Global Studio Presence
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base leading-relaxed"
            style={{ color: "rgba(249,246,240,0.72)" }}
          >
            Operating across our dual-nation ecosystem in <strong>India & Indonesia</strong>. 
            Bridging master timber craftsmanship, parametric design computation, and international exhibition pipelines.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          <div
            ref={containerRef}
            className="lg:col-span-7 relative w-full h-[320px] sm:h-[420px] lg:h-[520px] flex items-center justify-center rounded-2xl overflow-hidden border"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(38,32,27,0.7) 0%, rgba(18,16,14,0.95) 100%)",
              borderColor: "rgba(249,246,240,0.1)",
            }}
          >
            <canvas
              ref={canvasRef}
              className="w-full h-full cursor-grab active:cursor-grabbing block"
              style={{ touchAction: "pan-y" }}
              aria-label="Interactive 3D Globe displaying Oniv Woods studios in India and Indonesia"
            />

            <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
              <div
                className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md border text-[10px] sm:text-[11px] font-medium flex items-center gap-1.5 backdrop-blur-md"
                style={{
                  background: "rgba(20,17,14,0.7)",
                  borderColor: "rgba(249,246,240,0.12)",
                  color: "rgba(249,246,240,0.8)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>2 Verified Hubs</span>
              </div>
            </div>

            <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between gap-2 pointer-events-none">
              <div
                className="px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] backdrop-blur-md border pointer-events-auto"
                style={{
                  background: "rgba(20,17,14,0.65)",
                  borderColor: "rgba(249,246,240,0.08)",
                  color: "rgba(249,246,240,0.6)",
                }}
              >
                Tap / Drag to rotate
              </div>

              <button
                onClick={() => setAutoRotate(!autoRotate)}
                className="px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] backdrop-blur-md border flex items-center gap-1.5 transition-colors pointer-events-auto hover:bg-white/10"
                style={{
                  background: "rgba(20,17,14,0.65)",
                  borderColor: "rgba(249,246,240,0.12)",
                  color: autoRotate ? "#fbbf24" : "rgba(249,246,240,0.7)",
                }}
                aria-label="Toggle auto rotation"
              >
                <FiRotateCw
                  className={autoRotate ? "animate-spin" : ""}
                  style={{ animationDuration: "6s" }}
                  size={11}
                />
                <span>{autoRotate ? "Auto" : "Paused"}</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between space-y-4 sm:space-y-6">
            <div
              className="p-1 sm:p-1.5 rounded-xl border flex gap-1.5 sm:gap-2"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(249,246,240,0.1)",
              }}
            >
              {VERIFIED_HUBS.map((hub) => {
                const isSelected = activeHub.id === hub.id;
                return (
                  <button
                    key={hub.id}
                    onClick={() => focusHub(hub)}
                    className="flex-1 py-2.5 px-3 sm:py-3 sm:px-4 rounded-lg text-left transition-all relative cursor-pointer"
                    style={{
                      background: isSelected ? "rgba(176,113,60,0.25)" : "transparent",
                      border: isSelected ? "1px solid rgba(176,113,60,0.6)" : "1px solid transparent",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider"
                        style={{ color: isSelected ? "#f59e0b" : "rgba(249,246,240,0.6)" }}
                      >
                        {hub.country}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    </div>
                    <p
                      className="font-display text-xs sm:text-sm font-medium mt-0.5"
                      style={{ color: "var(--oniv-ivory)" }}
                    >
                      {hub.city}
                    </p>
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeHub.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="p-5 sm:p-7 rounded-2xl border relative overflow-hidden"
                style={{
                  background: "linear-gradient(145deg, rgba(35,30,26,0.95) 0%, rgba(22,19,16,0.98) 100%)",
                  borderColor: "rgba(176,113,60,0.3)",
                  boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5)",
                }}
              >
                <div className="flex items-center justify-between gap-2 mb-2 sm:mb-3">
                  <span
                    className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-medium px-2 py-0.5 sm:px-2.5 sm:py-1 rounded"
                    style={{ background: "rgba(16,185,129,0.15)", color: "#6ee7b7" }}
                  >
                    <FiShield size={11} />
                    {activeHub.status}
                  </span>
                  <span className="text-[11px] font-mono" style={{ color: "rgba(249,246,240,0.45)" }}>
                    {activeHub.coordinates}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-semibold mb-0.5 sm:mb-1" style={{ color: "var(--oniv-ivory)" }}>
                  {activeHub.title}
                </h3>
                <p className="text-[11px] sm:text-xs font-medium mb-3 sm:mb-4" style={{ color: "#d97706" }}>
                  {activeHub.tagline}
                </p>

                <p className="text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6" style={{ color: "rgba(249,246,240,0.75)" }}>
                  {activeHub.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-white/10 mb-4 sm:mb-6">
                  <h4 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider" style={{ color: "rgba(249,246,240,0.5)" }}>
                    Hub Specializations:
                  </h4>
                  {activeHub.highlights.map((hl, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs"
                      style={{ color: "rgba(249,246,240,0.85)" }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    onClick={onEnroll}
                    className="w-full py-3 px-4 rounded-lg font-semibold text-xs transition-opacity hover:opacity-90 flex items-center justify-center gap-2 cursor-pointer"
                    style={{ background: "var(--oniv-amber)", color: "var(--oniv-ivory)" }}
                  >
                    <span>Inquire About {activeHub.country} Programs</span>
                    <FiArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            <div
              className="grid grid-cols-2 gap-3 p-3.5 rounded-xl border text-xs"
              style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(249,246,240,0.08)" }}
            >
              <div>
                <p className="text-[10px] uppercase tracking-wider" style={{ color: "rgba(249,246,240,0.5)" }}>
                  Exchange Pipeline
                </p>
                <p className="font-display text-sm sm:text-base font-semibold mt-0.5" style={{ color: "var(--oniv-ivory)" }}>
                  India ↔ Indonesia
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider" style={{ color: "rgba(249,246,240,0.5)" }}>
                  Trade Showcase
                </p>
                <p className="font-display text-sm sm:text-base font-semibold mt-0.5" style={{ color: "var(--oniv-ivory)" }}>
                  Trade Expo Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
