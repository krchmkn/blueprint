import IChair from "./IChair";
import ITable from "./ITable";

export default interface IFurnitureFactory {
  createChair(): IChair
  createTable(): ITable
}
