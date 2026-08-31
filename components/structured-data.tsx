interface StructuredDataProps {
  id: string
  data: object
}

/**
 * Renders a JSON-LD block. Uses a plain <script> (not next/script) — this is the
 * approach Next.js recommends for structured data and it works inside Server
 * Components without the `beforeInteractive` placement constraints.
 */
export default function StructuredData({ id, data }: StructuredDataProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  )
}
