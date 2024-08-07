interface State {
  handle(context: Context): void;
}
class Context {
  private state: State;

  constructor(state: State) {
    this.state = state;
  }

  public setState(state: State) {
    this.state = state;
  }

  public getState() {
    return this.state;
  }
}

class StateA implements State {
  public handle(context: Context) {
    console.log("StateA", context.getState());
  }
}

class StateB implements State {
  public handle(context: Context) {
    console.log("StateB", context.getState());
  }
}

const context = new Context(new StateA());

context.getState().handle(context);

context.setState(new StateB());

context.getState().handle(context);
