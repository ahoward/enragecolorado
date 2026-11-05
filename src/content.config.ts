import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// The file-based CMS: every assessment is a markdown file in src/content/assessments/.
// Add a file, open a PR -> the monument grows. Files beginning with _ are ignored (drafts).
const assessments = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/assessments' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    // who wrote it — a handle, not a legal name, is fine. The record is collective.
    author: z.string().default('the public record'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { assessments };
