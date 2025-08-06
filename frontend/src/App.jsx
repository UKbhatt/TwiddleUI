import Home from "./Home";
import Playground from "./Playground";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/playground" element={<Playground />} />
    </Routes>
  );
}
