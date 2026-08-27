import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const ChallengeContent = () => {
  return (
    <>
      <Navbar />

      <div className="bg-gray-800 h-20" />

      <section className="w-full bg-[#f8f5f1] py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-[#2B2B2B]">

          {/* Heading */}
          <h2
            className="text-3xl md:text-4xl font-extrabold text-center mb-16 tracking-tight"
            data-aos="fade-up"
          >
            ONIVWOODS PRODUCT DESIGN CHALLENGE
          </h2>

          {/* Section 1 */}
          <div
            className="grid md:grid-cols-2 gap-10 items-center mb-20"
            data-aos="fade-up"
          >
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758"
              alt="Global Design"
              loading="lazy"
              className="rounded-3xl shadow-lg object-cover h-72 w-full"
            />

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Global Design Platform
              </h3>
              <p className="text-lg leading-relaxed mb-4 text-gray-700">
                An international initiative to identify and promote innovative
                designers in wood and interior design, evaluated by a global jury
                from India and Indonesia.
              </p>

              <ul className="space-y-2 text-gray-800 list-disc pl-5">
                <li>Evaluation by global architects and designers</li>
                <li>Industry-focused and future-ready design approach</li>
              </ul>
            </div>
          </div>

          {/* Section 2 */}
          <div
            className="grid md:grid-cols-2 gap-10 items-center mb-20"
            data-aos="fade-up"
          >
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-semibold mb-4">
                International Exposure & Product Showcase
              </h3>
              <p className="text-lg leading-relaxed mb-4 text-gray-700">
                Shortlisted teams showcase their products at Trade Expo Indonesia
                (TEI), connecting directly with international buyers, investors,
                and manufacturers.
              </p>

              <ul className="space-y-2 text-gray-800 list-disc pl-5">
                <li>Free trip to Trade Expo Indonesia</li>
                <li>Dedicated exhibitor stall</li>
                <li>Bilingual branding and marketing support</li>
              </ul>
            </div>

            <img
              src="https://images.unsplash.com/photo-1603201667230-bd139210db18"
              alt="Trade Expo"
              className="order-1 md:order-2 rounded-3xl shadow-lg object-cover h-72 w-full"
            />
          </div>

          {/* Section 3 */}
          <div
            className="grid md:grid-cols-2 gap-10 items-center mb-20"
            data-aos="fade-up"
          >
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Mentorship"
              loading="lazy"
              className="rounded-3xl shadow-lg object-cover h-72 w-full"
            />

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Learning, Mentorship & Feedback
              </h3>
              <p className="text-lg leading-relaxed mb-4 text-gray-700">
                Participants receive expert mentorship, masterclasses, and
                structured feedback to refine product quality and market readiness.
              </p>

              <ul className="space-y-2 text-gray-800 list-disc pl-5">
                <li>Masterclasses on sustainability & branding</li>
                <li>One-on-one mentorship</li>
                <li>Professional product feedback</li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div
            className="grid md:grid-cols-2 gap-10 items-center"
            data-aos="fade-up"
          >
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-semibold mb-4">
                Recognition, Media & Career Growth
              </h3>
              <p className="text-lg leading-relaxed mb-4 text-gray-700">
                Shortlisted teams receive official certificates, media exposure,
                recognition awards, and long-term opportunities through the
                OnivWoods alumni network.
              </p>

              <ul className="space-y-2 text-gray-800 list-disc pl-5">
                <li>Certificates & recognition awards</li>
                <li>Media coverage & design features</li>
                <li>Startup guidance & alumni networking</li>
              </ul>
            </div>

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Recognition"
              loading="lazy"
              className="order-1 md:order-2 rounded-3xl shadow-lg object-cover h-72 w-full"
            />
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default ChallengeContent;
