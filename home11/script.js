function render(list) {
  const box = document.getElementById("box");
  list.forEach((item) => {
    const div = document.createElement("div");
    div.insertAdjacentHTML(
      `beforeend`,
      `
       <button class="btn">${item.name}</button>
       <p>id:${item.id}</p>
       <p>Foundation date${item.start}</p>
       <p>About us:${item.description}</p>
    <div class="shops"></div>
       
       `
    );
    box.appendChild(div);

    const btn = div.querySelector(".btn");
    const divShops = div.querySelector(".shops");

    btn.addEventListener("click", function () {
      const fileName = item.adres;
      // console.log(item.adres)
      loadFile(fileName, function (data) {
        //console.log(data) 
        divShops.innerHTML = "";
        for (let i = 0; i < data.length; i++) {
          const table = document.createElement("table");

          table.insertAdjacentHTML(
            `beforeend`,
            `<table class="shops" >
            <thead><tr><td>Place:</td></tr><td>${data[i].street}</td>
            <tr><td>Area:</td></tr><td>${data[i].area}</td>
            <tr><td>Visitors:</td></tr><td>${data[i].averangeNumberOfCustomers}</td>
            

           <tr> <td>Foundation date:</td></tr></thead> <td>${data[i].startOfWorking}</td><br>
            
            
            
           
           
            </table>
            `);
           
          divShops.appendChild(table)
        }
 let sum=0;
        let num = 0;
        for (let i = 0; i < data.length; i++) {
          num += data[i].area
            sum +=data[i].averangeNumberOfCustomers
        }

        divShops.insertAdjacentHTML(`beforeend`, `
    <span>Total Area:${num}</span><br>
    <span>Total Visitors:${sum}</span>
      `)


        console.log(num)

      });
    });
  });
}
function loadFile(fileName, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", fileName, true);
  xhr.send(null);
  xhr.onload = () => {
    //console.log(xhr.responseText)
    const data = JSON.parse(xhr.responseText);
    //console.log(data)
    //render(data)
    callback(data);
    
  };
}

function load() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "file.json", true);
  xhr.send(null);
  xhr.onload = () => {
    //console.log(xhr.responseText)
    const data = JSON.parse(xhr.responseText);
    //console.log(data)
    render(data);
  };
}
load();






function getNumber() {
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);
  return r + ", " + g + " ," + b;
}
getNumber();




/*{
  
    "time":12.30,
    "latitude": 51.73496163915278, 
    "longitude": -1.0379454413532996
},
{
  
    "time":12.30,
    "latitude": 51.74017571473442, 
    "longitude": -1.3150742602532257 

},
{
    "latitude": 51.7214165686511,
    "longitude": -1.1644147572878725,
    "time":12.30
},
{
  
    "time":12.30,
    "latitude": 51.72145745285658,
     "longitude": -1.2491630482776055
},
{
  
    "time":12.30,
    "latitude": 51.73583824510363,
     "longitude": -1.0940424351649711

},
{
  
    "time":12.30,
    "latitude": 51.71721400063117,
    " longitude": -1.2082082568884593
}

]*/