import Bridge from "./Bridge";

export default class ModernBridge extends Bridge {
  restart(): void {
    this.device.disable()
    this.device.enable()
  }
}
