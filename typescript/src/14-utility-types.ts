interface Point {
    x: number;
    y: number;
}

let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;

interface vehicle {
    make: string;
    model: string;
    mileage?: number;
}

let myCar: Required<vehicle> = {
    make : 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
};

const nameageMap: Record<string, number> = {
    'Alice': 21,
    'Bob': 25
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