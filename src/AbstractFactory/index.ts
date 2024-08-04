import CheapFurnitureFactory from "./CheapFurnitureFactory";
import ExpensiveFurnitureFactory from "./ExpensiveFurnitureFactory";

const expensiveFactory = new ExpensiveFurnitureFactory();
const cheapFactory = new CheapFurnitureFactory();

const expensiveChair = expensiveFactory.createChair();
const expensiveTable = expensiveFactory.createTable();

console.log(
  "Expensive chair",
  expensiveChair.material,
  expensiveChair.upholstery,
);
console.log("Expensive table ", expensiveTable.material);

const cheapChair = cheapFactory.createChair();
const cheapTable = cheapFactory.createTable();

console.log("Cheap chair", cheapChair.material, cheapChair.upholstery);
console.log("Cheap table ", cheapTable.material);
