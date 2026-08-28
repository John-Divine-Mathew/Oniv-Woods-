import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

import HomePagePro from './pages/HomePagePro';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import ChallengesPage from './pages/ChallengesPage';
import ChallengeDetailPage from './pages/ChallengeDetailPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

import ScrollToTop from './components/ScrollToTop';
import ScrollTopButton from './components/ScrollTopButton';

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    AOS.refresh();
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      <ScrollTopButton />
      <div>
        <Routes>
          <Route path="/" element={<HomePagePro />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/course/:id" element={<CourseDetailPage />} />
          <Route path="/challenges" element={<ChallengesPage />} />
          <Route path="/challenge/:id" element={<ChallengeDetailPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          {/* Backwards compatibility for legacy typo */}
          <Route path="/challanges" element={<ChallengesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Catch-all fallback */}
          <Route path="*" element={<HomePagePro />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
