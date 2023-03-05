import Flyweight from "./Flyweight";

export default class Context {
  constructor(
    readonly id: number,
    readonly flyweight: Flyweight
  ) {}
}
