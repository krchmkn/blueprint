abstract class Template {
  public templateMethod() {
    this.step1();
    this.step2();
  }

  abstract step1(): void;
  abstract step2(): void;
}

class Template1 extends Template {
  step1() {
    console.log("Template1 step1");
  }

  step2() {
    console.log("Template1 step2");
  }
}

class Template2 extends Template {
  step1() {
    console.log("Template2 step1");
  }

  step2() {
    console.log("Template2 step2");
  }
}

const fn = (template: Template) => {
  template.templateMethod();
};

fn(new Template1());
fn(new Template2());
