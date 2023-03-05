import MobsterType from "./types"

export default class Mobster {
  private type: MobsterType
  private subordinates: Array<Mobster> = []

  constructor(type: MobsterType) {
    this.type = type
  }

  get getType(): string {
    return this.type
  }

  addSubordinate(subordinate: Mobster) {
    this.subordinates.push(subordinate)
    return this
  }

  getSubordinatesTypes(): string[] {
    return this.subordinates.reduce((acc: string[], curr: Mobster) => {
      acc.push(curr.getType)
      return acc
    }, [])
  }
}
