// how to handle objects in TypeScript

// Object Literal in JS
let obj = { a: 1, b: 'hello', c: true };

// Object Literal in TS
type User = { id: number; name: string };
const user: User = { id: 1, name: 'john' }; // object with type in typescript

// Most popular way for using objects in TypeScript is using inerface
interface UserInterface {
  id: number;
  name: string;
}
const user1: UserInterface = { id: 1, name: 'Ranjan' };
