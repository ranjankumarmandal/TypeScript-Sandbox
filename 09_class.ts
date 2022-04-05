// class in typescript - it is used to create multiples objects with template created in class. It works with concept of prototypes.

interface PersonInterface {
  id: number;
  add: string;
  name: string;
  register(): string;
}

class Person implements PersonInterface {
  id: number;
  add: string;
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
