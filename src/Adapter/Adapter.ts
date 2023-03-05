import Server from "./Server";

export default class Adapter {
  constructor(private server: Server) {
  }

  adaptedResponse(): string {
    const resp = this.server.response()
    return `${resp.firstName} ${resp.secondName}`
  }
}
