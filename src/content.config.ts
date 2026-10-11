import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.coerce.date(),
    checked: z.coerce.date(),
    readMinutes: z.number(),
    image: z.enum(['pullsFerry', 'skyline', 'elmHill', 'broads', 'letter', 'writing']),
    sources: z.array(z.object({ label: z.string(), url: z.string().url() })),
  }),
});

export const collections = { blog };
