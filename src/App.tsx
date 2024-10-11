import "./assets/css/main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataSecurity } from "./components/AGB/DataSecurity.tsx";
import { Imprint } from "./components/AGB/Imprint.tsx";
import { HomePage } from "./components/HomePage.tsx";
import { Agb } from "./components/AGB/Agb.tsx";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/agb" element={<Agb />} />
        <Route path="/datenschutz" element={<DataSecurity />} />
        <Route path="/impressum" element={<Imprint />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
