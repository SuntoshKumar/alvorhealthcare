import { beforeEach, describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardTitle } from "@/components/ui/Card";
import { ImportantNotices, type ImportantNoticeContent } from "@/components/home/ImportantNotice";

const notice: ImportantNoticeContent = {
  enabled: true,
  id: "test-notice",
  priority: "medium",
  title: "Product availability",
  message: "Contact our distribution team.",
  cta: { label: "Contact us", href: "/contact" },
  dismissible: true,
};

const storageItems = new Map<string, string>();
const localStorageStub: Storage = {
  get length() {
    return storageItems.size;
  },
  clear: () => storageItems.clear(),
  getItem: (key) => storageItems.get(key) ?? null,
  key: (index) => Array.from(storageItems.keys())[index] ?? null,
  removeItem: (key) => storageItems.delete(key),
  setItem: (key, value) => storageItems.set(key, value),
};

Object.defineProperty(window, "localStorage", {
  configurable: true,
  value: localStorageStub,
});

beforeEach(() => {
  window.localStorage.clear();
});

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

describe("ImportantNotice", () => {
  it("renders its message and action", () => {
    render(<ImportantNotices notices={[notice]} />);

    expect(screen.getByText(notice.message)).toBeDefined();
    expect(screen.getByRole("link", { name: "Contact us" }).getAttribute("href")).toBe("/contact");
    expect(screen.getByText("medium priority")).toBeDefined();
  });

  it("remembers when the notice is dismissed", async () => {
    const user = userEvent.setup();
    const view = render(<ImportantNotices notices={[notice]} />);

    await user.click(screen.getByRole("button", { name: "Dismiss Product availability notice" }));
    await waitFor(() => expect(screen.queryByText(notice.message)).toBeNull());

    view.unmount();
    render(<ImportantNotices notices={[notice]} />);

    await waitFor(() => expect(screen.queryByText(notice.message)).toBeNull());
  });

  it("renders nothing when the JSON enabled flag is false", () => {
    render(<ImportantNotices notices={[{ ...notice, enabled: false }]} />);

    expect(screen.queryByText(notice.message)).toBeNull();
  });

  it("shows multiple active notices one at a time with higher priorities first", async () => {
    const user = userEvent.setup();
    const criticalNotice = {
      ...notice,
      id: "critical-notice",
      priority: "critical" as const,
      title: "Urgent notice",
      message: "A critical operational message.",
    };

    render(<ImportantNotices notices={[notice, criticalNotice]} autoPlay={false} />);

    expect(screen.getByText(criticalNotice.message)).toBeDefined();
    expect(screen.queryByText(notice.message)).toBeNull();
    expect(screen.getByText("1/2")).toBeDefined();

    await user.click(screen.getByRole("button", { name: "Next notification" }));

    await waitFor(() => expect(screen.getByText(notice.message)).toBeDefined());
    expect(screen.queryByText(criticalNotice.message)).toBeNull();
    expect(screen.getByText("2/2")).toBeDefined();
  });

  it("automatically advances after the configured delay", async () => {
    const criticalNotice = {
      ...notice,
      id: "automatic-critical-notice",
      priority: "critical" as const,
      title: "Urgent notice",
      message: "An automatically rotating message.",
    };

    render(
      <ImportantNotices
        notices={[notice, criticalNotice]}
        autoPlay
        intervalSeconds={0.5}
      />
    );

    expect(screen.getByText(criticalNotice.message)).toBeDefined();
    await waitFor(() => expect(screen.getByText(notice.message)).toBeDefined(), { timeout: 2000 });
    expect(screen.queryByText(criticalNotice.message)).toBeNull();
  });

  it("lets visitors pause and resume automatic rotation", async () => {
    const user = userEvent.setup();
    const secondNotice = {
      ...notice,
      id: "second-notice",
      title: "Second notice",
      message: "Another message.",
    };

    render(<ImportantNotices notices={[notice, secondNotice]} autoPlay />);

    await user.click(screen.getByRole("button", { name: "Pause automatic notifications" }));
    expect(screen.getByRole("button", { name: "Resume automatic notifications" })).toBeDefined();
  });
});
