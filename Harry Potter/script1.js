function initApp() { 
    const text=document.getElementById("text__book2")
  const name = document.getElementById("book2");
  name.addEventListener("click", function () {
     
    text.style.visibility = 'visible';
    const wrap = document.getElementById("wrap");

    wrap.style.display = 'none';
    //renderList()
    
  });
}

function load() {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://www.potterapi.com/v1/characters?key=$2a$10$RfcRSuKmboI/wekKSqopceNyVFmIznakgpk..fqf8ZuIGDHFoeEUu",
    true
  );
  xhr.send(null);
  xhr.onload = () => {
    //console.log(xhr.responseText)
    const data = JSON.parse(xhr.responseText);
    //console.log(data);
    //renderList(data)
 

  function renderList() {
    const b = data;
//console.log(b)
 const text = document.getElementById("text__book2");
    for (let i = 0; i < b.length; i++) {
      //console.log(b);
      const div = document.createElement("div");
    div.insertAdjacentHTML(`beforeend`, ` <p>${b[i].name}`);
    //console.log(b[i].name);
    text.appendChild(div);
    }
   
    const btn1=document.getElementById("btn1");
    btn1.addEventListener('dblclick', function(){
        const wrap = document.getElementById("wrap");
      wrap.style["display"] = "flex";
      text.style["visibility"] = "hidden";
    })
  }
  renderList()
}
};

load();
initApp()
