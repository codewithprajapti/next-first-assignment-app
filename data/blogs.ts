export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
  comments: number;
  views: number;
};

export const blogs: BlogPost[] = [
  {
    id: 1,
    slug: "shopify-saudi-national-address",
    title: "Shopify + Saudi National Short Address",
    description:
      "Attention Shopify Developers, Agencies & Saudi E-commerce Brands Saudi Arabia’s new address system is now live.",
    date: "15 Jan, 2026",
    image: "https://picsum.photos/seed/blog1/800/500",
    comments: 0,
    views: 1659,
  },
  {
    id: 2,
    slug: "nextjs-performance-tips",
    title: "Next.js Performance Optimization Tips",
    description:
      "Learn practical techniques to improve performance and Core Web Vitals in Next.js apps.",
    date: "14 Jan, 2026",
    image: "https://picsum.photos/seed/blog2/800/500",
    comments: 4,
    views: 982,
  },
  {
    id: 3,
    slug: "tailwind-productivity",
    title: "How Tailwind Improves Developer Productivity",
    description:
      "A deep dive into utility-first CSS and how it speeds up modern UI development.",
    date: "13 Jan, 2026",
    image: "https://picsum.photos/seed/blog3/800/500",
    comments: 2,
    views: 740,
  },
  {
    id: 4,
    slug: "react-folder-structure",
    title: "Best Folder Structure for React Projects",
    description:
      "Organizing large React applications for scalability and maintainability.",
    date: "12 Jan, 2026",
    image: "https://picsum.photos/seed/blog4/800/500",
    comments: 6,
    views: 1210,
  },
  {
    id: 5,
    slug: "git-branching-guide",
    title: "Git Branching Strategy Guide",
    description:
      "Understanding feature branches, staging, and production workflows used in real teams.",
    date: "11 Jan, 2026",
    image: "https://picsum.photos/seed/blog5/800/500",
    comments: 1,
    views: 530,
  },
  {
    id: 6,
    slug: "docker-for-web-dev",
    title: "Docker Basics for Web Developers",
    description:
      "Learn how Docker helps in creating consistent development environments.",
    date: "10 Jan, 2026",
    image: "https://picsum.photos/seed/blog6/800/500",
    comments: 3,
    views: 889,
  },
  {
    id: 7,
    slug: "seo-checklist-2026",
    title: "SEO Checklist for Modern Websites",
    description:
      "A practical SEO checklist developers should follow when building web apps.",
    date: "09 Jan, 2026",
    image: "https://picsum.photos/seed/blog7/800/500",
    comments: 5,
    views: 1430,
  },
  {
    id: 8,
    slug: "responsive-ui-principles",
    title: "Responsive UI Design Principles",
    description:
      "Design layouts that look great on mobile, tablet, and desktop devices.",
    date: "08 Jan, 2026",
    image: "https://picsum.photos/seed/blog8/800/500",
    comments: 2,
    views: 615,
  },
  {
    id: 9,
    slug: "supabase-auth-guide",
    title: "Supabase Authentication Guide",
    description: "Implement authentication in modern web apps using Supabase.",
    date: "07 Jan, 2026",
    image: "https://picsum.photos/seed/blog9/800/500",
    comments: 7,
    views: 1590,
  },
  {
    id: 10,
    slug: "express-api-best-practices",
    title: "Express API Best Practices",
    description:
      "Write secure and scalable APIs using Express.js and middleware patterns.",
    date: "06 Jan, 2026",
    image: "https://picsum.photos/seed/blog10/800/500",
    comments: 3,
    views: 970,
  },
  {
    id: 11,
    slug: "typescript-clean-code",
    title: "Writing Clean Code with TypeScript",
    description:
      "Tips to improve code readability and maintainability in large projects.",
    date: "05 Jan, 2026",
    image: "https://picsum.photos/seed/blog11/800/500",
    comments: 4,
    views: 880,
  },
  {
    id: 12,
    slug: "nextjs-routing-guide",
    title: "Next.js App Router Explained",
    description:
      "Understanding layouts, nested routes, and server components in Next.js.",
    date: "04 Jan, 2026",
    image: "https://picsum.photos/seed/blog12/800/500",
    comments: 6,
    views: 1505,
  },
];
