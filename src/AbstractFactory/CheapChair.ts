import IChair from "./IChair";

export default class CheapChair implements IChair {
  constructor(
    readonly material: string,
    readonly upholstery: string
  ) {}
}
