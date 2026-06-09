import { describe, it, expect } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import JobInfoModal from "./work-info-modal";
import type { Technology } from "../../types/technology";
import type { Highlight } from "../../types/highlight";

const mockTechStack: Technology[] = [
  { name: "Node.js", icon: "nodejs" },
  { name: "React", icon: "react" },
];

const mockHighlights: Highlight[] = [
  { title: "Built an awesome feature" },
  { title: "Improved performance by 50%" },
];

const mockProps = {
  jobTitle: "Full Stack Developer",
  jobCompany: "TestCorp",
  startDate: new Date("2023-01-01"),
  endDate: new Date("2024-01-01"),
  highlights: mockHighlights,
  jobDescription: "Worked on amazing projects at TestCorp.",
  techStack: mockTechStack,
};

describe("JobInfoModal", () => {
  it("renders the 'See more' button", () => {
    render(<JobInfoModal {...mockProps} />);
    expect(screen.getByRole("button", { name: /see more/i })).toBeInTheDocument();
  });

  it("opens modal when 'See more' is clicked", () => {
    render(<JobInfoModal {...mockProps} />);
    fireEvent.click(screen.getByRole("button", { name: /see more/i }));
    expect(screen.getByRole("heading", { name: /Full Stack Developer at TestCorp/i })).toBeInTheDocument();
  });

  it("renders job title and company in modal", () => {
    render(<JobInfoModal {...mockProps} />);
    fireEvent.click(screen.getByRole("button", { name: /see more/i }));
    expect(screen.getByRole("heading", { name: /Full Stack Developer at TestCorp/i })).toBeInTheDocument();
  });

  it("renders date range in modal", () => {
    render(<JobInfoModal {...mockProps} />);
    fireEvent.click(screen.getByRole("button", { name: /see more/i }));
    expect(screen.getByText(/Date:/)).toBeInTheDocument();
  });

  it("renders 'Present' when endDate is null", () => {
    render(<JobInfoModal {...mockProps} endDate={null} />);
    fireEvent.click(screen.getByRole("button", { name: /see more/i }));
    expect(screen.getByText(/Present/)).toBeInTheDocument();
  });

  it("renders tech stack icons in modal", () => {
    render(<JobInfoModal {...mockProps} />);
    fireEvent.click(screen.getByRole("button", { name: /see more/i }));
    expect(screen.getByAltText("Node.js")).toBeInTheDocument();
    expect(screen.getByAltText("React")).toBeInTheDocument();
  });

  it("renders highlights in modal", () => {
    render(<JobInfoModal {...mockProps} />);
    fireEvent.click(screen.getByRole("button", { name: /see more/i }));
    expect(screen.getByText("Built an awesome feature")).toBeInTheDocument();
    expect(screen.getByText("Improved performance by 50%")).toBeInTheDocument();
  });

  it("closes modal when close button is clicked", async () => {
    render(<JobInfoModal {...mockProps} />);
    fireEvent.click(screen.getByRole("button", { name: /see more/i }));
    const closeButton = screen.getByRole("button", { name: "" });
    fireEvent.click(closeButton);
    await waitFor(() => {
      expect(screen.queryByRole("heading", { name: /Full Stack Developer at TestCorp/i })).not.toBeInTheDocument();
    });
  });

  it("renders job description in modal", () => {
    render(<JobInfoModal {...mockProps} />);
    fireEvent.click(screen.getByRole("button", { name: /see more/i }));
    expect(screen.getByText(/Worked on amazing projects at TestCorp./)).toBeInTheDocument();
  });
});
