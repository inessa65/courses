
/*const tab = document.querySelectorAll(".tab");
for (let i = 0; i < tab.length; i++) {

    tab[i].style.display = "none";

}

const tabLinks = document.querySelectorAll(".tabLinks");
for (let k = 0; k < tabLinks.length; k++) {
    
    tabLinks[k].addEventListener("click", function () {
        tab[k].style.display = "block";

    })
}

const one=document.getElementById("one");
let offsetY;
let offsetX;
one.addEventListener('dragstart',function(event){
    offsetY=event.offsetY;
    offsetX=event.offsetX;
})
one.addEventListener('dragend', function(event){
   // console.log(event.pageX, event.pageY)
   one.style.top=(event.pageY- offsetY) + 'px';
   one.style.left=(event.pageX - offsetX)+ 'px';
})*/

/*document.body.onmousemove=function(){
    let e=window.event;
    document.getElementById("one").style.top=e.y;
document.getElementById("one").style.left=e.x;

}*/

/*const btn = document.getElementById("btn");
const table = document.getElementById("table");
btn.addEventListener("click", function () {
    const N = +prompt();
    table.innerHTML = "";
    for (let i = 0; i < N; i++) {

        const tr = document.createElement('tr');
        table.appendChild(tr);
        tr.innerHTML = `<td>строка № </td>
        <td id="td">${i + 1}</td>
        <td><button class="btn1">+1</button></td>`
    }
    const td=document.querySelectorAll("td");
for (let j=0;j<td.length;j++){
    td[j].addEventListener("contextmenu",function(e){
        e.preventDefault();
        const p=document.createElement("p");
        td[j].appendChild(p);
        p.innerHTML=`<p> green</p>
        <p> red</p>
        <p> green</p>`
    })
}


    const btn1 = document.querySelectorAll(".btn1");
    for (let k = 0; k < btn1.length; k++) {
        btn1[k].addEventListener("click", function () {
         let g=Number(btn1[k].parentNode.previousElementSibling.innerText);
         //console.log(g);
         g+=1
         btn1[k].parentNode.previousElementSibling.innerText=g;

        })
    }
})

const a = [];
for (let i = 0; i < 120; i++) {
    a.push({
        x: Math.round(Math.random() * 10),
        y: Math.round(Math.random() * 10)
    });
}

const b=a.filter(point=>(point.x+point.y)===10)
console.log(b);
console.log(a)
const b = a.filter(point => point.x < 5 && point.y < 5);
console.log(b)



const b= a.filter(function(point){
    return point.x<5 && point.y<5;
})
 console.log(b)


for(let i=0; i<a.length; i++){


    if( a[i].x<5 && a[i].y<5){
        b.push(a[i]);
    }
}


const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}
let f=[];
const N=+prompt();

for(let i =0; i<N; i++){
    f.push(i);
}
console.log(f)





const getMultiplication = (a, b) => (a * b)





let x = getMultiplication(30, 40);
console.log(x)
console.log(getMultiplication(10, 20))

const getRandom = function (x) {
    const a = x - 100;
    const b = x + 100
    return Math.round(Math.random() * (b - a) + a);
}
console.log(getRandom(400));

let g = getRandom(200);
const u = getRandom(400);
console.log(getMultiplication(g, u));
console.log(getMultiplication(getRandom(1000), getRandom(0)));*/
