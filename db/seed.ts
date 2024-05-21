import { Prompt, Story, db } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	// TODO
	await db.insert(Prompt).values([
		{
			name: "First prompt",
			description: "This is the first prompt that is available in the list",

		}
	]),
	await db.insert(Story).values([
		{
			title: "The story of the First Prompt",
			story: "A long time ago, this character did a lot of thigns with a lot of different prompts",
			promptId: 1,

		},
		{
			title: "Second story of the First Prompt",
			story: "A long time ago, this character did a lot of thigns with a lot of different prompts",
			promptId: 1,

		}
	])
}
