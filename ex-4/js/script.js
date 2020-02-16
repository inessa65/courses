const a = +prompt('Введите число ', '');
const b = +prompt('Введите число', '');
const c = +prompt('Введите число', '');




   

if ( ( a > 0 ) && ( b > 0 ) && ( c > 0)  && ( ( a + b > c ) && ( b + c > a ) && ( a + c > b ))){
const p = (a + b + c)/2;
const s = Math.sqrt(p*(p-a) * (p-b) * (p-c));
alert( "площадь = " + s)
} else{
  alert("треугольника нет");  
}

//4.7.6 =11.97


    /*const p = (a + b + c)/2;
    const s = Math.sqrt(p*(p-a) * (p-b) * (p-c));
    alert( "площадь = " + s)*/