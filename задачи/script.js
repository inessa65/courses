
const bodyBox = document.getElementById('body-box');
const menuBox = document.querySelector('.menu-box');
const contextMenu = document.querySelector('.context-menu');

menuBox.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    contextMenu.style.top =`${event.clientY}px`;
    contextMenu.style.left =`${event.clientX}px`;

    contextMenu.classList.add('active');
});

bodyBox.addEventListener('click', function(event) {
    if (event.target.className != '.menu-box') {
        contextMenu.classList.remove('active');
    }
}, true);

const openSomething = document.getElementById('open');
const saveSomething = document.getElementById('save');
const deleteSomething = document.getElementById('delete');

openSomething.addEventListener('click', function() {
    alert('Open');
});
saveSomething.addEventListener('click', function() {
    alert('Save');
});
deleteSomething.addEventListener('click', function() {
    alert('Delete');
});

/*function handleShow() {
    document.querySelector('.modal').showModal();
  }
  
  function handleHide() {
    document.querySelector('.modal').close();  
  }
  
  document.querySelector('.modal-show').addEventListener('click', handleShow);
  
  document.querySelector('.modal-hide').addEventListener('click', handleHide);
window.onload = function () {
    document.querySelector("#chips-show").onclick = function () {
        let text = document.querySelector("#chips-text").value;
        let chips = document.createElement('div');
        chips.classList.add('chips');
        chips.innerText = text;
if(!document.querySelector("#chips-field")){
    
    let chipsField=document.createElement('div');
    chipsField.id='chips-field';
    document.body.appendChild(chipsField);
}

document.querySelector("#chips-field").appendChild(chips);
      setTimeout(
         function(){
             chips.remove();
             removeChipsField();
         },9000);
      
    }
    function removeChipsField(){
        let chips=document.querySelectorAll("#chips-field.chips");
        if(chips.length==0){
            document.querySelector("#chips-field").remove();
        }
    }
}


/*let mas=[1,22];
let res=[];
for(let i=mas[0];i<mas[1]; i++){
res.push(i);
}
console.log(res);
document.getElementById("calc").onclick=function(){
    let y =document.getElementById("nadbavka").value;
   y=parseInt(y);
   if(y>=0 && y<3){
       alert('0%');
   }else if(y>=3 && y<10){
       alert('10%');
   }else if( y>=10 && y<20){
       alert('20%');
   }else{
       alert('erro');
   }
}

document.getElementById("calc").onclick=function(){
    let y=document.getElementById("year").value;
    y=parseInt(y);
    let old=2020-y;
    if(old >=16){
        alert('welcome');
    }else{
        alert('good-bye');
    }
}

document.getElementById("calc").onclick = function () {
    let flat = document.getElementById("flat").value;
    flat = parseInt(flat);
    if (flat >= 1 && flat <= 20) {
        alert('1');
    } else if (flat >= 21 && flat <= 48) {
        alert('2');
    } else if (flat >= 49 && flat <= 90) {
        alert('3');
    } else {
        alert('no flat');
    }
};




let out=document.getElementById("out");
let tmp='';
for(let i=1; i<=9;i++){
    tmp+= +7 + '*' +i +' = ' +7 *i +'<br>';
}

    out.innerHTML=tmp;

let out=document.getElementById("out");
let tmp='';
for(let i=4; i<=13;i=i+3){
    tmp+=i +' ';
}out.innerHTML=tmp;

let out=document.getElementById("out");
let tmp='';
for(let i=4; i<=400;i++){
    tmp+=i +' ';
}out.innerHTML=tmp;//вывести числа от 4 до 400

const a = [];
const N =+prompt('');
for (let i = 0; i < N; i++) {
    a.push(Math.round(Math.random() * 200-100));

    console.log(a)
}
const a = [];
const N = +prompt("");
for (let i = 0; i < N; i++) {
    a.push(Math.round(Math.random() * 100));

    console.log(a)
    for (let i = 0; i < a.length; i++) {


        if (a[i] % 3 === 0) {
            console.log(a[i]);
        }
    }
}

const n=prompt("");


    function vowels(str){
let a="aeuio";
let b="zxcvbbnmlkjhgfdswqrtp";
let count=[...str].filter(element=>a.includes(element));
 b!=count;

return count;


}

console.log(vowels(n));



/*const n=prompt("");
function vowels(str){
let a="aeuio";
let b="zxcvbbnmlkjhgfdswqrtp";
let count=[...str].filter(element=>a.includes(element));
return count;


}

console.log(vowels(n));




/*const a = +prompt("");
const b = +prompt("");

if(a%b==0){
    alert(a+b)
}else{
    alert(a*b);
}//Пользователь вводит два числа. Если первое делится на второе, то вывести их сумму, в противном случае – произведение.
const day = +prompt("");
const month = +prompt("");
const date = new Date();

if (month < (date.getMonth() + 1)) {
    alert("have been");
} else {
    if (month > (date.getMonth() + 1)) {
        alert("not yet");
    } else {
        if (month == date.getMonth() + 1) {
            if (day < (date.getDay)) {
                alert("not yet");
            } else {
                alert("already have been");
            }
        }
    }
}// 8. Пользователь вводит день и месяц (от 1 до 12) своего рождения. Выяснить, был ли у него в этом году (включая сегодняшний день) день рождения, или еще будет.

const minutes = +prompt("");
if(minutes<=100){
    alert(minutes*50/100 +"rub")
}else{
    const sum=(100*50+(minutes-100)*70)/100;
   alert(sum + "rub");
}//7. Стоимость телефонных разговоров составляет 50 копеек за минуту для первых 100 минут в месяц, каждая следующая минута стоит 70 копеек. Пользователь вводит количество минут, которые он проговорил в течение последнего месяца. Нужно узнать стоимость всех его разговоров за этот месяц.

const distance=+prompt("");
const speed =+prompt("");
const days=+prompt("");

const realDays=(distance/speed)/24;
if(realDays <=days){
    alert("yes");
}else{
    alert("no");
}//Пользователь вводит расстояние между двумя городами по трассе, скорость своего автомобиля в час и количество дней, которое он собрался ехать из одного города в другой без остановок. Нужно узнать, доедет ли он в другой город за то число дней, что заложил.
/*const x = +prompt("");
const y = +prompt("");

if((x+y)%2==0){
    alert("black");
}else{
    alert("white");
}//4. Перед пользователем лежит шахматная доска, первая ее клетка с координатами 1Х1 – черная. Пользователь вводит два числа – координаты X и Y клетки. Нужно определить цвет клетки с этими координатами.
const n=+prompt("");
const clients= n*10;
const time=(17-9)*60;

if(time<clients){
    alert("no");
}else{
    alert("yes");
}//3. В банке работает одна касса, с 8 утра до 17 вечера без обеда. Обслуживание каждого клиента длится 10 минут. Пользователь приходит в банк к 9 утра и видит перед собой N человек в очереди, первый из них только что подошёл к кассе. Нужно узнать по введенному числу N, сможет ли он попасть в кассу до закрытия банка.

/*const a = +prompt("");
const b = +prompt("");
const c = +prompt("");

if (a > b) {
    if (a > c) {
        alert("a");
    }
else {
        alert("c");

}else{

        if (b > c) {
            alert("b");
        }
    else {
        alert("c");
    }
};// 2. Пользователь вводит три числа. Нужно узнать, какое из них является наибольшим.



const a=+prompt("a");
const b=+prompt("b");
if(a%b==0){
    alert("yes");
}else{
    alert("no");
}//1. Пользователь вводит два числа. Нужно узнать, делится ли первое число на второе.

const N=+prompt('');
const symbol=30*70;
alert(Math.ceil(N/symbol));// 9. В книге на каждой странице помещается ровно 30 строк по 70 символов в каждой. Пользователь вводит номер символа от самого начала текста книги – нужно узнать, на какой странице будет напечатан символ с этим номером.


const n=+prompt("salary");
const tax=  +prompt("tax")
const payment = n-tax*100;
const c = n-payment;
alert(payment); //10. Пользователь вводит сумму своего дохода за месяц и ставку подоходного налога в процентах. Вычислить сумму налога, а также ту сумму, которая останется у пользователя после вычета этого налога.
const w=+prompt("width");
const l =+prompt("lenght");
const h=+prompt("height");
alert(2*w*h + 2*l*h);//8. Пользователь вводит размеры комнаты – ширину, высоту и длину. Нужно посчитать площадь стен в этой комнате.

/*const seconds=+prompt("");

alert(Math.floor(seconds/60/60/24));// 7. Пользователь вводит количество секунд. Нужно посчитать, сколько в этих секундах полных дней.


const N=+prompt("");
const B =+prompt("");
alert(N+(Math.random()*(B-N)));//Пользователь вводит два числа А и В. Вывести случайное число в диапазоне от А до В.

/*const N=+prompt("");
const B =+prompt("");
const C=+prompt("");
 alert((N+B+C)/3);//Пользователь вводит три числа. Найти среднее арифметическое этих чисел.


/*const N=+prompt("");
const B =+prompt("");
alert(N-B);// 2. Пользователь вводит два числа. Найти разницу этих чисел.



const N=+prompt("");
let num;
for(let i=0; i<N;i++){
    num = N*2;
}alert(num); //задача Пользователь вводит число. Найти число, в два раза большее, чем введенное им число.*/