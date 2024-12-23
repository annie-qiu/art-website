import { defineCollection, z } from 'astro:content';

const artworks = defineCollection({
  type: 'data',
  schema: ({ image }) => z.object({
    text: z.string(),
    image: image(),
    year: z.number(),
  })
});


export const collections = { artworks };