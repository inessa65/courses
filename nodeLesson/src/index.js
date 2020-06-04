import {getSum, getDifference, getMulty} from './function.js';

import {Car} from './Car.js';
import {data} from './data.js';
import {getOldest} from './handlers.js'

const cars =data.map((d)=> new Car(d.name, d.year, d.mileage));
//const oldest=getOldest(cars)

console.log(getSum(1, 2)); // 3 console.log(getDifference(4, 2)); // 2
console.log(getMulty(3,3))
console.log(getOldest(cars))
console.log(oldest)
