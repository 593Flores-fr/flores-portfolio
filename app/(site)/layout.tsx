import type { Metadata } from "next";
import TopNav from "@/components/site/TopNav";
import TrackPageView from "@/components/site/TrackPageView";

export const metadata: Metadata = {
  title: "Flores — Graphiste & Développeur Web",
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopNav />
      <TrackPageView />
      {children}
    </>
  );
}
