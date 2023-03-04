import Cloneable from "./Cloneable";

export default class Cell implements Cloneable {
  type: string

  constructor(type: string) {
    this.type = type
  }

  clone(): this {
    return Object.create(this)
  }
}
