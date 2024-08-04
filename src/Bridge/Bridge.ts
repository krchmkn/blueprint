import Usable from "./Usable";

export default class Bridge {
  constructor(protected device: Usable) {}

  start(): void {
    this.device.enable();
  }

  stop(): void {
    this.device.disable();
  }
}
