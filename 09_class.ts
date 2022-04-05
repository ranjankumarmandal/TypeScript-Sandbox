// class in typescript - it is used to create multiples objects with template created in class. It works with concept of prototypes.

class Person {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

const ranjan = new Person(1, 'Ranjan');
const kumar = new Person(2, 'Kumar');
const mandal = new Person(3, 'Mandal');
