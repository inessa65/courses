const human = [
  {
    name: "Холопова Ефросинья Мефодиевна",
    age: 22,
    mark: 9
  },
  {
    name: "Петрищева Владлена Борисовна",
    age: 24,
    mark: 8
  },
  {
    name: "Козарь Аристарх Елизарович",

    age: 24,
    mark: 7
  }
];
//console.log(human);
const btn = document.getElementById("button");
const tb = document.getElementById("tbody");
function render(human) {
 tb.innerHTML="";
  for (let i = 0; i < human.length; i++) {
       let row = document.createElement("tr");
    row.innerHTML += `<td>${human[i].name}</td>
    <td>${human[i].age}</td>
    <td>${human[i].mark}</td>`;
    tb.appendChild(row);
  }


  
}
render(human);
  btn.addEventListener("click", function() {
    const sortedHuman = [...human].sort((a, b) => a.mark - b.mark);
    render(sortedHuman);
  });
