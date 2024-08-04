import Client from "./Client";
import FlyweightFactory from "./FlyweightFactory";

const flyweightFactory = new FlyweightFactory();
const client = new Client(flyweightFactory);

client.add(0, 1, 1);

for (let i = 1; i < 100; i++) {
  client.add(i, 2, 2);
}

console.log(
  "\nclient.list[0] === client.list[1]",
  client.list[0].flyweight === client.list[1].flyweight,

  "\nclient.list[1] === client.list[2]",
  client.list[1].flyweight === client.list[2].flyweight,

  "\nclient.list[4] == client.list[55]",
  client.list[4].flyweight == client.list[55].flyweight,
);
