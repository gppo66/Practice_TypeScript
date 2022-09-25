//functions

//parameter, return
function sum2(a: number, b: number): number {
  return a + b;
}

sum2(10, 20);

function sum3(): number {
  return 10;
}

// constrain parameter
function add(a: number, b: number): number {
  return a + b;
}
// add(10,20,30,40,50); error

//optional parameter
function log(a: string, b?: string) {}
log("asdf");
log("asdfasdf", "asdfasdf");
// add2(10,20,30,40,50); error
