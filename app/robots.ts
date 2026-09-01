import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // Explicitly welcome search + AI answer engines so this hub (and the canonical
      // /links page it points to) is discoverable in classic search and LLM answers.
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "DuckDuckBot",
          "Yandex",
          "Slurp",
          "Applebot",
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-SearchBot",
          "PerplexityBot",
          "Google-Extended",
          "Amazonbot",
          "meta-externalagent",
        ],
        allow: "/",
      },
    ],
    sitemap: [
      `${SITE_URL}/sitemap.xml`,
      "https://www.drinterested.org/sitemap.xml",
    ],
    host: SITE_URL,
  }
}
