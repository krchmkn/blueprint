interface MyElement {
  accept(visitor: Visitor): void;
}

interface Visitor {
  visit(element: MyElement): void;
}

class ElementA implements MyElement {
  accept(visitor: Visitor) {
    visitor.visit(this);
  }
}

class ElementB implements MyElement {
  accept(visitor: Visitor) {
    visitor.visit(this);
  }
}

class VisitorA implements Visitor {
  visit(element: MyElement) {
    if (element instanceof ElementA) {
      console.log("VisitorA visited ElementA");
    } else if (element instanceof ElementB) {
      console.log("VisitorA visited ElementB");
    }
  }
}

class VisitorB implements Visitor {
  visit(element: MyElement) {
    if (element instanceof ElementA) {
      console.log("VisitorB visited ElementA");
    } else if (element instanceof ElementB) {
      console.log("VisitorB visited ElementB");
    }
  }
}

const elementA = new ElementA();
const elementB = new ElementB();

const visitorA = new VisitorA();
const visitorB = new VisitorB();

elementA.accept(visitorA);
elementA.accept(visitorB);

elementB.accept(visitorA);
elementB.accept(visitorB);
