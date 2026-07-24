import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardTitle } from "@/components/ui/Card";

describe("Button", () => {
  it("renders with text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeDefined();
  });

  it("applies variant classes", () => {
    render(<Button variant="primary">Primary</Button>);
    const btn = screen.getByRole("button");
    expect(btn.className).toContain("btn");
  });
});

describe("Badge", () => {
  it("renders badge text", () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText("New")).toBeDefined();
  });
});

describe("Card", () => {
  it("renders card with content", () => {
    render(
      <Card>
        <CardTitle>Test Title</CardTitle>
        <CardContent>Test content</CardContent>
      </Card>
    );
    expect(screen.getByText("Test Title")).toBeDefined();
    expect(screen.getByText("Test content")).toBeDefined();
  });
});
