import "server-only";

import { defineLive } from "next-sanity";
// Update the import path below if your client file is located elsewhere
import { client } from "@/sanity/lib/client";
export const { sanityFetch, SanityLive } = defineLive({ client });
