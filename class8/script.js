const items = [
  {
    name: "ball",
    price: 349
  },
  {
    name: "dall",
    price: 3,
    color: "green"
  },
  {
    name: "dall",
    price: 389,
    color: "red"
  }
];
const ul = document.getElementById("elem");
ul.innerHTML = "";
items.forEach(({ price, color, name }) => {
  ul.insertAdjacentHTML(
    `beforeend`,
    `<li>${name}</li>
  <li>${price}</li>
  <li>${color}</li>`
  );
});

const chekbox = document.getElementsByClassName("check");
for (let i = 0; i < chekbox.length; i++) {
  chekbox[i].addEventListener("change", function() {
    this.parentElement.classList.toggle("selected");
  });
}

/*const ul=document.getElementById("elem");

  ul.insertAdjacentHTML(`beforeend`,
  `<li>hi <p>hgfdsxcvb  jhgfd jhgv</p>
  </li>
  <li>bu <a id="a" href="http://odinokun.com/2020-03-02-sozdanie-arkadnoj-igry-na-vanilnom-javascript.html">hello</a></li>
  <li>go</li>`);

const a=document.getElementById("a");
a.addEventListener('click',function(e) {
  e.preventDefault();
})
const items = [{
    name: "ball",
    price: 349
  },
   {
    name: "dall",
    price: 3,
    color:"green"
  },
   {
    name: "dall",
    price: 389,
    color:"red"


  },
]
const ul=document.getElementById("elem");
ul.innerHTML ="";
items.forEach(({price,color,name})=> {
  ul.insertAdjacentHTML(`beforeend`,
  `<li>${name}</li>
  <li>${price}</li>
  <li>${color}</li>`);
});
/*const btn1 = document.getElementById('butt1');
const btn2 = document.getElementById('butt2');

function render(items) {


  const ul = document.getElementById('elem');
  ul.innerHTML = "";
  items.forEach(({ name, price,color }, i) => {
    ul.insertAdjacentHTML(`beforeend`,
      `<li> <h2>${name}</h2>
  <p>Price:${price}.<button data-element="add to cart" data-index="${i}">add</button>
  <p>Color:${color}</li>
  `);
  })
  /*ul.addEventListener('click', function (e) {
    if (e.target.hasAttribute('data-element')) {
      const index = e.target.getAttribute('data-index') * 1;
      console.log(items[index]);
    }
  })
}
render(items);
btn1.addEventListener('click', function () {
  const sortedItems = [...items].sort((a, b) => a.price - b.price);
  render(sortedItems);
});
*/

/*const table = document.getElementById('tbody');
let N = 10;
for (let i = 0; i < N; i++) {
  const tr = document.createElement('tr');
  for (let i = 0; i < N; i++) {
    const td = document.createElement('td')
    td.textContent = '';
    tr.appendChild(td);
    table.appendChild(tr);
  }
}function color(td){
  const setterTd =td;
  setterTd.classList.add('color');
}

table.addEventListener("click", function(e){
  const target= e.target;
  color(target);
});

const p=document.getElementById('pText');
const b =document.getElementById('bText');
p.addEventListener('click', function(){
  alert(p.innerText);
});
b.addEventListener('click', function(){
  b.stopPropagation();
});*/

/*const link=document.querySelector('a');
link.addEventListener('click',function(e) {
  e.preventDefault();
});

const N= prompt("");
const table=document.getElementById("list");

for (let i = 0; i < N; i++) {
    const tr = document.createElement('tr');
    list.appendChild(tr);
    tr.innerHTML = `<td id="td">строка${i}</td> <td><button id="butt">x</button></td>`
};

const elem =document.getElementById("butt");
for(let i=0; i<butt.length; i++){
const btn= butt[i];
btn.addEventListener('click', function(){
this.parentNode.parentNode.remove();
}
)
}

/*const el =document.getElementById("first");
const e1 =document.getElementById("second");
const e2=document.getElementById("butt");

e2.addEventListener('click', function() {
    window.alert(Number(el.value) + Number(e1.value ) );
})


/*const elem = document.getElementById("button");

elem.addEventListener("click", function() {
  elem.insertAdjacentHTML(
    `afterend`,
    `<input id="input" type="text"> <button id="butt">click</button>`
  );
  const secondButton = document.getElementById("butt");
  secondButton.addEventListener("click", function() {
    const e1 = document.getElementById("input");

    window.alert(`hello,${e1.value}`);
  });
});

/*const elem =document.getElementById("butt");
const elem1 =document.getElementById("input");

const clickHere =function(){
    window.alert(`hello,${elem1.value}`);
}
elem.addEventListener('click', clickHere);

const elem =document.getElementById("butt");
const clickHere =function(){
    window.alert('hello');

}
elem.addEventListener('click', clickHere);*/
