export const siteConfig = {
  business: {
    name: "Sweet Cakes Bakery",
    tagline: "Handcrafted cakes for every occasion",
    description: "Sweet Cakes Bakery has been serving Austin with handcrafted cakes, pastries, and bread since 2019. Every item is made from scratch using locally sourced ingredients.",
    phone: "(512) 555-1234",
    email: "hello@sweetcakes.nephew.app",
    address: "123 Main St, Austin, TX 78701",
    hours: "Mon-Sat 7am-6pm, Sun 8am-4pm",
    founded: "2019",
  },
  brand: {
    primaryColor: "#D4956A",
    secondaryColor: "#2D1810",
    accentColor: "#F5E6D3",
    headingFont: "Inter",
    bodyFont: "Inter",
    voice: "warm, inviting, passionate about baking",
  },
  social: { instagram: "", facebook: "", twitter: "", linkedin: "", tiktok: "", youtube: "" },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  seo: {
    defaultTitle: "Sweet Cakes Bakery | Austin TX",
    titleTemplate: "%s | Sweet Cakes Bakery",
    defaultDescription: "Sweet Cakes Bakery has been serving Austin with handcrafted cakes, pastries, and bread since 2019. Every item is made from scratch using locally sourced ingredients.",
    siteUrl: "https://test-sweet-cakes.vercel.app",
  },
  features: { booking: false, blog: true, contactForm: true, emailSubscribe: true, reviews: false },
  nephew: { tenantId: process.env.NEPHEW_TENANT_ID ?? "", apiUrl: process.env.NEPHEW_API_URL ?? "https://api.nephew.app" },
} as const;
export type SiteConfig = typeof siteConfig;
