interface Intermediary {
  notify(sender: Component, event: string): void;
}
class ConcreteIntermediary implements Intermediary {
  private components: Component[] = [];

  notify(sender: Component, event: string): void {
    this.components.forEach((component) => {
      if (component !== sender) {
        component.receiveNotification(sender, event);
      }
    });
  }

  addComponent(component: Component): void {
    this.components.push(component);
  }
}

class Component {
  constructor(private name: string) {}

  receiveNotification(sender: Component, event: string): void {
    console.log(
      `Received notification from ${sender.name} with event ${event}`,
    );
  }
}

const intermediary = new ConcreteIntermediary();

const component1 = new Component("component1");
const component2 = new Component("component2");

intermediary.addComponent(component1);
intermediary.addComponent(component2);

intermediary.notify(component1, "event1");
intermediary.notify(component2, "event2");
