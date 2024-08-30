interface Person1 {
    name: string;
    age: number;
}

function printPerson1Property(people1: Person1, property: keyof Person1) {
    console.log(`Printing person property ${property}: "${people1[property]}"`);
}
let people1 = {
    name: "Max",
    age: 27
};
printPerson1Property(people1, "name");

type StringMap = { [key: string]: unknown };

function createStringPair(property: keyof StringMap, value: string): StringMap {
    return { [property]: value };
}