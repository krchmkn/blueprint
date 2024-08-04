import Usable from "./Usable";

export default class StandaloneDevice implements Usable {
  enable(): void {
    /* ... */
    console.log(this, "enable");
  }

  disable(): void {
    /* ... */
    console.log(this, "disable");
  }
}
