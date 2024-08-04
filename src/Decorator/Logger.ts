import Printable from "./Printable";

export default class Logger implements Printable {
  print(message: string): void {
    console.log(message);
  }
}
