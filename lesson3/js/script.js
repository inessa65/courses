



/*const exp = /(http|https|ftp):\/\/([a-zA-Z0-9.])+/g;
const text = "hello my internet page is https://www.mypage.yandex ";
console.log(text.match(exp));

/*const exp = /([\w-]+\.)+\w+/g;
const text = "hello dear friends  my-homepage.yandex join us";

console.log(text.match(exp));

/*const exp =/(\+)[\d]{10,14}/gmi;
const text = "hello +14321234566754 , teew +1343245676 ffg";

console.log(text.match(exp));



/*const testObj=[{
    9:(Math.round(Math.random()* 1000)),
    3:(Math.round(Math.random()* 1000)),
    5:(Math.round(Math.random()* 1000)),
    1:(Math.round(Math.random()* 1000)),
    2:(Math.round(Math.random()* 1000))
    
}]
const newArray=testObj;
const clonedTestObj =[...testObj];
console.log(clonedTestObj);
console.log(Object.keys(testObj).reduce((accumulator, currentValue) => {
    accumulator[currentValue] = testObj[currentValue];
    return accumulator;
}, {}));

/*sort array

let list=[4, 5, 7, 44, 894, 34, 21,90];

let newList =list;
let clonedList =[...list];
console.log(clonedList);
//for(let i=0; i<10; i++){
//list.push(Math.round(Math.random()* 1000));
//}

list.sort((a,b)=>a-b);
console.log(newList);


/*const getNumber=(a) => (a%3===0) ? true:false;
console.log(getNumber(8));
    
/*function house(rooms,area,floor,flat,people){
    this.rooms=rooms;
this.area=area;
this.floor=floor;
this.flat=flat;
this.people=people;
}
let houseList =[];
let flat1= new house('3', '60','4','45','2');
houseList.push(flat1);
let flat2= new house('2', '40','6','76','2');
houseList.push(flat2);
console.log(houseList);
function sumArea(){

    let sum = 0;
    for (let i =0; i<houseList.length; i++){
        sum += houseList[i].area;
    }return sum;
    
    }

console.log(sumArea());*/

/*const house ={
    adress: 'Esenina 29',
    year: 1997,
    floors:9,
    flats: [22,45,23,65],
}
console.log(house.flats);

const flats1 ={
    rooms: 3,
    area:56,
    numFloors:4,
    numFlat:22,
    numPeople:3,
    count: function(){
        
        let month=0;
        
        if(month<4){
            return month = 1;
        } else{
           return  month = 1.8; 
        } 
 

      
    } 
}
count();
//flats1=count;
console.log(flats1);
//console.log(flats1.count((month * this.area * this.numPeople)/2 ));
//console.log(flats1);

/*const flats2 ={
    rooms: 4,
    area:77,
    numFloors:5,
    numFlat:56,
    numPeople:5,
   sumarea:function(){
       return (flats1.thisarea + flats2.thisarea)/(flats1.thisnumPeople +flats2.thisnumPeople);
   
    }
} 
console.log(sumarea());









/*const getDistance = function(point){
    const d = Math.sqrt(point.x ** 2 + point.y ** 2);
    return d;
    
    }
    getDistance({ x:2, y:4});
    console.log(getDistance({ x:2, y:4}));*/

/*function getNumber (x1, x2,y1,y2){
    return Math.sqrt(((x2- x1) ** 2) + ((y2 - y1) ** 2));
}

console.log(getNumber((x1, x2,y1,y2)));
/*function randColor() {
  var r = Math.floor(Math.random() * 256),
    g = Math.floor(Math.random() * 256),
    b = Math.floor(Math.random() * 256);
  return r + ", " + g + ", " + b;
}

console.log(randColor());*/

//Проверка простоты введенного числa

/*function getNumber(d){

for( let i = 2; i<d; i++){
    if(d % i ===0) return false;
         
    return d>1;
  
   
};
} console.log(getNumber(6));









//let N = prompt('');

/*const findLongestWord = function(str) {

let arrStr = str.split('');

let longestWord =arrStr[0];

for(let i= 0; i< arrStr.length; i++){


if(arrStr[i].length> longestWord.length){
    longestWord =arrStr[i];
    
}
}
return longestWord; 

};
console.log( 
    longestWord("The quick brown fox jumped over the lazy dog") 
  );



/*const names = ['Alex', 'Olga', 'Paul', 'Nata', 'Bob', 'Mary', 'Jeck'];
const persons = [];
const timeFrom = new Date('1980-01-01').getTime();
const timeTill = new Date('1995-12-31').getTime();
const N = + prompt("Enter amount ");

for (let i = 0; i < N; i++) {
    const nameIndex = Math.floor(Math.random() * names.length);
    const birthTime = Math.round(Math.random() * (timeFrom - timeTill) + timeFrom);

    persons.push({
        name: names[nameIndex],
        salary: Math.round(Math.random() * 500),
        Bday: new Date(birthTime),
        age: Math.round(Math.random() * 30 + 30),

    });
}
let sum = 0;
for (let i = 0; i < N; i++) {
    sum += persons[i].age;
}
const averAge = sum / persons.length;
console.log(averAge);
console.table(persons);

let maxSalary = -Infinity;
for (let i = 0; i < persons.length; i++) {
    if (persons[i].salary > maxSalary) {
        maxSalary = persons[i].salary;
    }

}
console.log(maxSalary);*/
