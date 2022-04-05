// interface - This is very popular for statically typing Object literals in typescript

interface empInterface {
  readonly id: number;
  name: string;
  isDev: boolean;
  age?: number;
}

const emp: empInterface = {
  id: 1,
  name: 'Brad',
  isDev: true,
};

emp.id = 4; // error because id is a readonly property can't be changed/mutated outside of objects.
emp.name = 'Ranjan'; // no error, because any object elements are mutable outside if that's not readonly in typescript
