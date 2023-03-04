import CheapChair from "./CheapChair";
import CheapTable from "./CheapTable";
import IChair from "./IChair";
import IFurnitureFactory from "./IFurnitureFactory";
import ITable from "./ITable";

export default class CheapFurnitureFactory implements IFurnitureFactory {
  createChair(): IChair {
    return new CheapChair('Plywood', 'Textile')
  }

  createTable(): ITable {
    return new CheapTable('Pine board')
  }
}
