import { defineCollection, z } from 'astro:content';

const artworks = defineCollection({
  type: 'data',
  schema: ({ image }) => z.object({
    title: z.string(),
    text: z.string(),
    image: image(),
    year: z.string(),
    sortOrder: z.number(),
    hidden: z.boolean().optional(),
  })
});


const printworks = defineCollection({
  type: 'data',
  schema: ({ image }) => z.object({
    text: z.string(),
    image: image(),
    size: z.string().optional(),
    sortOrder: z.number(),
  })
});


export const collections = { artworks, printworks };