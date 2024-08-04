import Replyable from "./Replyable";

export default class Client {
  constructor(private server: Replyable) {}

  async request(): Promise<string> {
    return await this.server.reply();
  }
}
