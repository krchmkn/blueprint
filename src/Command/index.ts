interface Command {
  execute(): void;
}

class Save implements Command {
  execute() {
    console.log("Save");
  }
}

class Print implements Command {
  execute() {
    console.log("Print");
  }
}

class Button {
  private command: Command;

  constructor(command: Command) {
    this.command = command;
  }

  click() {
    this.command.execute();
  }
}

const saveCommand = new Save();
const printCommand = new Print();

const saveButton = new Button(saveCommand);
const printButton = new Button(printCommand);

saveButton.click();
printButton.click();
