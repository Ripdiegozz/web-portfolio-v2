import { describe, it, expect } from "vitest";
import { seedJobExperiences } from "../../lib/seedData";

describe("Experience Component Data Layer", () => {
  it("seed data is ordered by startDate descending when sorted", () => {
    const sorted = [...seedJobExperiences].sort(
      (a, b) => b.startDate.getTime() - a.startDate.getTime()
    );
    for (let i = 0; i < sorted.length - 1; i++) {
      expect(sorted[i].startDate.getTime()).toBeGreaterThanOrEqual(
        sorted[i + 1].startDate.getTime()
      );
    }
  });

  it("each job has required fields for card rendering", () => {
    seedJobExperiences.forEach((job) => {
      expect(job.company).toBeDefined();
      expect(job.image).toBeDefined();
      expect(job.shortDescription).toBeDefined();
      expect(job.technologies).toBeDefined();
      expect(job.highlights).toBeDefined();
      expect(job.title).toBeDefined();
    });
  });

  it("image filenames are non-empty strings", () => {
    seedJobExperiences.forEach((job) => {
      expect(typeof job.image).toBe("string");
      expect(job.image.length).toBeGreaterThan(0);
    });
  });

  it("secondaryImage is either undefined or a non-empty string", () => {
    seedJobExperiences.forEach((job) => {
      if (job.secondaryImage !== undefined && job.secondaryImage !== null) {
        expect(typeof job.secondaryImage).toBe("string");
        expect(job.secondaryImage.length).toBeGreaterThan(0);
      }
    });
  });

  it("technologies array has items for each job", () => {
    seedJobExperiences.forEach((job) => {
      expect(job.technologies.length).toBeGreaterThan(0);
    });
  });

  it("highlights array has items for each job", () => {
    seedJobExperiences.forEach((job) => {
      expect(job.highlights.length).toBeGreaterThan(0);
    });
  });
});
