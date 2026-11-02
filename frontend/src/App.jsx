import { useEffect, useState } from "react";
import MedicamentList from "./components/MedicamentList.jsx";
import { fetchMedicamente } from "./api.js";

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [medicamente, setMedicamente] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tema, setTema] = useState(temaInitiala);

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        const data = await fetchMedicamente();
        if (!ignore) setMedicamente(data);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    load();

    return () => {
      ignore = true;
    };
  }, []);

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

          {loading && <p className="info">Se încarcă lista de medicamente...</p>}

          {error && (
            <p className="error">
              Nu am putut încărca datele: {error}. Rulează <code>npm run api</code>?
            </p>
          )}

          {!loading && !error && (
            <MedicamentList
              medicamente={medicamente}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          )}
        </section>
      </main>
    </>
  );
}