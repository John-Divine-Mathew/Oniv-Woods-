import React from 'react'
import CourseList from '../Components/CourseList'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const AllCourse = () => {
    return (
        <>
            <Navbar />

            <section className="relative w-full h-[55vh] lg:h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://res.cloudinary.com/dofuxic0j/image/upload/v1765100288/topimg_dhnqsd.png" // Use a more appropriate placeholder image path if available
          alt="Oniv Woods Banner"
          data-aos="zoom-out"
          data-aos-duration="1600"
          className="absolute inset-0 w-full h-full object-cover object-center transform scale-105"
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-[#2a2a2a]/60 to-[#2a2a2a]/30"></div>

        <div data-aos="fade-up" className="relative z-10 text-center px-6 py-12">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#FFFFFF] tracking-tighter">
            Training Modes
          </h1>
          <p className="mt-4 md:mt-6 max-w-3xl mx-auto text-xl text-[#F3EDE3] font-light">
            A new generation design institute shaping future-ready wood & interior designers.
          </p>
        </div>
      </section>

            <div>
                <CourseList />
            </div>

            <Footer />
        </>
    )
}

export default AllCourse