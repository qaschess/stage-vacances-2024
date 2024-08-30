// Type any
let u = true;
let v: any = true;

//u = "string";
v = "string";

//Math.round(u);
Math.round(v);

//Type unknown

let w: unknown = 1;
w = "string";
w = {
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  }
} as { runANonExistentMethod: () => void}

if(typeof w === 'object' && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod();
}

//Type:never

//let x: never = true;

// Type : undefined & null

let y: undefined = undefined;
let z: null = null;
