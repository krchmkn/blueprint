import AbstractTransport from "./AbstractTransport";
import ICargo from "./ICargo";

export default class Ship extends AbstractTransport {
  private timeout: number | undefined;

  deliver(cargo: ICargo): Promise<ICargo> {
    clearTimeout(this.timeout);
    return new Promise((resolve: Function) => {
      this.timeout = setTimeout(() => {
        console.log("The ship sailed");
        resolve(cargo);
      }, 1000);
    });
  }
}
