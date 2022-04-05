// static type to array in typescript

// in js :
let arr2 = [1, 2, 3, 'hello', true];

// in TS:
let arr3: any[] = [1, 2, 'hello', true];
let arr4: number[] = [1, 2, 3, 4];
let arr5: [number, string, boolean] = [2, 'hello', false];

let arr6f: [number, string][] = [
  [1, 'hi'],
  [1, 'hi'],
  [1, 'hi'],
  [1, 'hi'],
];
