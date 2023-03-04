import Singleton from "./Singleton";

const obj = Singleton.getInstance()
const obj2 = Singleton.getInstance()

console.log(
  'obj === obj2', obj === obj2,
  '\n obj instanceof Singleton', obj instanceof Singleton,
  '\n obj2 instanceof Singleton', obj2 instanceof Singleton
)
