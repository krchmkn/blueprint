import Cell from "./Cell";

const cell = new Cell("Procaryota");
const cell2 = cell.clone();
cell2.type = "Eukaryota";

console.log(
  "cell",
  cell,
  "\n\n cell2",
  cell2,
  "\n cell2.prototype",
  Object.getPrototypeOf(cell2),
);
