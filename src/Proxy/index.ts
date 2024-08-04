import ProxySever from "./ProxySever";
import Server from "./Server";
import Client from "./Client";

const server = new Server();
const proxySever = new ProxySever(server);

const client = new Client(proxySever);

client.request().then((resp) => {
  console.log("The client received an answer:", resp);

  console.log("\n\nNew client request");
  client.request().then(console.log);
});
