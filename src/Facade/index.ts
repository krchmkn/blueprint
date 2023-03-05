import CallCenter from "./CallCenter";

const callCenter = new CallCenter()

callCenter
  .order()
  .then(
    (result) => console.log('Order is accepted?', result)
  )
