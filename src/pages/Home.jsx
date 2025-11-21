import React from "react";
import ThemeToggle from "../component/ThemeToggle";
import StarBackground from "../component/StarBackground";
import NavBar from "../component/NavBar";
import HeroSection from "../component/HeroSection";
import AboutSection from "../component/AboutSection";
import SkillsSections from "../component/SkillsSections";
import ProjectsSection from "../component/ProjectsSection";
import ContactSection from "../component/ContactSection";
import Footer from "../component/Footer";
const Home = () => {
    return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background Effects*/}
      <StarBackground />

      {/* NavBar */}
      <NavBar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSections />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
