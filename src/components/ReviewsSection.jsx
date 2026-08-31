import Marquee from "react-fast-marquee";
import { FaStar } from "react-icons/fa";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Arun Prakash",
      country: "India",
      image: "data:image/webp;base64,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",
      rating: 5,
      text: "The training quality exceeded my expectations. The instructors explained concepts clearly with hands-on guidance.",
    },
    {
      name: "Nabila Putri",
      country: "Indonesia",
      image: "https://archive-share.america.gov/wp-content/uploads/2022/08/GirlUp_Women_Science_WiSci_Camp_Indonesia_IMG_7729-1068x801.jpg",
      rating: 5,
      text: "Very professional team. Workshop environment sangat well structured, learning process felt smooth and nyaman. Overall pengalaman sangat bagus and inspiring.",
    },
    {
      name: "Rizky Ananda",
      country: "Indonesia",
      image: "https://tse4.mm.bing.net/th/id/OIP.61G_8wPuNw150hpSp9I8dgHaFj?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
      rating: 4,
      text: "Informative sessions with clear demonstrations. The practical approach sangat membantu untuk understand lebih baik dan apply secara real.",
    },
    {
      name: "Divya Nair",
      country: "India",
      image: "https://tse1.explicit.bing.net/th/id/OIP.oAx5YraHnspfeizdw8cF1AHaE8?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
      rating: 5,
      text: "Good training structure and friendly mentors. The overall experience was productive and valuable.",
    },
    {
      name: "Ayu Pratama",
      country: "Indonesia",
      image: "https://tse2.mm.bing.net/th/id/OIP.KMfy6_3r_YfumQ5Aan1QsgHaE8?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
      rating: 5,
      text: "Good training structure dengan mentors yang sangat friendly. Overall experience terasa produktif dan sangat bermanfaat untuk pengembangan skill.",
    },
  ];

  const ReviewCard = ({ name, country, image, rating, text }) => (
    <div
      className="
        shrink-0 
        w-[280px] sm:w-[330px]
        bg-white/95 backdrop-blur-lg
        shadow-sm hover:shadow-xl rounded-2xl p-5 sm:p-6 mx-2 sm:mx-3.5
        border border-stone-200/80 hover:border-amber-700/30
        flex flex-col justify-between
        min-h-[220px] sm:min-h-[240px]
        transition-all duration-300 hover:-translate-y-1.5
        cursor-default
      "
    >
      <div>
        {/* Profile */}
        <div className="flex items-center gap-3.5 mb-3">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover border border-amber-900/10 shrink-0 transition-transform duration-300 hover:scale-105"
          />
          <div className="flex flex-col">
            <p className="text-sm sm:text-base font-semibold text-gray-900 leading-tight">
              {name}
            </p>
            <p className="text-xs text-amber-800/80 font-medium">{country}</p>
          </div>
        </div>

        {/* Stars */}
        <div className="flex gap-1 text-amber-500 text-xs sm:text-sm mb-2.5">
          {[...Array(rating)].map((_, i) => (
            <FaStar key={i} className="transition-transform duration-200 hover:scale-125 hover:text-amber-400" />
          ))}
        </div>

        {/* Comment */}
        <p className="text-stone-700 text-xs sm:text-sm leading-relaxed line-clamp-4">
          {text}
        </p>
      </div>
    </div>
  );

  return (
    <section className="py-16 sm:py-24 bg-[#f8f5f1] overflow-hidden border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 text-center mb-8 sm:mb-12">
        <span className="eyebrow block mb-2 text-amber-800">
          Student Voices
        </span>
        <h2 className="text-2xl sm:text-4xl font-display font-bold text-black mb-2 sm:mb-3">
          What Our Students Say
        </h2>
        <p className="text-stone-600 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed">
          Genuine experiences shared by learners from our studios across India & Indonesia.
        </p>
      </div>

      {/* Marquee with pause on hover */}
      <Marquee
        gradient={false}
        speed={32}
        pauseOnHover={true}
        className="overflow-hidden py-3"
      >
        {reviews.map((r, i) => (
          <ReviewCard key={i} {...r} />
        ))}
      </Marquee>
    </section>
  );
};

export default ReviewsSection;
