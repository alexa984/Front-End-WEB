let content = [
  {
    'Evidence Rating': "A",
    'Effect': "Power Output",
    'Efficacy': "3 Stars",
    'Consensus': "80% 18 studies",
    'Comments':
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    'Evidence Rating': "B",
    'Effect': "Weight",
    'Efficacy': "4 Stars",
    'Consensus': "100% 65 studies",
    'Comments':
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
];


generateTableHead = (table, columnNames) => {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (const name of columnNames) {
    const th = document.createElement("th");
    const text = document.createTextNode(name);
    th.appendChild(text);
    row.appendChild(th);
  }
}

generateTable = (table, content) => {
  for (let index=0; index<content.length; index++){
    const element = content[index];
    let row = table.insertRow();
    row.setAttribute("id", `tableRow${index}`)
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

swapRows = () => {
  let currentFirstRow = document.getElementById("tableRow0");
  let currentSecondRow = document.getElementById("tableRow1");
  currentSecondRow.parentNode.insertBefore(currentSecondRow, currentFirstRow);
  currentFirstRow.setAttribute("id", "tableRow1");
  currentSecondRow.setAttribute("id", "tableRow0");
}

let table = document.createElement('table');
table.setAttribute("border", "1");

let tableHeadNames = Object.keys(content[0]);

generateTableHead(table, tableHeadNames);
generateTable(table, content);

let caption = table.createCaption();
caption.innerText = "Table caption";

document.body.appendChild(table);

let button = document.createElement('button');
button.innerText = "Swap rows";
button.onclick = swapRows;

document.body.appendChild(button);
