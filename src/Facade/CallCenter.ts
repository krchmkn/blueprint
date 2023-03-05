import Plant from "./Plant"
import StoreHouse from "./StoreHouse"

export default class CallCenter {
  order(): Promise<boolean> {
    return new Promise((resolve: Function) => {
      const storeHouse = new StoreHouse()
      const plant = new Plant()

      if (storeHouse.getItemsCount()) {
        storeHouse.postponeItem()
      } else {
        plant.oder()
      }

      resolve(true)
    })
  }
}