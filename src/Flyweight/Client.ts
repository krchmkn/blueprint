import Context from "./Context";
import FlyweightFactory from "./FlyweightFactory";

export default class Client {
  list: Array<Context> = []
  factory: FlyweightFactory

  constructor(factory: FlyweightFactory) {
    this.factory = factory
  }

  add(id: number, x: number, y: number): void {
    this.list.push(
      new Context(id, this.factory.getFlyweight(x, y))
    )
  }
}
