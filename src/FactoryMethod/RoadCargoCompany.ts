import AbstractCargoCompany from "./AbstractCargoCompany";
import ITransport from "./ITransport";
import Truck from "./Truck";

export default class RoadCargoCompany extends AbstractCargoCompany {
  createTransport(): ITransport {
    return new Truck();
  }
}
