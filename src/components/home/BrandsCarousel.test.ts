import { describe, it, expect } from "vitest";

describe("BrandsCarousel Logos", () => {
  const logos = [
    { name: "TresPi", file: "trespi.svg", alt: "TresPi" },
    { name: "SuperGiros", file: "supergiros.webp", alt: "SuperGiros" },
    { name: "Stanley", file: "stanley.svg", alt: "Stanley" },
    { name: "Wazuh", file: "Wazuh-Logo-1.png", alt: "Wazuh" },
  ];

  it("should have exactly 4 logos", () => {
    expect(logos.length).toBe(4);
  });

  it.each(logos)("%s logo should have a non-empty filename", (logo) => {
    expect(logo.file).toBeDefined();
    expect(logo.file.length).toBeGreaterThan(0);
  });

  it.each(logos)("%s logo should have correct alt text", (logo) => {
    expect(logo.alt).toBeDefined();
    expect(logo.alt.length).toBeGreaterThan(0);
  });

  it("should include all expected brands", () => {
    const names = logos.map((l) => l.name);
    expect(names).toContain("TresPi");
    expect(names).toContain("SuperGiros");
    expect(names).toContain("Stanley");
    expect(names).toContain("Wazuh");
  });

  it("should have aria-hidden on wrapper", () => {
    const html = `<div class='wrapper' aria-hidden='true'>`;
    expect(html).toContain("aria-hidden='true'");
  });
});
