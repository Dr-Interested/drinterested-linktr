import {
  CANONICAL_LINKS_URL,
  LINKS,
  MAIN_SITE_URL,
  SAME_AS,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/site"

const LOGO_URL = `${MAIN_SITE_URL}/android-chrome-512x512.png`

/**
 * Organization node, kept in sync with lib/seo-utils.ts on the main site so the two
 * deployments describe the same entity to search engines and AI crawlers.
 */
function organizationNode() {
  return {
    "@type": "Organization",
    "@id": `${MAIN_SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: ["Dr Interested", "Doctor Interested", "Dr. Int"],
    description:
      "A youth-led global pre-med community helping students explore the vast world of healthcare, research, and advocacy.",
    url: MAIN_SITE_URL,
    logo: LOGO_URL,
    image: `${MAIN_SITE_URL}/websitebanner.jpg`,
    foundingDate: "2024",
    founder: {
      "@type": "Person",
      name: "Adil Mukhi",
      jobTitle: "Founder & Executive Director",
    },
    slogan: SITE_TAGLINE,
    sameAs: SAME_AS,
    contactPoint: [
      { "@type": "ContactPoint", contactType: "General Inquiry", email: "admin@drinterested.org" },
      { "@type": "ContactPoint", contactType: "Outreach", email: "outreach@drinterested.org" },
    ],
  }
}

/** Standalone Organization document (with @context) for the root layout. */
export function organizationSchema() {
  return { "@context": "https://schema.org", ...organizationNode() }
}

/**
 * ProfilePage describing this link-in-bio hub. It is self-canonical
 * (`mainEntityOfPage` = this URL); `relatedLink` associates the equivalent /links
 * page on the main site.
 */
export function linksPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: `Links | ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: MAIN_SITE_URL,
    },
    mainEntity: organizationNode(),
    mainEntityOfPage: SITE_URL,
    relatedLink: [CANONICAL_LINKS_URL],
    significantLink: LINKS.map((l) => l.url),
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${MAIN_SITE_URL}/websitebanner.jpg`,
    },
  }
}

/** The list of links, marked up so it can appear as a rich list result. */
export function linkItemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE_URL}/#links`,
    name: `${SITE_NAME} — Official Links`,
    description: SITE_DESCRIPTION,
    numberOfItems: LINKS.length,
    itemListElement: LINKS.map((link, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: link.title,
      description: link.description,
      url: link.url,
    })),
  }
}

export function breadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Dr. Interested", item: MAIN_SITE_URL },
      { "@type": "ListItem", position: 2, name: "Links", item: SITE_URL },
    ],
  }
}
