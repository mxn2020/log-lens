import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import LiveStreamPage from "./pages/LiveStreamPage";
import QueryBuilderPage from "./pages/QueryBuilderPage";
import AlertsPage from "./pages/AlertsPage";

export default function App() {
  return (<BrowserRouter>
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ marginLeft: "var(--sidebar-width)", flex: 1, minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<LiveStreamPage />} />
          <Route path="/query" element={<QueryBuilderPage />} />
          <Route path="/alerts" element={<AlertsPage />} />
          <Route path="/apps" element={<LiveStreamPage />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>);
}
