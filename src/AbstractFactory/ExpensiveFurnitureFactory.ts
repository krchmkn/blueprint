import ExpensiveChair from "./ExpensiveChair";
import ExpensiveTable from "./ExpensiveTable";
import IChair from "./IChair";
import IFurnitureFactory from "./IFurnitureFactory";
import ITable from "./ITable";

export default class ExpensiveFurnitureFactory implements IFurnitureFactory {
  createChair(): IChair {
    return new ExpensiveChair("Mahogany", "Сalfskin");
  }

  createTable(): ITable {
    return new ExpensiveTable("Mahogany");
  }
}
