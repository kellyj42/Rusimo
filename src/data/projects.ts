export type ProjectItem = {
  slug: string;
  title: string;
  category: string;
  image: string;
  excerpt: string;
  overview: string;
  scope: string[];
  outcome: string;
};

export const projects: ProjectItem[] = [
  {
    slug: "luxury-living-room-tiling",
    title: "Luxury Living Room Tiling",
    category: "Residential",
    image: "/imgs/sittingroom.jpg",
    excerpt:
      "High-end tile layout and finishing designed to elevate a premium living space.",
    overview:
      "This project focused on upgrading a large living room with precision tile installation and clean modern detailing. The client wanted a polished look that felt luxurious while still being practical for daily family use.",
    scope: [
      "Surface preparation and leveling for long-term durability.",
      "Custom tile alignment for consistent spacing and visual symmetry.",
      "Edge finishing and joint treatment for a neat premium finish.",
    ],
    outcome:
      "The completed space achieved a refined, high-value finish with improved durability, easier maintenance, and a cohesive look across the room.",
  },
  {
    slug: "modern-office-partitioning",
    title: "Modern Office Partitioning",
    category: "Commercial",
    image: "/imgs/partitioning.jpg",
    excerpt:
      "Functional partition design that improved workflow, privacy, and natural light.",
    overview:
      "We restructured an open office floor into practical zones using modern partition systems. The goal was to create focused workspaces and meeting areas while preserving openness and visual continuity.",
    scope: [
      "Space planning for team collaboration and movement flow.",
      "Installation of clean-lined partitions with durable framing.",
      "Finishing integration to match the office interior style.",
    ],
    outcome:
      "The office now supports better productivity and clearer team organization, with improved privacy and a modern professional appearance.",
  },
  {
    slug: "terrazzo-floor-installation",
    title: "Terrazzo Floor Installation",
    category: "Flooring",
    image: "/imgs/floor.jpeg",
    excerpt:
      "Durable terrazzo flooring installation with seamless finishing and modern appeal.",
    overview:
      "This floor installation was designed for high daily traffic and long-term wear resistance. The client requested a surface that balanced elegant aesthetics with strong performance in a busy environment.",
    scope: [
      "Base preparation and substrate correction before installation.",
      "Terrazzo placement, compaction, and precision finishing.",
      "Protective sealing for longevity and maintenance efficiency.",
    ],
    outcome:
      "The final terrazzo floor delivered a sleek and resilient surface that enhances the entire space and performs reliably over time.",
  },
  {
    slug: "kitchen-renovation",
    title: "Kitchen Renovation",
    category: "Residential",
    image: "/imgs/k.jpeg",
    excerpt:
      "A full kitchen refresh focused on smarter layout, cleaner finishes, and improved usability.",
    overview:
      "This renovation transformed an outdated kitchen into a bright, efficient cooking and dining space. We combined structural updates with modern finishes to deliver both visual impact and everyday function.",
    scope: [
      "Demolition and reconstruction of key kitchen sections.",
      "Wall, floor, and backsplash finishing with coordinated materials.",
      "Final detailing for lighting, alignment, and clean transitions.",
    ],
    outcome:
      "The upgraded kitchen now feels more open and organized, with improved workflow, stronger material quality, and a contemporary finish.",
  },
  {
    slug: "bathroom-remodeling",
    title: "Bathroom Remodeling",
    category: "Residential",
    image: "/imgs/bathroom.jpg",
    excerpt:
      "Complete bathroom remodeling with moisture-resistant finishes and modern styling.",
    overview:
      "We remodeled this bathroom to improve comfort, durability, and overall aesthetics. The project required careful waterproofing, precise tile work, and coordinated finishing to produce a clean modern result.",
    scope: [
      "Waterproofing system upgrade and substrate protection.",
      "Tile installation for walls and floors with accurate joint work.",
      "Fixture-area detailing and finishing quality control.",
    ],
    outcome:
      "The remodeled bathroom is now brighter, easier to maintain, and built for long-term reliability in a moisture-heavy environment.",
  },
];

export const projectsBySlug = Object.fromEntries(
  projects.map((project) => [project.slug, project])
);
