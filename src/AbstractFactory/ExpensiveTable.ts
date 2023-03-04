import ITable from "./ITable";

export default class ExpensiveTable implements ITable {
  constructor(
    readonly material: string
  ) {}
}
