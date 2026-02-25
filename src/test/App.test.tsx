import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import LiveStreamPage from "../pages/LiveStreamPage";
import QueryBuilderPage from "../pages/QueryBuilderPage";
import AlertsPage from "../pages/AlertsPage";

function wrap(ui: React.ReactElement) { return render(<MemoryRouter>{ui}</MemoryRouter>); }

describe("Pages", () => {
    it("Sidebar renders", () => { wrap(<Sidebar />); expect(screen.getByText("LogLens")).toBeInTheDocument(); });
    it("LiveStreamPage renders", () => { wrap(<LiveStreamPage />); expect(screen.getByText("Live Stream")).toBeInTheDocument(); });
    it("QueryBuilderPage renders", () => { wrap(<QueryBuilderPage />); expect(screen.getByText("Query Builder")).toBeInTheDocument(); });
    it("AlertsPage renders", () => { wrap(<AlertsPage />); expect(screen.getByText("Alert Rules")).toBeInTheDocument(); });
});
