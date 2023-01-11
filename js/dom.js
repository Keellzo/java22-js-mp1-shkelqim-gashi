const add = 125;
let increaseHeight = 10;
for (let i = 1; i <= 5; i++) {
  const h1 = document.createElement("h1");
  document.body.append(h1);

  h1.style.marginLeft = "33%";
  h1.style.width = "600px";
  h1.style.color = "hsl(240, 100%, 75%)";
  h1.style.textAlign = "center";
  h1.style.fontSize = `${increaseHeight}px`;
  h1.style.height = `${increaseHeight}px`;

  const changingColor = add + 15 * i;
  h1.style.background = `hsl(${changingColor}, 65%, 75%)`;
  increaseHeight += 10;
  h1.append(`Rad ${i}`);
}

const container = document.createElement("div");
document.body.append(container);
container.style.border = "1px solid black";
container.style.marginLeft = "33%";
container.style.display = "flex";
container.style.width = "600px";
container.style.height = "300px";
container.style.justifyContent = "space-around";

const miniContainerOne = document.createElement("div");
const miniContainerTwo = document.createElement("div");
const miniContainerThree = document.createElement("div");

miniContainerOne.style.display = "flex";
miniContainerOne.style.flexDirection = "column";
miniContainerOne.style.height = "154px";
miniContainerOne.style.width = "33px";
miniContainerOne.style.marginTop = "60px";
miniContainerOne.style.border = "6px solid";
miniContainerOne.style.borderColor = "hsl(240, 100%, 75%)";

miniContainerTwo.style.display = "flex";
miniContainerTwo.style.flexDirection = "column";
miniContainerTwo.style.height = "154px";
miniContainerTwo.style.width = "33px";
miniContainerTwo.style.marginTop = "60px";
miniContainerTwo.style.border = "6px solid";
miniContainerTwo.style.borderColor = "hsl(240, 100%, 75%)";

miniContainerThree.style.display = "flex";
miniContainerThree.style.flexDirection = "column";
miniContainerThree.style.height = "154px";
miniContainerThree.style.marginTop = "60px";
miniContainerThree.style.width = "33px";
miniContainerThree.style.border = "6px solid";
miniContainerThree.style.borderColor = "hsl(240, 100%, 75%)";

let index = 0;
for (let n = 0; n <= 9; n++) {
  const p = document.createElement("p");
  container.append(miniContainerOne);
  miniContainerOne.append(p);

  p.style.fontSize = "small";
  p.style.display = "flex";
  p.style.margin = "0px";
  if (index == 4) {
    p.style.background = "hsl(240, 100%, 75%)";
    p.style.color = "white";
  } else if (index % 2 == 1) {
    p.style.background = "black";
    p.style.color = "white";
  }

  index++;
  p.append(n);
}

let indexTwo = 0;
for (let j = 9; j >= 0; j--) {
  const p = document.createElement("p");
  container.append(miniContainerTwo);
  miniContainerTwo.append(p);

  p.style.display = "flex";
  p.style.justifyContent = "center";
  p.style.fontSize = "small";
  p.style.margin = "0px";

  if (indexTwo == 1) {
    p.style.background = "hsl(240, 100%, 75%)";
    p.style.color = "white";
  } else if (indexTwo % 2 == 1) {
    p.style.background = "black";
    p.style.color = "white";
  }

  indexTwo++;
  p.append(j);
}

const numbers = [
  "ett",
  "två",
  "tre",
  "fyra",
  "fem",
  "sex",
  "sju",
  "åtta",
  "nio",
  "tio",
];

let indexThree = 0;
for (let k = 0; k < numbers.length; k++) {
  const p = document.createElement("p");
  container.append(miniContainerThree);
  miniContainerThree.append(p);

  p.style.display = "flex";
  p.style.fontSize = "small";
  p.style.margin = "0px";
  p.style.justifyContent = "end";

  if (indexThree == 5) {
    p.style.background = "hsl(240, 100%, 75%)";
    p.style.color = "white";
  } else if (indexThree % 2 == 0) {
    p.style.background = "black";
    p.style.color = "white";
  }

  indexThree++;
  p.append(numbers[k]);
}
