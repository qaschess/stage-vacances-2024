let x: unknown = 'hello';
console.log((x as string).length);

let q : unknown = 'hello';
console.log((<string>q).length);

