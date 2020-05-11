function initApp() {
  const spell = document.getElementById("book3");
  spell.addEventListener("click", function () {
    const warap = document.getElementById("wrap");
    warap.style.display = "none";
    const text = document.getElementById("text__book3");
    text.style.visibility = "visible";
  });
}
async function start() {
  const data = (
    await axios.get(
      "https://www.potterapi.com/v1/spells?key=$2a$10$RfcRSuKmboI/wekKSqopceNyVFmIznakgpk..fqf8ZuIGDHFoeEUu"
    )
  ).data;
  function render(data) {
    for (let i in data) {
      const text = document.getElementById("text__book3");
      //text.innerHTML='';
      const ul = document.createElement("ul");
      ul.insertAdjacentHTML(
        `beforeend`,
        `
       <li>${data[i].spell},<p>${data[i].effect}</p>
       </li>
      <p>${data[i].type}
       `
      );

      text.appendChild(ul);
      //console.log(ul);
      const list = data[i].spell;
      let words = list.split("0");
      for (let j = 0; j < words.length; j++) {
        let word = words.shift("");
        console.log(word);
        //render(word)
      }
      //words.sort();
    }
  }
  const box = document.getElementById("box");
  const commonBox = {};
  for (let k in data) commonBox[data[k].type] = 1;
  console.log();
  const boxList = Object.keys(commonBox);
  //console.log(boxList)

  boxList.forEach((type) => {
    const html = `
        <button id="type" data-type=${type}>${type}</button>`;
    box.insertAdjacentHTML("beforeend", html);
  });
  render(data);

  box.addEventListener("click", function (e) {
    e.preventDefault();
    const typeName = e.target.getAttribute("data-type");
    console.log(typeName);
    const filter = data.filter((data) => data.type === typeName);
    console.log(filter);
    render(filter);
  });
}

initApp();
start();
