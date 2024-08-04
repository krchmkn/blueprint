export default class Server {
  response(): { [key: string]: string } {
    return {
      firstName: "John",
      secondName: "Doe",
    };
  }
}
