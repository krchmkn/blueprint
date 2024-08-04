import Printable from "./Printable";

export default class FancyLogger implements Printable {
  constructor(protected source: Printable) {}

  print(message: string): void {
    console.warn("\n***");
    this.source.print(message);
    console.warn("***");
  }
}
