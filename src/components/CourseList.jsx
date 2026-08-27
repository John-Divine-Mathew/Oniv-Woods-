import React, { useState, useMemo, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";


// ------------ Course Data ------------
const courseData = [
  {
    category: "Designing Course",
    key: "architecture",
    courses: [
      // { id: "communication", title: "Communication Course", image: "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_600/course8_atm5la.webp" },
      { id: "productDesign", title: "Product Designing Course", image: "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_600/course3_rjg7ld.webp" },
      { id: "industrialDesign", title: "Industrial Designing", image: "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_600/course4_zk3izx.webp" },
    ],
  },
  {
    category: "Business Course",
    key: "mba",
    courses: [
      { id: "business", title: "Business & Startup Course", image: "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_600/course1_sucxsg.webp" },
    ],
  },
  {
    category: "Software Development",
    key: "soft-dev",
    courses: [
      { id: "webDev", title: "Web Development", image: "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_600/course16_a5b0aj.webp" },
      { id: "dm", title: "Digital Marketing", image: "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_600/course7_gh0vce.webp" },
      { id: "mobileApp", title: "Mobile App Development", image: "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_600/course20_fpjin1.webp" },
      { id: "uiux", title: "UI/UX Designing", image: "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_600/course18_c3v8rf.webp" },
      { id: "ecommerce", title: "E-Commerce", image: "https://res.cloudinary.com/dofuxic0j/image/upload/f_auto,q_auto,w_600/course19_mfahpc.webp" },
    ],
  },
];

// ------------ Course Card ------------
const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  return (
    <div
    onClick={() => navigate(`/course/${course.id}`)}
      data-aos="fade-up"
      data-aos-duration="900"
      className="bg-white border border-gray-200 rounded-2xl cursor-pointer 
      shadow-sm hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 overflow-hidden"
    >
      <div className="relative w-full h-52 bg-gray-200 animate-pulse">
        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500"
          onLoad={(e) => {
            e.target.classList.remove("opacity-0");
            e.target.parentElement.classList.remove("animate-pulse");
          }}
        />
      </div>

      <h3 className="font-semibold text-lg px-5 py-4 text-black">{course.title}</h3>
    </div>
  );
};

export default function CourseList() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const filteredCourses = useMemo(() => {
    const courses =
      activeCategory === "all"
        ? courseData.flatMap((c) => c.courses)
        : courseData.find((c) => c.key === activeCategory)?.courses || [];

    return courses.filter((course) =>
      course.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [activeCategory, search]);

  return (
    <div className="bg-[#f8f5f1] min-h-screen">
      <div className="py-12 px-4 max-w-7xl mx-auto">

        {/* Title */}
        <h1
          data-aos="fade-down"
          className="text-2xl md:text-4xl font-extrabold text-center tracking-wide text-black mb-10"
        >
          OUR MODES OF TRAINING
        </h1>

        {/* Search Bar */}
        {/* <div
          data-aos="fade-up"
          className="mb-10 max-w-md mx-auto"
        >
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl bg-white shadow-sm 
              text-black focus:outline-none focus:ring-2 focus:ring-black/70"
          />
        </div> */}

        <div className="grid md:grid-cols-4 gap-8">

          {/* Sidebar */}
          <aside className="hidden md:block">
            <div
              data-aos="fade-right"
              className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sticky top-24"
            >
              <h2 className="font-bold text-xl mb-6 tracking-wide text-black">Categories</h2>

              <button
                onClick={() => setActiveCategory("all")}
                className={`block w-full text-left px-4 py-3 rounded-lg mb-3 transition font-medium 
                  ${activeCategory === "all" ? "bg-black text-white shadow" : "bg-gray-100 hover:bg-gray-200 text-black"}`}
              >
                All
              </button>

              {courseData.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`block w-full text-left px-4 py-3 rounded-lg mb-3 transition font-medium 
                    ${activeCategory === cat.key ? "bg-black text-white shadow" : "bg-gray-100 hover:bg-gray-200 text-black"}`}
                >
                  {cat.category}
                </button>
              ))}
            </div>
          </aside>

          {/* Mobile Dropdown */}
          <div className="md:hidden mb-10" data-aos="fade-up">
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-xl bg-white shadow-sm text-black 
                font-semibold focus:outline-none focus:ring-2 focus:ring-black/70"
            >
              <option value="all">All</option>
              {courseData.map((cat) => (
                <option key={cat.key} value={cat.key}>
                  {cat.category}
                </option>
              ))}
            </select>
          </div>

          {/* Course Grid */}
          <section className="col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}