interface Point {
    x: number;
    y: number;
}

let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;

interface Car {
    make: string;
    model: string;
    mileage?: number;
}

let myCar: Required<Car> = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
};

const nameAgeMap: Record<string, number> = {
    'Alice': 21,
    'Bob': 25
};

interface Person {
    name: string;
    age: number;
    location?: string;
}

const bob : Omit<Person, 'age' | 'location'> = {
    name: 'Bob'
    // `Omit` has removed age and location from the type and they can't be defined here
};

interface Person {
    name: string;
    age: number;
    location?: string;
  }
  
  const bob: Pick<Person, 'name'> = {
    name: 'Bob'
    // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
  };

  type Primitive = string | number | boolean
const value: Exclude<Primitive, string> = true;

type PointGenerator = () => { x: number; y: number; };
const point: ReturnType<PointGenerator> = {
  x: 10,
  y: 20
};

interface Person {
    name: string;
    age: number;
  }
  const person: Readonly<Person> = {
    name: "Dylan",
    age: 35,
  };
  person.name = 'Jule'; // prog.ts(11,8): error TS2540: Cannot assign to 'name' because it is a read-only property.