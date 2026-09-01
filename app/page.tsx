import LinksClient from "@/components/links-client"
import StructuredData from "@/components/structured-data"
import { breadcrumbSchema, linkItemListSchema, linksPageSchema } from "@/lib/structured-data"

export default function Page() {
  return (
    <>
      <StructuredData id="links-page-schema" data={linksPageSchema()} />
      <StructuredData id="links-itemlist-schema" data={linkItemListSchema()} />
      <StructuredData id="links-breadcrumb-schema" data={breadcrumbSchema()} />
      <LinksClient />
    </>
  )
}
