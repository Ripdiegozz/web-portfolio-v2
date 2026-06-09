import { describe, it, expect } from "vitest";
import { seedJobExperiences } from "../src/lib/seedData";

describe("seedJobExperiences", () => {
  it("should have at least one entry", () => {
    expect(seedJobExperiences.length).toBeGreaterThan(0);
  });

  it("should have unique ids", () => {
    const ids = seedJobExperiences.map((job) => job.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it.each(seedJobExperiences.map((job) => [job.company, job]))(
    "%s: should have required fields",
    (_company, job) => {
      expect(job.id).toBeDefined();
      expect(typeof job.id).toBe("number");
      expect(job.title).toBeDefined();
      expect(typeof job.title).toBe("string");
      expect(job.title.length).toBeGreaterThan(0);
      expect(job.company).toBeDefined();
      expect(typeof job.company).toBe("string");
      expect(job.company.length).toBeGreaterThan(0);
      expect(job.startDate).toBeDefined();
      expect(job.startDate instanceof Date).toBe(true);
      expect(job.shortDescription).toBeDefined();
      expect(typeof job.shortDescription).toBe("string");
      expect(job.description).toBeDefined();
      expect(typeof job.description).toBe("string");
      expect(job.image).toBeDefined();
      expect(typeof job.image).toBe("string");
    }
  );

  it.each(seedJobExperiences.map((job) => [job.company, job]))(
    "%s: should have valid dates",
    (_company, job) => {
      expect(job.startDate.getTime()).not.toBeNaN();
      if (job.endDate) {
        expect(job.endDate instanceof Date).toBe(true);
        expect(job.endDate.getTime()).not.toBeNaN();
        expect(job.endDate.getTime()).toBeGreaterThanOrEqual(job.startDate.getTime());
      }
    }
  );

  it.each(seedJobExperiences.map((job) => [job.company, job]))(
    "%s: technologies should have correct structure",
    (_company, job) => {
      expect(Array.isArray(job.technologies)).toBe(true);
      expect(job.technologies.length).toBeGreaterThan(0);
      job.technologies.forEach((tech: { name: string; icon: string }) => {
        expect(tech).toHaveProperty("name");
        expect(typeof tech.name).toBe("string");
        expect(tech.name.length).toBeGreaterThan(0);
        expect(tech).toHaveProperty("icon");
        expect(typeof tech.icon).toBe("string");
        expect(tech.icon.length).toBeGreaterThan(0);
      });
    }
  );

  it.each(seedJobExperiences.map((job) => [job.company, job]))(
    "%s: highlights should have correct structure",
    (_company, job) => {
      expect(Array.isArray(job.highlights)).toBe(true);
      expect(job.highlights.length).toBeGreaterThan(0);
      job.highlights.forEach((highlight: { title: string }) => {
        expect(highlight).toHaveProperty("title");
        expect(typeof highlight.title).toBe("string");
        expect(highlight.title.length).toBeGreaterThan(0);
      });
    }
  );
});
