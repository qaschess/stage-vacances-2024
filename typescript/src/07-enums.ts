//Numeric Enums - Default
/*
enum CardinalDirections {
    North,
    East,
    South,
    West
  }
let currentDirection = CardinalDirections.North;
console.log(currentDirection);
currentDirection = 'North'; */

// Numeric Enums - Fully Initialized
/*
enum CardinalDirections {
    North = 1,
    East,
    South,
    West
}
console.log(CardinalDirections.North);
console.log(CardinalDirections.West);
*/

//String Enums

enum CardinalDirections {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
};
//logs "North"
console.log(CardinalDirections.North);

