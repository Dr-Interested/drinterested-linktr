/**
 * Central config for the standalone Dr. Interested link-in-bio site (link.drinterested.org).
 *
 * This is the PRIMARY link-in-bio URL — the short, memorable handle we put in social-media
 * bios — and it is self-canonical. It is tied to the main website as a single entity through
 * the shared Organization schema: the main site's lib/seo-utils.ts lists
 * https://link.drinterested.org in both `sameAs` and `hasPart`. The near-identical /links page
 * on the main site stays self-canonical too; search engines treat them as one property.
 */

export const SITE_URL = "https://link.drinterested.org"

/**
 * The equivalent page on the main site — referenced from structured data, NOT used as
 * rel=canonical.
 */
export const CANONICAL_LINKS_URL = "https://www.drinterested.org/links"

export const MAIN_SITE_URL = "https://www.drinterested.org"

export const SITE_NAME = "Dr. Interested"

export const SITE_TAGLINE = "Inspiring the Next Generation of Healthcare Professionals"

export const SITE_DESCRIPTION =
  "Every Dr. Interested link in one place — join our Discord, follow us on Instagram, LinkedIn and YouTube, listen to our podcast on Spotify, read our publications, meet the team, and explore programs that help students find their spark in medicine."

export const OG_IMAGE = `${MAIN_SITE_URL}/websitebanner.jpg`

export interface LinkItem {
  title: string
  /** Optional supporting line shown under the title. */
  description?: string
  url: string
  /** lucide-react icon name or "discord" / "spotify" for the custom SVGs. */
  icon:
    | "globe"
    | "discord"
    | "instagram"
    | "linkedin"
    | "youtube"
    | "music"
    | "spotify"
    | "shopping-bag"
    | "calendar"
    | "book-open"
    | "users"
    | "mail"
    | "file-text"
    | "newspaper"
  /** Tailwind classes for the button background. */
  color: string
  /** true when this is a primary/featured link. */
  featured?: boolean
}

/**
 * Mirrors components/links/links-client.tsx on the main site, with every internal
 * route rewritten to an absolute www.drinterested.org URL (this is a separate deploy)
 * and a few additions: the website itself, the newsletter, and the impact report.
 */
export const LINKS: LinkItem[] = [
  {
    title: "Visit drinterested.org",
    description: "Programs, publications, events and volunteer opportunities",
    url: "https://www.drinterested.org",
    icon: "globe",
    color: "bg-[#405862] hover:bg-[#334852]",
    featured: true,
  },
  {
    title: "Join Our Discord Community",
    description: "1,400+ students exploring healthcare together",
    url: "https://discord.gg/pzbGRgsGXY",
    icon: "discord",
    color: "bg-[#5865F2] hover:bg-[#4752C4]",
    featured: true,
  },
  {
    title: "Follow Us on Instagram",
    url: "https://www.instagram.com/dr.interested/",
    icon: "instagram",
    color:
      "bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:from-[#e9be24] hover:via-[#de1a6b] hover:to-[#5218c7]",
  },
  {
    title: "Connect on LinkedIn",
    url: "https://www.linkedin.com/company/dr-interested",
    icon: "linkedin",
    color: "bg-[#0077B5] hover:bg-[#006699]",
  },
  {
    title: "Subscribe on YouTube",
    url: "https://www.youtube.com/@Dr.Interested",
    icon: "youtube",
    color: "bg-[#FF0000] hover:bg-[#CC0000]",
  },
  {
    title: "Listen on Spotify",
    description: "The Dr. Interested Podcast",
    url: "https://open.spotify.com/show/6SLlRUL6co6fPxckAdrigf",
    icon: "spotify",
    color: "bg-[#1DB954] hover:bg-[#1AA34A]",
  },
  {
    title: "Listen on YouTube Music",
    url: "https://music.youtube.com/playlist?list=PLhgtIQtU24W2axj8qIfCS-j1idk6LbCF4",
    icon: "music",
    color: "bg-[#4285F4] hover:bg-[#3367D6]",
  },
  {
    title: "Read Our Newsletter",
    url: "https://news.drinterested.org",
    icon: "newspaper",
    color: "bg-[#0EA5E9] hover:bg-[#0284C7]",
  },
  {
    title: "Shop Our Merch",
    url: "https://www.teepublic.com/user/dr-interested",
    icon: "shopping-bag",
    color: "bg-[#374151] hover:bg-[#1F2937]",
  },
  {
    title: "Upcoming Events",
    url: "https://www.drinterested.org/events",
    icon: "calendar",
    color: "bg-[#4ecdc4] hover:bg-[#3dbdb5]",
  },
  {
    title: "Read Our Publications",
    description: "Blog, op-eds, podcasts, webinars and policy",
    url: "https://www.drinterested.org/publications",
    icon: "book-open",
    color: "bg-[#405862] hover:bg-[#334852]",
  },
  {
    title: "Meet Our Team",
    url: "https://www.drinterested.org/members",
    icon: "users",
    color: "bg-[#8B5CF6] hover:bg-[#7C3AED]",
  },
  {
    title: "2025 Annual Impact Report",
    description: "160,000+ youth impacted across 106 countries",
    url: "https://impact.drinterested.org/2025/annual",
    icon: "file-text",
    color: "bg-[#6366F1] hover:bg-[#4F46E5]",
  },
  {
    title: "Contact Us",
    url: "https://www.drinterested.org/contact",
    icon: "mail",
    color: "bg-[#EC4899] hover:bg-[#DB2777]",
  },
]

/** Footer policy / legal links — all live on the main site. */
export const POLICY_LINKS: { label: string; url: string }[] = [
  { label: "Privacy", url: "https://www.drinterested.org/privacy-policy" },
  { label: "Terms", url: "https://www.drinterested.org/terms" },
  { label: "AI Policy", url: "https://www.drinterested.org/ai-policy" },
  { label: "Safeguarding Policy", url: "https://www.drinterested.org/safeguarding-policy" },
  { label: "Media Consent", url: "https://www.drinterested.org/media-consent" },
]

/** Every official Dr. Interested profile — used for the Organization `sameAs`. */
export const SAME_AS: string[] = [
  "https://www.instagram.com/dr.interested/",
  "https://www.linkedin.com/company/dr-interested/",
  "https://www.youtube.com/@Dr.Interested",
  "https://open.spotify.com/show/6SLlRUL6co6fPxckAdrigf",
  "https://discord.gg/pzbGRgsGXY",
  "https://www.facebook.com/profile.php?id=61572438387454",
  "https://www.threads.com/@dr.interested",
  "https://bsky.app/profile/drinterested.org",
  "https://x.com/Dr_Interested_",
  "https://www.tiktok.com/@dr.interested",
  "https://mastodon.social/@drinterested",
  "https://www.teepublic.com/user/dr-interested",
  "https://news.impact.drinterested.org/",
]
