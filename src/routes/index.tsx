import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rishita Prajapati" },
      { name: "description", content: "Rishita Prajapati — Portfolio" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/rishita-portfolio-v3.html");
  }, []);
  return (
    <div style={{ minHeight: "100vh", background: "#0D0D0D", color: "#F5F0E8", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "system-ui" }}>
      Loading portfolio…
    </div>
  );
}
