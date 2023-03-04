import Car from "./Car"
import CarBuilder from "./CarBuilder"
import Director from "./Director"
import Motorcycle from "./Motorcycle"
import MotorcycleBuilder from "./MotorcycleBuilder"

const carBuilder = new CarBuilder()
const motorcycleBuilder = new MotorcycleBuilder()

const director = new Director()

director.build(carBuilder, 4, 'blue')
director.build(motorcycleBuilder, 2, 'red')

const car: Car = carBuilder.getProduct()
const motorcycle: Motorcycle = motorcycleBuilder.getProduct()

console.log(
  '\ncar.parts',
  car.parts,
  '\nmotorcycle.parts',
  motorcycle.parts
)


director.build(carBuilder, 6, 'black')
director.build(motorcycleBuilder, 3, 'yellow')

const car2: Car = carBuilder.getProduct()
const motorcycle2: Motorcycle = motorcycleBuilder.getProduct()


console.log(
  '\ncar.parts',
  car.parts,
  '\nmotorcycle.parts',
  motorcycle.parts,
  '\ncar2.parts',
  car2.parts,
  '\nmotorcycle2.parts',
  motorcycle2.parts
)
