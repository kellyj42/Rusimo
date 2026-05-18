import FinalCTA from "./components/sections/FinalCTA";
import FAQ from "./components/sections/FAQ";
import Gallery from "./components/sections/Gallery";
import Hero from "./components/sections/Hero";
import Process from "./components/sections/Process";
import ProjectsPreview from "./components/sections/Project";
import ResidentialConstruction from "./components/sections/ResidentialConstruction";
import Services from "./components/sections/Services";
import Testimonials from "./components/sections/Testimonials";
import WhyChooseUs from "./components/sections/Trust";
import JsonLd from "./components/seo/JsonLd";
import { createPageMetadata, faqSchema } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Residential Construction, Finishing & Renovation in Kampala",
  description:
    "Rusimo Construction builds residential homes from foundation to roofing and delivers premium tiling, terrazzo, painting, renovation, and finishing services in Kampala, Uganda.",
  path: "/",
});

export default function Home() {
  return (
    <main>
      <JsonLd data={faqSchema()} />
      <Hero />
      <ResidentialConstruction />
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
