import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

import HomePagePro from './pages/HomePagePro';
import AboutPage from './pages/AboutPage';
import SustainabilityPage from './pages/SustainabilityPage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import ChallengesPage from './pages/ChallengesPage';
import ChallengeDetailPage from './pages/ChallengeDetailPage';
import ProjectsPage from './pages/ProjectsPage';
import ApplyPage from './pages/ApplyPage';
import ContactPage from './pages/ContactPage';

import ScrollToTop from './components/ScrollToTop';
import ScrollTopButton from './components/ScrollTopButton';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    AOS.refresh();
  }, []);

  return (
    <>
      <ScrollToTop />
      <ScrollTopButton />
      <Routes>
        <Route path="/" element={<HomePagePro />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/sustainability" element={<SustainabilityPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/course/:id" element={<CourseDetailPage />} />
        <Route path="/challenges" element={<ChallengesPage />} />
        <Route path="/challenge/:id" element={<ChallengeDetailPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/register" element={<ApplyPage />} />
        {/* Backwards compatibility for legacy typo */}
        <Route path="/challanges" element={<ChallengesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Catch-all fallback */}
        <Route path="*" element={<HomePagePro />} />
      </Routes>
    </>
  );
}

export default App;
