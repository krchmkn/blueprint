import Responsible from "./Replyable";

export default class Server implements Responsible {
  async reply(): Promise<string> {
    return await new Promise((resolve: Function) => {
      setTimeout(() => {
        console.log('Server reply')
        resolve('Hola!')
      }, 1000)
    })
  }
}
