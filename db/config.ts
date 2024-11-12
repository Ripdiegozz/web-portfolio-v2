import { column, defineTable } from "astro:db";
import { defineDb } from "astro:db";

const JobExperience = defineTable({
  columns: {
    id: column.number({
      primaryKey: true,
      autoIncrement: true,
    }),
    title: column.text(),
    company: column.text(),
    startDate: column.date(),
    endDate: column.date({
      optional: true,
    }),
    shortDescription: column.text(),
    image: column.text(),
    highlights: column.json({
      default: [],
    }),
    description: column.text(),
    technologies: column.json({
      default: [],
    }),
  },
});

export default defineDb({
  tables: {
    JobExperience,
  },
});
