 console.log("merge")

const medicamente = [
  { id: 1, titlu: "Paracetamol 500mg", in_stock: true, eticheta: "otc" },
  { id: 2, titlu: "Amoxicilina 500mg", in_stock: false, eticheta: "reteta" },
  { id: 3, titlu: "Nurofen Express", in_stock: true, eticheta: "otc" }
];

const TIPURI_ELIBERARE = ["otc", "reteta", "supliment"];

function listeazaTitluri(lista) {
 return lista.map((t) => t.titlu);
}
console.log("Titluri:", listeazaTitluri(medicamente).join(", "));


function numaraActive(lista) {
  return lista.filter((m) => m.in_stock === true).length;
}

console.log("Medicamente în stoc:", numaraActive(medicamente));

function cautaDupaTitlu(lista, text) {
  const textCautat = text.toLowerCase();
  return lista.filter((m) => m.titlu.toLowerCase().includes(textCautat));
}

console.log("Căutare 'para':", cautaDupaTitlu(medicamente, "para"));

// Pasul 6: Adăugarea unui medicament
function nextId(lista) {
 return lista.reduce((max, t) => Math.max(max, t.id), 0) + 1;
}
function adaugaMedicament(lista, titlu, eticheta = "otc") {
  const titluCurat = titlu.trim();
  if (titluCurat === "") {
    console.error("Eroare: Titlul medicamentului nu poate fi gol!");
    return lista;
  }
    if (!TIPURI_ELIBERARE.includes(eticheta)) {
    console.error(`Eroare: Eticheta "${eticheta}" nu este validă!`);
    return lista;
  }
  const medicamentNou = {
    id: nextId(lista),
    titlu: titluCurat,
    in_stock: true, 
    eticheta: eticheta
  };
  return [...lista, medicamentNou];
}

// Pasul 7: Comutarea stării și ștergerea
function comutaGata(lista, id) {
  return lista.map((t) => {
    if (t.id === id) {
      return { ...t, in_stock: !t.in_stock };
    }
    return t;
  });
}

function stergeTask(lista, id) {
  return lista.filter((t) => t.id !== id);
}

// Pasul 8: Testele din consolă
console.log("--- Citire ---");
console.log("Titluri:", listeazaTitluri(medicamente).join(", "));
console.log("Active (în stoc):", numaraActive(medicamente));
console.log("Căutare 'para':", listeazaTitluri(cautaDupaTitlu(medicamente, "para")).join(", "));

console.log("--- Adăugare ---");
let lista = adaugaMedicament(medicamente, "Aspirina 100mg", "otc");
console.log("Lista nouă:", lista.length, "medicamente");
console.log("Originalul a rămas cu:", medicamente.length, "medicamente");

console.log("--- Modificare și ștergere ---");
lista = comutaGata(lista, 1);
console.log("După schimbarea stoc id 1, active:", numaraActive(lista));
lista = stergeTask(lista, 3);
console.log("După ștergerea id 3:", listeazaTitluri(lista).join(", "));

console.log("--- Validare ---");
adaugaMedicament(lista, "   ");
adaugaMedicament(lista, "Vitamina C", "urgenta");