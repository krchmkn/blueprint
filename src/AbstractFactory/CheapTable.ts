import ITable from "./ITable";

export default class CheapTable implements ITable {
  constructor(
    readonly material: string
  ) {}
}
