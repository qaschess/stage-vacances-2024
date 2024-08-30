let value4: string | undefined | null = null;
value4 = 'hello';
value4 = undefined;

interface House {
    sqft: number;
    yard?: {
        sqft: number;
    };
}
function printYardSize(house: House) {
    const yardSize = house.yard?.sqft;
    if (yardSize === undefined) {
        console.log('No yard');
    } else {
        console.log(`Yard is ${yardSize} sqft`);
    }
}

let home: House = {
    sqft: 500
};

printYardSize(home);

function printMileage(mileage: number | null | undefined) {
    console.log(`Mileage: ${mileage ?? 'Not Available'}`);
}

printMileage(null);
printMileage(0);

function getValue(): string | undefined {
    return 'hello';
}
let value6 = getValue();
console.log('value length: ' + value6!.length);

let array: number[] = [1, 2, 3];
let value7 = array[0];