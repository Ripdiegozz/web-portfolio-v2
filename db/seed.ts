import { db, JobExperience } from "astro:db";
import { seedJobExperiences } from "../src/lib/seedData";

export default async function () {
  console.info("Seeding the database...");

  await db.insert(JobExperience).values(seedJobExperiences);

  console.info("Database seeded!");
}
