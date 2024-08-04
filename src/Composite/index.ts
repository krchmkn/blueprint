import Mobster from "./Mobster";
import MobsterType from "./types";

const boss = new Mobster(MobsterType.Boss);
const underBoss = new Mobster(MobsterType.UnderBoss);
boss.addSubordinate(underBoss);

const soldier1 = new Mobster(MobsterType.Soldier);
const soldier2 = new Mobster(MobsterType.Soldier);
const soldier3 = new Mobster(MobsterType.Soldier);
underBoss
  .addSubordinate(soldier1)
  .addSubordinate(soldier2)
  .addSubordinate(soldier3);

console.log(
  "\n",
  boss.getType,
  "subordinates:",
  boss.getSubordinatesTypes(),
  "\n\n",
  underBoss.getType,
  "subordinates:",
  underBoss.getSubordinatesTypes(),
  "\n\n",
  soldier1.getType,
  "subordinates:",
  soldier1.getSubordinatesTypes(),
  "\n\n",
  soldier2.getType,
  "subordinates:",
  soldier2.getSubordinatesTypes(),
  "\n\n",
  soldier3.getType,
  "subordinates:",
  soldier3.getSubordinatesTypes(),
);
