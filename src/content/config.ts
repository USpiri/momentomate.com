import { z, defineCollection } from "astro:content";

const mainShema = z.object({
  title: z.string(),
  pubDate: z.date(),
  description: z.string(),
  tags: z.array(z.string()),
  image: z.string().optional(),
});

const mainCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: mainShema,
});

export const collections = {
  podcast: mainCollection,
  resource: mainCollection,
};

export const collectionMetadata = [
  {
    name: "podcast",
  },
  {
    name: "resource",
  },
];
