// type assertion - what if we want a variable to assign the value of some others with a static typed.

let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number; // type assertion in typescript
