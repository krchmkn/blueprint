import Car from "./Car";
import IBuilder from "./IBuilder";

export default class CarBuilder implements IBuilder {
  private product: Car

  constructor() {
    this.product = new Car()
  }

  setWheels(count: number): IBuilder {
    this.product.parts['wheels'] = count
    return this
  }

  setColor(color: string): IBuilder {
    this.product.parts['color'] = color
    return this
  }

  getProduct(): Car {
    const result = {...this.product}
    this.product = new Car()
    return result
  }
}
