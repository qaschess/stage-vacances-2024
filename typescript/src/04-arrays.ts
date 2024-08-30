const names: string[] = [];
names.push("Dylan");

// Readonly
const names: readonly string[] = ["Dylan"];
names.push("Jack");

//Type Inference
const numbers = [1, 2, 3];
numbers.push(4);
numbers.push("2");
let head: number = numbers[0];