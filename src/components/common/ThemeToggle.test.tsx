import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ThemeToggle from "./ThemeToggle";

describe("ThemeToggle", () => {
  let getItemSpy: ReturnType<typeof vi.spyOn>;
  let setItemSpy: ReturnType<typeof vi.spyOn>;
  let originalMatchMedia: typeof window.matchMedia;

  beforeEach(() => {
    document.documentElement.setAttribute("data-theme", "light");
    getItemSpy = vi.spyOn(Storage.prototype, "getItem").mockReturnValue(null);
    setItemSpy = vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {});
    originalMatchMedia = window.matchMedia;
    window.matchMedia = vi.fn((query) => ({
      matches: query === "(prefers-color-scheme: dark)",
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })) as unknown as typeof window.matchMedia;
  });

  afterEach(() => {
    vi.restoreAllMocks();
    window.matchMedia = originalMatchMedia;
  });

  it("renders a toggle button", () => {
    render(<ThemeToggle />);
    expect(screen.getByRole("button", { name: /toggle theme/i })).toBeInTheDocument();
  });

  it("defaults to system preference when no saved theme exists", () => {
    render(<ThemeToggle />);
    expect(window.matchMedia).toHaveBeenCalledWith("(prefers-color-scheme: dark)");
  });

  it("toggles data-theme attribute on click", () => {
    render(<ThemeToggle />);
    const button = screen.getByRole("button", { name: /toggle theme/i });
    const initialTheme = document.documentElement.getAttribute("data-theme");
    fireEvent.click(button);
    const newTheme = document.documentElement.getAttribute("data-theme");
    expect(newTheme).not.toBe(initialTheme);
  });

  it("saves theme to localStorage on toggle", () => {
    render(<ThemeToggle />);
    const button = screen.getByRole("button", { name: /toggle theme/i });
    fireEvent.click(button);
    expect(setItemSpy).toHaveBeenCalledWith("theme", expect.any(String));
  });

  it("reads theme from localStorage on mount", () => {
    getItemSpy.mockReturnValue("dark");
    render(<ThemeToggle />);
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
  });
});
