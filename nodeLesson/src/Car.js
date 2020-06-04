export class Car{
    constructor(name, year, mileage)
     {
    this.name = name;
    this.year = year;
    this.mileage = mileage;
    this.annualMileage = mileage / (2020 - year);
  }
}
const cars =data.map((d)=> new Car(d.name, d.year, d.mileage));