// generics are widely used to create re-usable components

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(['ranjan', 'kumar', 'mandal']);
