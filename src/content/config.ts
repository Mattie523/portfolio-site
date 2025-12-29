import { defineCollection, z } from 'astro:content';

const photosCollection = defineCollection({
	type: 'data',
	schema: z.array(z.object({
		filename: z.string(),
		slug: z.string(),
		alt: z.string().optional(),
		category: z.enum(['portraits', 'general']),
		order: z.number(),
	})),
});

const videosCollection = defineCollection({
	type: 'data',
	schema: z.array(z.object({
		type: z.enum(['local', 'youtube', 'vimeo']),
		title: z.string(),
		slug: z.string(),
		role: z.string().optional(), // Your role on the video (e.g., "Cinematographer", "Editor")
		// For local videos
		filename: z.string().optional(),
		poster: z.string().optional(), // thumbnail image
		// For YouTube/Vimeo
		videoId: z.string().optional(),
		category: z.string().optional(),
		date: z.string().optional(),
		order: z.number(),
	})),
});

export const collections = {
	photos: photosCollection,
	videos: videosCollection,
};
