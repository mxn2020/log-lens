import { Play, Save, Clock, BookOpen } from "lucide-react";
import { Button, Card, Textarea } from "@geenius-ui/react-css";

export default function QueryBuilderPage() {
    const savedQueries = [
        { name: "Auth Errors (24h)", query: 'level:ERROR AND app:auth-svc | timeRange:24h', runs: 42 },
        { name: "Slow Requests", query: 'msg:*ms) AND msg:>[500ms] | sort:ts desc', runs: 18 },
        { name: "Worker Failures", query: 'level:ERROR AND app:worker AND msg:failed', runs: 31 },
    ];

    return (<div style={{ padding: "var(--space-6)", maxWidth: 1200 }}>
        <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700, marginBottom: "var(--space-6)" }}>Query Builder</h1>

        <Card padding="none" style={{ marginBottom: "var(--space-6)", overflow: "hidden" }}>
            <div style={{ padding: "var(--space-5)" }}>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: "var(--space-2)" }}>Log Query</label>
                <div style={{ position: "relative" }}>
                    <Textarea style={{ width: "100%", height: 80, resize: "vertical" }} defaultValue={'level:ERROR AND app:auth-svc | timeRange:24h | limit:100'} />
                </div>
            </div>
            <div style={{ padding: "var(--space-3) var(--space-5)", background: "var(--color-bg-tertiary)", borderTop: "1px solid var(--color-border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", gap: "var(--space-2)" }}>
                    <Button variant="primary" size="sm" icon={<Play size={14} />}>Run Query</Button>
                    <Button variant="outline" size="sm" icon={<Save size={14} />}>Save</Button>
                </div>
                <span style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-tertiary)", display: "flex", alignItems: "center", gap: 4 }}><Clock size={14} /> Estimated scan: ~12,400 logs</span>
            </div>
        </Card>

        <div>
            <h2 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "var(--space-4)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}><BookOpen size={18} /> Saved Queries</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                {savedQueries.map(q => (
                    <Card key={q.name} padding="md" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                            <h3 style={{ fontWeight: 600, marginBottom: 4 }}>{q.name}</h3>
                            <code className="mono" style={{ color: "var(--color-accent-primary)", fontSize: "12px" }}>{q.query}</code>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                            <span style={{ fontSize: "12px", color: "var(--color-text-tertiary)", fontFamily: "var(--font-mono)" }}>{q.runs} runs</span>
                            <Button variant="outline" size="sm" icon={<Play size={14} />}>Run</Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    </div>);
}
