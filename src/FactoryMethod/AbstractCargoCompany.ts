import ITransport from "./ITransport";

export default abstract class AbstractCargoCompany {
  abstract createTransport(): ITransport
}
