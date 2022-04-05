// class in typescript - it is used to create multiples objects with template created in class. It works with concept of prototypes.

class Person {
  private id: number;
  protected add: string;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered!`;
  }
}

const ranjan = new Person(1, 'Ranjan');
const kumar = new Person(2, 'Kumar');
const mandal = new Person(3, 'Mandal');

class Child extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const c = new Child(1, 'ranjan', 'se');
console.log(c.name);
console.log(c.register());
