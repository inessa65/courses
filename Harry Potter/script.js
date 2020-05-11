const school = document.getElementById("book1");
const text = document.getElementById("text");
const btn = document.getElementById("btn");
//const school2=document.getElementById("book2")
function load() {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://www.potterapi.com/v1/houses?key=$2a$10$RfcRSuKmboI/wekKSqopceNyVFmIznakgpk..fqf8ZuIGDHFoeEUu",
    true
  );
  xhr.send(null);
  xhr.onload = () => {
    //console.log(xhr.responseText)
    const data = JSON.parse(xhr.responseText);
    //console.log(data);
    school.addEventListener("click", function () {
        text.style.visibility = 'visible';
      const wrap = document.getElementById("wrap");

      wrap.style["display"] = "none";

      const a = data;
      for (let i = 0; i < a.length; i++) {
        const div = document.createElement("div");

        div.insertAdjacentHTML(
          `beforeend`,
          `
        <div  >
        <p>${a[i].name}</p>
        <p>${a[i].members}</p></div>
       `
        );
        text.appendChild(div);
        //console.log(b)
      }
    });

    const btn = document.getElementById("btn");
    btn.addEventListener("dblclick", function () {
      const wrap = document.getElementById("wrap");
      wrap.style["display"] = "flex";
      const text = document.getElementById("text");

      text.style["visibility"] = "hidden";
      console.log(text);
    });
  };
}
load();
