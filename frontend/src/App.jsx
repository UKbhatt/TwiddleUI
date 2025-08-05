import { useState } from "react";
import Home from "./Home";
import Playground from "./Playground";

export default function App() {
  const [page, setPage] = useState("home");
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#181928] via-[#232f42] to-[#13111c]">
      {page === "home" && <Home onStart={() => setPage("playground")} />}
      {page === "playground" && <Playground onBack={() => setPage("home")} />}
    </div>
  );
}
