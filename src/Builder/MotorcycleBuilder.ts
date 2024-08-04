import IBuilder from "./IBuilder";
import Motorcycle from "./Motorcycle";

export default class MotorcycleBuilder implements IBuilder {
  private product: Motorcycle;

  constructor() {
    this.product = new Motorcycle();
  }

  setWheels(count: number): IBuilder {
    this.product.parts["wheels"] = count;
    return this;
  }

  setColor(color: string): IBuilder {
    this.product.parts["color"] = color;
    return this;
  }

  getProduct(): Motorcycle {
    const result = { ...this.product };
    this.product = new Motorcycle();
    return result;
  }
}
