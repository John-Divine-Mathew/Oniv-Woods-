import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const HiringPartner = () => {
  const hPartners = [
    { pname: "Greenply", logo: "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_600/greenply_lks1mq.png" },
    { pname: "Century Ply", logo: "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_600/centuryply_evfmvt.jpg" },
    { pname: "Kitply", logo: "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_600/kitply_hvbgfu.png" },
    { pname: "Action Tesa", logo: "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_600/actiontesa_rnuxl2.jpg" },
    { pname: "Merino Laminates", logo: "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_600/merino_sciyif.png" },
    { pname: "Saint-Gobain", logo: "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_600/saintgobain_b9n1nv.png" },
    { pname: "Häfele", logo: "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_600/hafele_evg3ys.jpg" },
    { pname: "Hettich", logo: "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_600/hettich_kr5ype.png" },
    { pname: "Ebco", logo: "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_600/ebca_cpdret.png" },
    { pname: "Blum", logo: "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_600/blum_rof8td.png" },
    { pname: "Bosch Power Tools", logo: "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_600/bosch_q5lc6w.jpg" },
    { pname: "Makita", logo: "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_600/makita_twhiuq.png" },
  ];

  return (
    <section className="relative w-full bg-[#f8f5f1] py-16 sm:py-20 px-5 overflow-hidden border-t border-stone-200/60">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto relative z-10 mb-8 sm:mb-12"
      >
        <span className="eyebrow block mb-2 text-amber-800">
          Industry Network
        </span>
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-display font-bold text-gray-900">
          Industry Ecosystem Partners
        </h2>
        <p className="text-stone-600 mt-2 text-xs sm:text-base leading-relaxed">
          We collaborate with leading timber engineering and woodworking enterprises to create direct career pipelines.
        </p>
      </motion.div>

      <div className="relative z-10 overflow-hidden py-2">
        <Marquee direction="right" speed={38} gradient={false} pauseOnHover={true}>
          {hPartners.map((partner, i) => (
            <div
              key={i}
              className="mx-3 sm:mx-5 p-3.5 sm:p-4 rounded-xl bg-white shadow-xs hover:shadow-lg border border-stone-200/80 hover:border-amber-700/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.pname}
                loading="lazy"
                className="h-8 sm:h-10 w-16 sm:w-24 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default HiringPartner;
