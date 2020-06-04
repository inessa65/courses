export function getOldest(cars){
  return  cars.sort((a,b)=>a.year===b.year?a.mileage-b.mileage:a.year-b.year)[0];
}

/*export function old(cars){
    return cars.sort((a,b)=>a.mileage===b.mileage?)
}*/