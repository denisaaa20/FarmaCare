const ETICHETE_TIP = { otc: "OTC", reteta: "Rețetă" };

export default function MedicamentCard({ medicament }) {
  return (
    <li className={medicament.in_stock ? "task-card" : "task-card done"}>
      <div>
        <h3>{medicament.titlu}</h3>
        <span className={`badge badge-${medicament.eticheta}`}>
          {ETICHETE_TIP[medicament.eticheta] || medicament.eticheta}
        </span>
      </div>
      <span className="status">
        {medicament.in_stock ? "În stoc" : "Epuizat"}
      </span>
    </li>
  );
}