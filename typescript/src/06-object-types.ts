const car1 : {type : string , model: string , year : number } ={
    type : "Toyota",
    model : "Corolla",
    year : 2009
}

//Optional Properties
//without

/*const car: { type: string, mileage: number } = { // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
  type: "Toyota",
};
car.mileage = 2000;*/

//optional Property

const car2: { type: string, mileage?: number } = { // no error
    type: "Toyota"
  };
  car2.mileage = 2000;

//index signature  
const nameAgeMap: { [index: string]: number } = {};
  nameAgeMap.Jack = 25;
  nameAgeMap.Claude = 12 ;
nameAgeMap["Jeremy"] = 20;
nameAgeMap["Qassim"] = 17;
nameAgeMap[20] = 17;

console.log(JSON.stringify(nameAgeMap))

console.log("hello")