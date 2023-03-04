import AbstractCargoCompany from "./AbstractCargoCompany";
import ITransport from "./ITransport";
import Ship from "./Ship";

export default class MaritimeCargoCompany extends AbstractCargoCompany {
  createTransport(): ITransport {
    return new Ship()
  }
}
