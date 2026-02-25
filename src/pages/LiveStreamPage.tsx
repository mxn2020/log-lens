import { Pause, Play, Search, Filter } from "lucide-react";

const logs = [
    { ts: "12:45:01.234", level: "INFO", app: "api-server", msg: "GET /api/v1/users 200 OK (12ms)" },
    { ts: "12:45:01.456", level: "DEBUG", app: "api-server", msg: "Cache hit: user:1234 freshness=98%" },
    { ts: "12:45:02.100", level: "WARN", app: "worker", msg: "Queue depth exceeding threshold: 847/1000 jobs pending" },
    { ts: "12:45:02.891", level: "ERROR", app: "auth-svc", msg: "Failed to verify JWT: TokenExpiredError — token expired at 12:44:59" },
    { ts: "12:45:03.012", level: "INFO", app: "api-server", msg: "POST /api/v1/sessions 201 Created (45ms)" },
    { ts: "12:45:03.220", level: "INFO", app: "cron", msg: "Running scheduled task: cleanup-expired-tokens" },
    { ts: "12:45:03.891", level: "DEBUG", app: "worker", msg: "Processing job #29481: email.send -> user@example.com" },
    { ts: "12:45:04.123", level: "INFO", app: "api-server", msg: "GET /api/v1/health 200 OK (2ms)" },
    { ts: "12:45:04.550", level: "ERROR", app: "worker", msg: "Job #29478 failed: SMTP connection timeout after 30000ms" },
    { ts: "12:45:05.001", level: "FATAL", app: "auth-svc", msg: "Redis connection lost — retrying in 5s (attempt 3/10)" },
    { ts: "12:45:05.234", level: "INFO", app: "api-server", msg: "GET /api/v1/projects?limit=20 200 OK (89ms)" },
    { ts: "12:45:06.100", level: "WARN", app: "cron", msg: "Task cleanup-expired-tokens took 2.8s (threshold: 2s)" },
];

const levelColors: Record<string, string> = { DEBUG: "var(--log-debug)", INFO: "var(--log-info)", WARN: "var(--log-warn)", ERROR: "var(--log-error)", FATAL: "var(--log-fatal)" };

export default function LiveStreamPage() {
    return (<div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <div style={{ padding: "var(--space-4) var(--space-6)", borderBottom: "1px solid var(--color-border)", display: "flex", justifyContent: "space-between", alignItems: "center", background: "var(--color-bg-secondary)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                <h1 style={{ fontSize: "var(--font-size-lg)", fontWeight: 700 }}>Live Stream</h1>
                <span style={{ fontSize: "11px", fontWeight: 700, fontFamily: "var(--font-mono)", color: "var(--color-accent-primary)", display: "flex", alignItems: "center", gap: 4 }}><span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-accent-primary)", animation: "blink 1s infinite" }}></span> Streaming</span>
            </div>
            <div style={{ display: "flex", gap: "var(--space-2)" }}>
                <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                    <Search size={14} style={{ position: "absolute", left: 10, color: "var(--color-text-tertiary)" }} />
                    <input type="text" placeholder="Search logs..." style={{ padding: "6px 12px 6px 32px", borderRadius: "var(--radius-sm)", border: "1px solid var(--color-border)", background: "var(--color-bg-primary)", color: "var(--color-text-primary)", fontFamily: "var(--font-mono)", fontSize: "12px", width: 280 }} />
                </div>
                <button className="btn btn-sm"><Filter size={14} /> Level</button>
                <button className="btn btn-sm"><Pause size={14} /> Pause</button>
            </div>
        </div>

        <div style={{ flex: 1, overflow: "auto", background: "var(--color-bg-primary)" }}>
            {logs.map((log, i) => (
                <div key={i} className="log-line">
                    <span style={{ color: "var(--color-text-tertiary)", minWidth: 100, flexShrink: 0 }}>{log.ts}</span>
                    <span style={{ color: levelColors[log.level], fontWeight: 700, minWidth: 50, flexShrink: 0 }}>{log.level}</span>
                    <span style={{ color: "var(--color-accent-primary)", minWidth: 80, flexShrink: 0 }}>{log.app}</span>
                    <span style={{ color: "var(--color-text-primary)" }}>{log.msg}</span>
                </div>
            ))}
        </div>

        <div style={{ padding: "var(--space-3) var(--space-6)", borderTop: "1px solid var(--color-border)", background: "var(--color-bg-secondary)", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "12px", fontFamily: "var(--font-mono)" }}>
            <span style={{ color: "var(--color-text-tertiary)" }}>Showing 12 logs • Source: All Apps</span>
            <span style={{ color: "var(--color-text-secondary)" }}>Ingestion: <strong style={{ color: "var(--color-accent-primary)" }}>~240 logs/s</strong></span>
        </div>
    </div>);
}
