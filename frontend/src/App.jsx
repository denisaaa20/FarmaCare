import { useState } from "react";
import MedicamentList from "./components/MedicamentList.jsx";

const MEDICAMENTE_INITIALE = [
  { id: 1, titlu: "Paracetamol 500mg", in_stock: true, eticheta: "otc" },
  { id: 2, titlu: "Amoxicilina 500mg", in_stock: false, eticheta: "reteta" },
  { id: 3, titlu: "Nurofen Express", in_stock: true, eticheta: "otc" }
];

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [medicamente, setMedicamente] = useState(MEDICAMENTE_INITIALE);
  const [tema, setTema] = useState(temaInitiala);

  function handleToggle(id) {
    setMedicamente((prev) =>
      prev.map((m) => (m.id === id ? { ...m, in_stock: !m.in_stock } : m))
    );
  }

  function handleDelete(id) {
    setMedicamente((prev) => prev.filter((m) => m.id !== id));
  }

  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  const active = medicamente.filter((m) => m.in_stock).length;

  return (
    <>
      <header className="app-header">
        <button
          className="theme-toggle"
          onClick={handleTema}
          aria-pressed={tema === "dark"}
        >
          {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
        </button>
        <h1>FarmaCare</h1>
        <p>Sistem de evidență a stocului de medicamente în farmacie.</p>
        <p className="app-count">
          {medicamente.length} medicamente, dintre care {active} în stoc
        </p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Inventar medicamente</h2>
          <MedicamentList
            medicamente={medicamente}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        </section>
      </main>
    </>
  );
}