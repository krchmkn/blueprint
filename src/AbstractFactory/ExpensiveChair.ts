import IChair from "./IChair";

export default class ExpensiveChair implements IChair {
  constructor(
    readonly material: string,
    readonly upholstery: string,
  ) {}
}
