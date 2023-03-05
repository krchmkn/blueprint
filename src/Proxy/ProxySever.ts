import Replyable from "./Replyable";

export default class ProxySever implements Replyable {
  constructor(
    private server: Replyable,
    private response: string = ''
  ) {}

  async reply(): Promise<string> {
    console.log('ProxySever log request')
    return await new Promise(async (resolve: Function) => {
      if (!this.response) {
        console.log('ProxySever call Server')
        this.response = await this.server.reply()
      }
      console.log('ProxySever reply')
      return resolve(this.response)
    })
  }
}