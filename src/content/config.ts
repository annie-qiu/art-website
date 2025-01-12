import { defineCollection, z } from 'astro:content';

const artworks = defineCollection({
  type: 'data',
  schema: ({ image }) => z.object({
    text: z.string(),
    image: image(),
    year: z.string(),
  })
});


const printworks = defineCollection({
  type: 'data',
  schema: ({ image }) => z.object({
    text: z.string(),
    image: image(),
    size: z.string().optional(),
  })
});


export const collections = { artworks, printworks };