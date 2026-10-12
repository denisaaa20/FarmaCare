const medicamente = [
  { id: 1, titlu: "Paracetamol 500mg", in_stock: true, eticheta: "otc" },
  { id: 2, titlu: "Amoxicilina 500mg", in_stock: false, eticheta: "reteta" },
  { id: 3, titlu: "Nurofen Express", in_stock: true, eticheta: "otc" }
];

export default function App() {
  const active = medicamente.filter((m) => m.in_stock).length;

  return (
    <>
      <header className="app-header">
        <h1>FarmaCare</h1>
        <p>Sistem de evidență a stocului de medicamente în farmacie.</p>
        <p className="app-count">
          {medicamente.length} medicamente, dintre care {active} în stoc
        </p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Inventar medicamente</h2>
          {/* Temporar: date brute; componentele apar în Etapa 4 */}
          <pre>{JSON.stringify(medicamente, null, 2)}</pre>
        </section>
      </main>
    </>
  );
}