import { db, JobExperience } from "astro:db";
import { desc } from "astro:db";

export async function getJobExperiences() {
  return await db.select().from(JobExperience).orderBy(desc(JobExperience.startDate));
}
