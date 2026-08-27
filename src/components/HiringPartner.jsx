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
    <section className="relative w-full bg-[#f8f5f1] py-20 px-5 overflow-hidden">

      {/* GLOW BACKGROUND */}
      {/* <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-200/40 blur-[160px] rounded-full"></div> */}

      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: -40, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto relative z-10"
      >
        <h2 className="text-2xl md:text-4xl pb-4 font-extrabold text-gray-900">
         OUR INDUSTRY ECOSYSTEM PARTNERS

        </h2>
        <p className="text-gray-700 mt-3 text-lg">
          We partner with leading wood product, furniture, and timber
          engineering companies to create premium career opportunities for
          our students.
        </p>
      </motion.div>

      {/* MARQUEE ROW */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mt-14 relative z-10"
      >
        <Marquee direction="right" speed={60} gradient={false}>
          {hPartners.map((partner, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.15, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="mx-12 p-5 rounded-2xl bg-[#FFFDF8] backdrop-blur-md shadow-xl border border-orange-100"
            >
              <img
                src={partner.logo}
                alt={partner.pname}
                className="h-10 md:h-12 w-20 object-cover"
              />
            </motion.div>
          ))}
        </Marquee>
      </motion.div>

    </section>
  );
};

export default HiringPartner;
