import ICargo from "./ICargo";

export default interface ITransport {
  deliver(cargo: ICargo): Promise<ICargo>
}
