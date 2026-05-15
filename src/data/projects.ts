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
    slug: "residential-driveway-paving",
    title: "Residential Driveway Paving",
    category: "Exterior finishing",
    image: "/Rusimo/WhatsApp Image 2026-05-15 at 6.27.07 AM.jpeg",
    excerpt:
      "Interlocking paver installation that improves arrival, drainage, and exterior polish.",
    overview:
      "This project focused on creating a cleaner, stronger driveway approach with interlocking pavers and a crisp edge condition. The long surface required practical planning around levels, drainage, and visual alignment from the gate to the main building.",
    scope: [
      "Ground preparation and level correction for long-term surface stability.",
      "Interlocking paver layout with consistent spacing and directional flow.",
      "Edge detailing around drainage channels, walls, and gate access.",
    ],
    outcome:
      "The completed entrance now feels more ordered and premium, with a durable surface that improves day-to-day access and the first impression of the property.",
  },
  {
    slug: "courtyard-paver-installation",
    title: "Courtyard Paver Installation",
    category: "Residential",
    image: "/Rusimo/WhatsApp Image 2026-05-15 at 6.27.05 AM.jpeg",
    excerpt:
      "Patterned exterior paving prepared for a stronger, more usable compound surface.",
    overview:
      "The courtyard required a hard-wearing finish that could handle movement, weather, and everyday use. Rusimo prepared the surface and installed patterned pavers to create a more practical exterior area.",
    scope: [
      "Surface grading and preparation before paver installation.",
      "Pattern planning to keep the compound visually consistent.",
      "Joint filling, edge control, and cleanup after installation.",
    ],
    outcome:
      "The compound gained a cleaner finish, better usability, and a more structured outdoor appearance.",
  },
  {
    slug: "exterior-brickwork-finishing",
    title: "Exterior Brickwork Finishing",
    category: "Masonry",
    image: "/Rusimo/WhatsApp Image 2026-05-15 at 6.27.08 AM.jpeg",
    excerpt:
      "Clean brickwork execution prepared for durable exterior finishing.",
    overview:
      "This exterior brickwork stage required careful alignment, neat openings, and preparation for the next finish layers. The work shows the structural side of Rusimo's finishing pipeline before final surface treatment.",
    scope: [
      "Brick setting and alignment around openings and wall faces.",
      "Coordination with surrounding blockwork and site constraints.",
      "Preparation for plastering, painting, and exterior detailing.",
    ],
    outcome:
      "The structure was brought to a cleaner, more organized stage for final architectural finishing.",
  },
  {
    slug: "outdoor-lounge-upgrade",
    title: "Outdoor Lounge Upgrade",
    category: "Residential",
    image: "/Rusimo/WhatsApp Image 2026-05-15 at 6.27.10 AM.jpeg",
    excerpt:
      "A compact outdoor living area upgraded with decking, planting edges, and shaded cover.",
    overview:
      "This outdoor upgrade focused on turning an underused exterior corner into a practical lounge zone. The work combines landscaping, deck surfaces, shading, and finishing details for a more inviting residential space.",
    scope: [
      "Deck and walkway surface coordination.",
      "Shade structure and seating-zone finishing.",
      "Landscape edge detailing and final site cleanup.",
    ],
    outcome:
      "The completed outdoor space feels more usable, comfortable, and visually finished for everyday home life.",
  },
  {
    slug: "facade-construction-preparation",
    title: "Facade Construction Preparation",
    category: "Construction",
    image: "/Rusimo/WhatsApp Image 2026-05-15 at 6.27.08 AM (1).jpeg",
    excerpt:
      "Multi-level exterior preparation with scaffold access for facade finishing work.",
    overview:
      "This stage captured the preparation required before a high exterior wall can receive final finishes. Scaffold access, substrate condition, and sequence planning all influence the quality of the finished facade.",
    scope: [
      "Access planning and scaffold coordination.",
      "Exterior wall inspection and preparation.",
      "Sequencing for plastering, detailing, and finishing work.",
    ],
    outcome:
      "The site was prepared for safer, cleaner, and more controlled exterior finishing at height.",
  },
];

export const projectsBySlug = Object.fromEntries(
  projects.map((project) => [project.slug, project])
);
