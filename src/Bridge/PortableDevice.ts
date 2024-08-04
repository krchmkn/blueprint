import Usable from "./Usable";

export default class PortableDevice implements Usable {
  enable(): void {
    /* ... */
    console.log(this, "enable");
  }

  disable(): void {
    /* ... */
    console.log(this, "disable");
  }
}
