import { SanityClient, createClient } from "@sanity/client";
import urlBuilder from "@sanity/image-url";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import dotenv from 'dotenv';

dotenv.config();

export const sanityClient: SanityClient = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKE
});

const builder: ImageUrlBuilder = urlBuilder(sanityClient);

export const urlFor = (source: string): ImageUrlBuilder | string => builder.image(source);

export const sanityQuery = (queryType: string): string => `*[_type == "${queryType}"]`