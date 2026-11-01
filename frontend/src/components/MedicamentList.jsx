import MedicamentCard from "./MedicamentCard.jsx";

export default function MedicamentList({ medicamente, onToggle, onDelete }) {
  // 1. Verificare pentru listă goală (return timpuriu)
  if (!medicamente || medicamente.length === 0) {
    return <p className="empty">Nu există niciun medicament în listă.</p>;
  }

  // 2. Randarea listei și transmiterea funcțiilor onToggle și onDelete
  return (
    <ul className="task-list">
      {medicamente.map((medicament) => (
        <MedicamentCard
          key={medicament.id}
          medicament={medicament}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}