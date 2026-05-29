import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
component: Index,
});

function Index() {
return (
<main
style={{
minHeight: "100vh",
background: "#111",
color: "white",
display: "flex",
justifyContent: "center",
alignItems: "center",
fontSize: "3rem",
}}
>
WEBSITE WORKS 🚀

);
}
