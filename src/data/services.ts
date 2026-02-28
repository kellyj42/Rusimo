export type ServiceItem = {
  slug: string;
  title: string;
  description: string;
  image: string;
  summary: string;
};

export const services: ServiceItem[] = [
  {
    slug: "tiling",
    title: "Tiling",
    description: "Precision ceramic, marble & porcelain installation.",
    image: "/imgs/tile.jpeg",
    summary:
      "Our tiling team handles wall and floor installations with careful leveling, clean joints, and long-lasting finishing. We help you choose patterns and materials that fit your space and budget while keeping the final look modern and durable.",
  },
  {
    slug: "terrazzo",
    title: "Terrazzo",
    description: "Elegant, durable terrazzo flooring solutions.",
    image: "/imgs/terazo.jpeg",
    summary:
      "We deliver custom terrazzo surfaces that combine style with durability for homes, offices, and commercial spaces. From substrate preparation to final polish, our process focuses on a smooth finish that stands up to daily use.",
  },
  {
    slug: "partitioning",
    title: "Office Partitioning",
    description: "Modern glass & interior partition systems.",
    image: "/imgs/office.jpg",
    summary:
      "Our office partitioning solutions create practical work zones without losing openness and light. We install clean, professional partition systems that improve privacy, organization, and the overall flow of your workspace.",
  },
  {
    slug: "renovation",
    title: "Renovation Works",
    description: "Complete home & office renovations.",
    image: "/imgs/kitchen.jpeg",
    summary:
      "We manage renovation projects from planning to finishing, covering structural updates, surfaces, and detail work. The goal is to refresh your space with better function, improved aesthetics, and reliable workmanship.",
  },
  {
    slug: "remodeling",
    title: "Floor Remodeling",
    description: "Transform worn floors into beautiful surfaces.",
    image: "/imgs/floor.jpeg",
    summary:
      "Our floor remodeling service restores and upgrades old flooring with materials that suit your interior style and usage needs. We focus on precision preparation and installation so the final floor is both attractive and built to last.",
  },
  {
    slug: "painting",
    title: "Painting & Finishing",
    description: "Professional painting and wall finishing services.",
    image: "/imgs/finishing.jpeg",
    summary:
      "We provide interior and exterior painting with proper surface prep, quality coatings, and neat finishing details. The result is a clean, consistent finish that protects your walls and elevates the look of your property.",
  },
];

export const servicesBySlug = Object.fromEntries(
  services.map((service) => [service.slug, service])
);
