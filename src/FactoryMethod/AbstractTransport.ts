import ICargo from "./ICargo";
import ITransport from "./ITransport";

export default abstract class AbstractTransport implements ITransport {
  abstract deliver(cargo: ICargo): Promise<ICargo>;
}
