import ICargo from "./ICargo";
import MaritimeCargoCompany from "./MaritimeCargoCompany";
import RoadCargoCompany from "./RoadCargoCompany";

const roadCargoCompany = new RoadCargoCompany()
const maritimeCargoCompany = new MaritimeCargoCompany()

const truck = roadCargoCompany.createTransport()
const ship = maritimeCargoCompany.createTransport()

const cargo: ICargo = { title: 'Fruits' }

truck.deliver(cargo)
ship.deliver(cargo)
