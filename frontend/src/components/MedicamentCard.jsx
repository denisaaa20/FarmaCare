const ETICHETE_TIP = { otc: "OTC", reteta: "Rețetă" };

export default function MedicamentCard({ medicament, onToggle, onDelete }) {
  return (
    <li className={medicament.in_stock ? "medicament-card done" : "medicament-card"}>
      <label className="medicament-main">
        <input
          type="checkbox"
          checked={medicament.in_stock}
          onChange={() => onToggle(medicament.id)}
        />
        <div>
          <h3>{medicament.titlu}</h3>
          <span className={`badge badge-${medicament.eticheta}`}>
            {ETICHETE_TIP[medicament.eticheta] || medicament.eticheta}
          </span>
        </div>
      </label>
      <button
        className="btn-danger"
        onClick={() => onDelete(medicament.id)}
        aria-label={`Șterge ${medicament.titlu}`}
      >
        Șterge
      </button>
    </li>
  );
}