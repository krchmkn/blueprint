import Flyweight from "./Flyweight";

export default class FlyweightFactory {
  private cache: Array<Flyweight> = []

  getFlyweight(x: number, y: number): Flyweight {
    const found = this.cache.find((el: Flyweight) => (
      el.x === x && el.y === y
    ))

    if (!found) {
      const result = new Flyweight(x, y)
      this.cache.push(result)
      return result;
    }

    return found
  }
}
