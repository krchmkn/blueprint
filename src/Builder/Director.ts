import IBuilder from "./IBuilder";

export default class Director {
  build(builder: IBuilder, wheels: number, color: string) {
    builder.setWheels(wheels).setColor(color);
  }
}
