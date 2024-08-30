class Person {
    name: string;
    age: number;
    sexe: string
}

const person = new Person();
person.name = "Jane";

const jeremy = new Person();
jeremy.name = "Jeremy";
jeremy.age = 20;
jeremy.sexe = "M";

class Person2 {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

const person2 = new Person2("Jane");
console.log(person2.getName());

class Person3 {
    public constructor(private name: string) { }

    public getName(): string {
        return this.name;
    }
}

const person3 = new Person3("Jane");
console.log(person3.getName());

class Person4 {
    private readonly name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

const person4 = new Person4("Jane");
console.log(person4.getName());

interface Shape {
    getArea: () => number;
}

class Rectangle implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) { }

    public getArea(): number {
        return this.width * this.height;
    }
}

class Square extends Rectangle {
    public constructor(width: number) {
        super(width, width);
    }
}


interface Shape2 {
    getArea: () => number;
}

class Rectangle2 implements Shape2 {
    // using protected for these members allows access from classes that extend from this class, such as Square
    public constructor(protected readonly width: number, protected readonly height: number) { }

    public getArea(): number {
        return this.width * this.height;
    }

    public toString(): string {
        return `Rectangle[width=${this.width}, height=${this.height}]`;
    }
}

class Square2 extends Rectangle2 {
    public constructor(width: number) {
        super(width, width);
    }

    // this toString replaces the toString from Rectangle
    public override toString(): string {
        return `Square[width=${this.width}]`;
    }
}


abstract class Polygon {
    public abstract getArea(): number;

    public toString(): string {
        return `Polygon[area=${this.getArea()}]`;
    }
}

class Rectangle3 extends Polygon {
    public constructor(protected readonly width: number, protected readonly height: number) {
        super();
    }

    public getArea(): number {
        return this.width * this.height;
    }
}