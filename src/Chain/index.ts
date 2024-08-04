interface Handler {
  setNext(handler: Handler): Handler | null;
  handle(request: string): Handler | null;
}

abstract class AbstractHandler implements Handler {
  private nextHandler: Handler | null = null;

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  public handle(request: string): Handler | null {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return null;
  }

  protected log(request: string): void {
    console.log(this.constructor.name, request);
  }
}

class MonkeyHandler extends AbstractHandler {
  public handle(request: string): Handler | null {
    if (request === "Banana") {
      this.log(request);
      return this;
    }
    return super.handle(request);
  }
}

class SquirrelHandler extends AbstractHandler {
  public handle(request: string): Handler | null {
    if (request === "Nut") {
      this.log(request);
      return this;
    }
    return super.handle(request);
  }
}

class DogHandler extends AbstractHandler {
  public handle(request: string): Handler | null {
    if (request === "MeatBall") {
      this.log(request);
      return this;
    }
    return super.handle(request);
  }
}

function client(handler: Handler) {
  const foods = ["Nut", "Banana", "MeatBall", "Cup of coffee"];

  for (const food of foods) {
    const result = handler.handle(food);
    console.log("client", food, result?.constructor.name, "\n");
  }
}

const monkey = new MonkeyHandler();
const squirrel = new SquirrelHandler();
const dog = new DogHandler();

monkey.setNext(squirrel).setNext(dog);
client(monkey);
