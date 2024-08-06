interface Snapshotable {
  getState(): string;
}

class Snapshot implements Snapshotable {
  private _state: string;

  constructor(state: string) {
    this._state = state;
  }

  getState(): string {
    return this._state;
  }
}

class Editor {
  private _text: string = "";

  get text(): string {
    return this._text;
  }

  set text(text: string) {
    this._text = text;
  }

  public save() {
    return new Snapshot(this._text);
  }

  public restore(snapshot: Snapshot) {
    this._text = snapshot.getState();
  }
}

const editor = new Editor();

editor.text = "Hello World";
editor.text = "Hello World2";

const snapshot = editor.save();
editor.text = "Hello World3";
console.log(editor.text);

editor.restore(snapshot);
console.log(editor.text);
