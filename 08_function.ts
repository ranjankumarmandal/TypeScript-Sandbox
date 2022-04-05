// how to handle functions in typescript

// function in JS
function fun(a, b) {
  return a + b;
}

// function in TS
function func(a: number, b: number): number {
  // function returning with type 'number'
  return a + b;
}

function funct(message: string | number): void {
  // function not returning anything so use static type 'void'
  console.log(message);
}
