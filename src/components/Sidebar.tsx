import { Link, useLocation } from "react-router-dom";
import { Terminal, Search, Bell, Layers } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
export default function Sidebar() {
    const loc = useLocation();
    const links = [
        { to: "/", icon: Terminal, label: "Live Stream" },
        { to: "/query", icon: Search, label: "Query Builder" },
        { to: "/alerts", icon: Bell, label: "Alerts" },
        { to: "/apps", icon: Layers, label: "Applications" }
    ];
    return (<aside style={{ width: "var(--sidebar-width)", background: "var(--color-bg-secondary)", borderRight: "1px solid var(--color-border)", height: "100vh", position: "fixed", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "var(--space-6)", display: "flex", alignItems: "center", gap: "var(--space-3)", borderBottom: "1px solid var(--color-border)" }}>
            <div style={{ color: "var(--color-accent-primary)" }}><Terminal size={22} strokeWidth={2.5} /></div>
            <strong style={{ fontSize: "1.1rem", fontWeight: 700, letterSpacing: "-0.5px" }}>LogLens</strong>
            <span style={{ fontSize: "10px", fontWeight: 700, background: "var(--color-accent-soft)", color: "var(--color-accent-primary)", padding: "2px 6px", borderRadius: 3, marginLeft: "auto" }}>LIVE</span>
        </div>
        <nav style={{ padding: "var(--space-4)", flex: 1, display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
            {links.map(l => <Link key={l.to} to={l.to} style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", padding: "var(--space-2) var(--space-3)", borderRadius: "var(--radius-sm)", color: loc.pathname === l.to ? "var(--color-accent-primary)" : "var(--color-text-secondary)", background: loc.pathname === l.to ? "var(--color-accent-soft)" : "transparent", fontWeight: loc.pathname === l.to ? 600 : 500, fontSize: "14px", transition: "all var(--transition-fast)", fontFamily: loc.pathname === l.to ? "var(--font-mono)" : "inherit" }}><l.icon size={18} />{l.label}</Link>)}
        </nav>
        <div style={{ padding: "var(--space-4)", borderTop: "1px solid var(--color-border)", display: "flex", justifyContent: "flex-end" }}><ThemeToggle /></div>
    </aside>);
}
