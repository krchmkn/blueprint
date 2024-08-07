class Publisher {
  private observers: Observer[] = [];

  public subscribe(observer: Observer) {
    this.observers.push(observer);
  }

  public unsubscribe(observer: Observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  public notify() {
    this.observers.forEach((observer) => observer.update());
  }
}

class Observer {
  public update() {
    console.log("Observer is updated");
  }
}

const publisher = new Publisher();

const observer = new Observer();
const observer2 = new Observer();

publisher.subscribe(observer);
publisher.subscribe(observer2);

publisher.notify();
