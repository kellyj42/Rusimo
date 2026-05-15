import FinalCTA from "./components/sections/FinalCTA";
import FAQ from "./components/sections/FAQ";
import Gallery from "./components/sections/Gallery";
import Hero from "./components/sections/Hero";
import Process from "./components/sections/Process";
import ProjectsPreview from "./components/sections/Project";
import Services from "./components/sections/Services";
import Testimonials from "./components/sections/Testimonials";
import WhyChooseUs from "./components/sections/Trust";
import JsonLd from "./components/seo/JsonLd";
import { createPageMetadata, faqSchema } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Construction Finishing, Tiling & Renovation in Kampala",
  description:
    "Rusimo Construction delivers premium tiling, terrazzo, renovation, office partitioning, painting, floor remodeling, and exterior finishing services in Kampala, Uganda.",
  path: "/",
});

export default function Home() {
  return (
    <main>
      <JsonLd data={faqSchema()} />
      <Hero />
      <Services />
      <WhyChooseUs/>
      <ProjectsPreview/>
      <Gallery/>
      <Process/>
      <Testimonials/>
      <FAQ/>
      <FinalCTA/>
    </main>
  );
}
