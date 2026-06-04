import type { Metadata } from "next";
import AdminSidebar from "@/components/admin/AdminSidebar";

export const metadata: Metadata = { title: "Flores — Admin" };

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100dvh", background: "#0a0a0a", color: "#fff" }}>
      <AdminSidebar />
      <main style={{ flex: 1, padding: "40px 48px", overflowY: "auto" }}>
        {children}
      </main>
    </div>
  );
}
