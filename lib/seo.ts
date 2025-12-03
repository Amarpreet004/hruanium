const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://hruanium.com";

export const SITE = {
  name: "Hruanium",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Hruanium provides professional web development, UI/UX design, SEO, mobile apps, and creative digital services to grow your business.",
  sameAs: [
    "https://www.facebook.com/hruanium",
    "https://twitter.com/hruanium",
    "https://www.linkedin.com/company/hruanium",
    "https://www.instagram.com/hruanium",
  ],
  contact: {
    telephone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+1-000-000-0000",
    contactType: "Customer Service",
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@hruanium.com",
  },
};

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: SITE.logo,
    description: SITE.description,
    sameAs: SITE.sameAs,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.contact.telephone,
      contactType: SITE.contact.contactType,
      email: SITE.contact.email,
    },
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.url}/?s={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export default SITE;
