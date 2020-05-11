let table = document.querySelector('#table');
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [7, 8, 9]];

fillTable(table, arr);

function fillTable(table, arr) {
	for (var i = 0; i < arr.length; i++) {
		let tr = document.createElement('tr');
			table.appendChild(tr);
		for (var j = 0; j < arr[i].length; j++) {
			let td = document.createElement('td');
			td.innerHTML = arr[i][j];
			tr.appendChild(td);
		}
		
	
	}
}

/*var sep
function startTime()
{
var tm=new Date();
var h=tm.getHours();
var m=tm.getMinutes();
var s=tm.getSeconds();
//m=checkTime(m);
sep= sep == ':' ? ' ' : ':'
document.getElementById('clock').innerHTML=h+sep+m+sep+s

t=setTimeout('startTime()',500);
}
function checkTime(i)
{
if (i<10)
{
i="0" + i;
}
return i;
}
startTime()



/*onload= function(){
    setInterval(
     function(){
         var d = new Date();
         document.getElementById("clock").innerHTML = d.toLocaleTimeString();
     }
   , 1000);
 };
 

  function checkTime(i)
 {
 i=i<10 ?'0'+i:i;
 return i;
 }

/*function showTime(){
    let now = new Date();
    let hours = now.getHours(); // 0-23
    let min = now.getMinutes(); // 0-59
    let sec = now.getSeconds(); // 0-59
    let ms = now.getMilliseconds(); // 0-1000

    timetik.innerHTML = sec%2 ? `${hours}:${format(min)}:${format(sec)}:${ms}` : `${hours} ${format(min)} ${format(sec)} ${ms}`;

};
*/

/*var mainObj = [
    {name: "Belarus ",
    area: 400,
    population: "10 millions",
    language: "bel",
    code: +375,
    img: "ddd"
        
    },
    {
        name:"Litva",
        area:200,
        population:"8 millions",
        language:"lit",
        code:+654,
        img :"https://img2.wbstatic.net/tm/new/6070000/6072374-1.jpg"
    },
    {
        name:"Brazil",
        area:900,
        population:"22 millions",
        language:"brz",
        code:+543,
        img:"bed.png"
    }
];
var k = '<tbody>'
for(i = 0;i < mainObj.length; i++){
    k+= '<tr>';
    k+= '<td>' + mainObj[i].name + '</td>';
    k+= '<td>' + mainObj[i].area + '</td>';
    k+= '<td>' + mainObj[i].population + '</td>';
    k+= '<td>' + mainObj[i].language + '</td>';
    k+= '<td>' + mainObj[i].img  + '</td>';
    k+= '</tr>';
}
k+='</tbody>';
document.getElementById('tableData').innerHTML = k;*/

/*let arr = [
    (chair = {
        name: "chair",
        price: 45,
        numbers: 1,
        description: "small ",
        img: "https://sun9-47.userapi.com/c856520/v856520906/b7550/IhF-5Gli7pY.jpg"
    }),
    (bed = {
        img:
            "https://st.hzcdn.com/fimgs/6ec1c17100563bae_7579-w312-h312-b0-p0--sovremennyy-.jpg",
        name: "bed",
        price: 65,
        numbers: 98,
        description: "small "
    }),
    (sofa = {
        name: "sofa",
        price: 75,
        numbers: 8,
        description: "huge ",
        img:
            "https://luxedition.ru/upload/images-info/908/908e447acf1a90c484f022fe65933654.jpg"
    })
];

const ul = document.getElementById("ul");
for (let i = 0; i < arr.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = `<img  src= "${arr[i].img}"><br>
${arr[i].name}<br>
Numbers:${arr[i].numbers}<br>
Descriptions:${arr[i].description}<br>
Price:${arr[i].price}<br>`;
    ul.appendChild(li);
    //function fillUl(ul, arr) {
    //for (var i = 0; i < arr.length; i++) {
    //var li = document.createElement('li');
    //li.innerText = arr;
    //ul.appendChild(li);
    //	}
    //for (var j = 0; j < 4; j++) {
    //var li = document.createElement('li');
    //li.innerHTML = arr[i][j];

    //ul.appendChild(li);
}

/*let country=[
    Belarus={
name:"Belarus ",
area:400,
population:"10 millions",
language:"bel",
code:+375,
img:"ddd"
    },
    Litva ={
        name:"Litva",
        area:200,
        population:"8 millions",
        language:"lit",
        code:+654,
        img:"ddd"
   },
   Brazil ={
    name:"Brazil",
    area:900,
    population:"22 millions",
    language:"brz",
    code:+543,
    img:"ddd"
}

];*/
/*let country = [
    Belarus = {
        name: "Belarus ",
        area: 400,
        population: "10 millions",
        language: "bel",
        code: +375,
        img: "ddd"
    },
    Brazil = {
        name: "Brazil",
        area: 900,
        population: "22 millions",
        language: "brz",
        code: +543,
        img: "ddd"
    }

]
//let a = [country];
country.forEach((a) =>{ 
const elem = document.getElementById("list");
elem.insertAdjacentHTML('beforeend', `<table> <tr><th>Name </th>  
    <th>Area</th> <th>Population</th> <th>Language</th> <th>Code</th> <th>img</th></tr>
     <tr><td>${a.name}</td> <td>${a.area}</td><td>${a.population}</td> <td>${a.language}</td> <td>${a.code}</td> <td>${a.img}</td></tr></table`);

});      
/*for (let i = 0; i < a; i++) {
    const tr = document.createElement('tr');
    list.appendChild(tr);
    for (let j = 0; j < a; j++) {
        const td = document.createElement('td');
        tr.appendChild(td);
        td.innerText = `${a.name}`;

    }

console.log(list);
}
https://img1.pngindir.com/20180302/aae/kisspng-flag-of-brazil-flag-of-colombia-flag-of-paraguay-flag-of-brazil-5a998c23b0bb20.0695533015200123237239.jpg
*/
//first ex.

/*let country = [
    (Belarus = {
        name: "Belarus ",
        area: 400,
        population: "10 millions",
        language: "bel",
        code: +375,
        img:
            " https://www.mirprognozov.ru/assets/components/phpthumbof/cache/1456309855-1525-350x350.9e66649cca87f4eb37560e89d49f199e.png"
    }),
    (Brazil = {
        name: "Brazil",
        area: 900,
        population: "22 millions",
        language: "brz",
        code: +543,
        img:
            "https://img1.pngindir.com/20180302/aae/kisspng-flag-of-brazil-flag-of-colombia-flag-of-paraguay-flag-of-brazil-5a998c23b0bb20.0695533015200123237239.jpg"
    }),
    (Russia = {
        name: "Russia",
        area: 900,
        population: "60 millions",
        language: "rus",
        code: +894,
        img:
            "http://vincolor.ru/components/com_jshopping/files/img_products/thumb_P01565.jpg"
    })
];

const table = document.getElementById("tbody");
for (let i = 0; i < country.length; i++) {
    let row = document.createElement("tr");
    row.innerHTML += `    
<td>${country[i].name}</td><td>${country[i].area}</td><td>${country[i].population}</td>
<td>${country[i].language}</td> <td>${country[i].code}</td><td><img src="${country[i].img}"</td>`;
    table.appendChild(row);
}
/*('beforeend', `
    <th>Area</th> <th>Population</th> <th>Language</th> <th>Code</th> <th>img</th></tr>
     <tr><td>${a.name}</td> <td>${a.area}</td><td>${a.population}</td> <td>${a.language}</td> <td>${a.code}</td> <td>${a.img}</td></tr></table`);

};


*/
