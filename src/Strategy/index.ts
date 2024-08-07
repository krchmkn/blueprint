interface RouteStrategy {
  buildRoute(a: string, b: string): string;
}

class MyNavigator implements RouteStrategy {
  private strategy: RouteStrategy;

  constructor(strategy: RouteStrategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: RouteStrategy) {
    this.strategy = strategy;
  }

  public buildRoute(a: string, b: string) {
    return this.strategy.buildRoute(a, b);
  }
}

class CarRouteStrategy implements RouteStrategy {
  public buildRoute(a: string, b: string) {
    return `Car: ${a} -> ${b}`;
  }
}

class WalkingRouteStrategy implements RouteStrategy {
  public buildRoute(a: string, b: string) {
    return `Walking: ${a} -> ${b}`;
  }
}

const myNavigator = new MyNavigator(new CarRouteStrategy());

console.log(myNavigator.buildRoute("Home", "Work"));

myNavigator.setStrategy(new WalkingRouteStrategy());

console.log(myNavigator.buildRoute("Home", "Work"));
