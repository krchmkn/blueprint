import Server from "./Server"
import Adapter from "./Adapter"
import Client from "./Client"

const server = new Server()
const adapter = new Adapter(server)
const client = new Client()

const serverResponse = server.response()
const adaptedResponse = adapter.adaptedResponse()

client.setFullName = adaptedResponse

console.log(
  'serverResponse', serverResponse,
  '\n adaptedResponse', adaptedResponse,
  '\n client.fullName', client.fullName
)
