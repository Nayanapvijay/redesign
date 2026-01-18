import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ProjectsPreview from "../components/ProjectsPreview";
import ContactCTA from "../components/ContactCTA";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProjectsPreview />
      <ContactCTA />
    </>
  );
};

export default Home;
