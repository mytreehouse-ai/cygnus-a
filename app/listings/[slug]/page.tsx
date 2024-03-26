import PropertyDetails from "@/components/listings/details";
import { env } from "@/env.mjs";

async function PropertyDetailsPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const response = await fetch(
    `${env.NEXT_PUBLIC_OPENRED_BASEAPI_URL}/properties/public/${params.slug}`,
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch property: ${params.slug} status: ${response.statusText}`,
    );
  }

  return (
    <PropertyDetails slug={params.slug} initialData={await response.json()} />
  );
}

export default PropertyDetailsPage;
