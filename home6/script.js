/*const point = { x: 3, y: 5, }
const f = function () { return this.x + this.y; }

f.call(point);
//point.getSum = f; 
//console.log(point.getSum());


/*let a=3;
switch(a){
  case 1:alert("a равен 2");
  break;
  case 2:
    alert( "a равен 2" );
    break;
  case 3:
    alert( "a равен 3" );
    break;
  default:
    alert( 'Совпадение не найдено' );
};
console.log(a);
/*const arr=[6,3,30];
const arr1=[10,20];
arr1.push(arr);
console.log(arr1);


/*const arr=[1,2,3,4];
const [,b] =arr;
console.log(b);



/*let n;
const a={
  b:10
};
const d={

  s:3
}

 console.log(n=(a.b + d.s));
console.log(n);
/*var arr = [0,1,4,9,16];
2
var arr1 = [];
3

4
for(var i = 0; i < arr.length; i++) {
5
    arr1.push(arr[i] * arr[i]);
6
};
7

8
console.log(arr1);



/*

let arr =[
   a={
    a:10,
    b:20
  },
c={
  g:45,
  f:33
},
x={
  j:4
}
]
console.log(arr);



/*let obj={
  a: 2+3,
};
console.log(obj);
/*let a=[1,2,3,4,5,];
sum=0;
for(let i=0; i<a.length; i++){
sum+=a[i];


}
console.table(sum);

/*let a=3;
let b=3;
let c=a+b;
//console.log(c=(a+b));
console.log(c);
/*var numbers = ["one", "two", "three"];
var numbers_string = numbers.join(';');
console.log(numbers_string);

/*console.table(`${[8,4,5,1,11,3,1].map((e, i) => {  if (e > 5) return `${i} - ${e}<br/>`; }).join``}`);



/*const goods = {
  chair: {
    price: 50,
    name: "chair",
    numbers: 10,
    description: "small and couzy",
    img:
      "https://www.remonter.by/assets/images/products/6873/dior-dv-ser-min.jpeg"
  },
  bed: {
    price: 68,
    name: "bed",
    numbers: 67,
    description: "big and cool",
    img: "https://remonter.by/assets/images/products/6873/dior-dv-ser-min.jpeg"
  },
  table: {
    price: 80,
    name: "table",
    numbers: 7,
    description: "for dinner",
    img: "./bed.png"
  }
};
console.log(goods);

let out = "";
for (let key in goods) {
  out += `Name:` + goods[key].name + " " + "<br>";
  out += `Price:` + goods[key].price + " <br>";
  out += `Numbers:` + goods[key].numbers + " <br>";
  out += `Description:` + goods[key].description + " <br>";
  out += 'img srs="' + goods[key].img + '" ' + "<br>";
}
document.getElementById("out").innerHTML = out;*/
const arr= [];
for(let i=0; i<1; i++){
    const chair={

name: "chair table bed ", 
numbers:"10 20 30",
description: "small and couzy, small",
img: "https://www.remonter.by/assets/images/products/6873/dior-dv-ser-min.jpeg"


    }
    arr.push(chair);
    const table={
      name:"table",
      numbers:1,
description: "small ",
img: "https://www.remonter.by/assets/images/products/6873/dior-dv-ser-min.jpeg"
    }
    arr.push(table);
}
arr.forEach((a)=>{
  const elem=document.getElementById("out");
  elem.innerHTML+=`<ul><li>Name: ${a.name}</li><li>Numbers:${a.numbers}</li><li>Descriptions:${a.description}</li>
  <img src="${a.img}"><br></ul>`;
}

);
console.table(arr);



//https://dg-home.ru/pic/228569/stul_germann_biriuzovyi_barhat_ot_la_forma_ex_julia_grup_1__1__.jpg*/
