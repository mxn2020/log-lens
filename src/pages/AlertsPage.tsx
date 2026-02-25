import { Bell, Plus, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";

export default function AlertsPage() {
    const alerts = [
        { id: "1", name: "Error Rate Spike", condition: 'COUNT(level:ERROR) > 50 in 5m', channel: "Slack #ops", status: "active", triggered: "Never" },
        { id: "2", name: "Auth Service Down", condition: 'COUNT(app:auth-svc AND level:FATAL) > 0 in 1m', channel: "PagerDuty", status: "triggered", triggered: "2 mins ago" },
        { id: "3", name: "High Latency", condition: 'AVG(duration) > 500ms in 10m', channel: "Email", status: "active", triggered: "3 hours ago" },
        { id: "4", name: "Queue Overflow", condition: 'ANY(msg:*exceeding*) in 5m', channel: "Slack #ops", status: "muted", triggered: "1 day ago" }
    ];

    return (<div style={{ padding: "var(--space-6)", maxWidth: 1000 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700, display: "flex", alignItems: "center", gap: "var(--space-2)" }}><Bell /> Alert Rules</h1>
            <button className="btn btn-primary"><Plus size={16} /> New Alert</button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            {alerts.map(a => (
                <div key={a.id} className="card" style={{ padding: "var(--space-5)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "var(--space-3)" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                            {a.status === "triggered" ? <AlertTriangle size={18} style={{ color: "var(--color-danger)" }} /> : a.status === "muted" ? <XCircle size={18} style={{ color: "var(--color-text-tertiary)" }} /> : <CheckCircle2 size={18} style={{ color: "var(--color-success)" }} />}
                            <div>
                                <h3 style={{ fontWeight: 600, fontSize: "16px" }}>{a.name}</h3>
                                <code className="mono" style={{ color: "var(--color-text-secondary)", fontSize: "12px" }}>{a.condition}</code>
                            </div>
                        </div>
                        <span style={{ fontSize: "11px", fontWeight: 700, padding: "2px 8px", borderRadius: 4, textTransform: "uppercase", background: a.status === "triggered" ? "rgba(239,68,68,0.15)" : a.status === "muted" ? "var(--color-bg-tertiary)" : "rgba(34,197,94,0.1)", color: a.status === "triggered" ? "var(--color-danger)" : a.status === "muted" ? "var(--color-text-tertiary)" : "var(--color-success)" }}>{a.status}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", color: "var(--color-text-secondary)", paddingTop: "var(--space-3)", borderTop: "1px solid var(--color-border)" }}>
                        <span>Channel: <strong>{a.channel}</strong></span>
                        <span>Last triggered: {a.triggered}</span>
                    </div>
                </div>
            ))}
        </div>
    </div>);
}
