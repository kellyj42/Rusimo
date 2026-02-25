import FinalCTA from "./components/sections/FinalCTA";
import Hero from "./components/sections/Hero";
import Process from "./components/sections/Process";
import ProjectsPreview from "./components/sections/Project";
import Services from "./components/sections/Services";
import Testimonials from "./components/sections/Testimonials";
import WhyChooseUs from "./components/sections/Trust";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs/>
      <ProjectsPreview/>
      <Process/>
      <Testimonials/>
      <FinalCTA/>
    </>
  );
}
