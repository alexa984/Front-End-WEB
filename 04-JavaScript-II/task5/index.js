solve = (sColor1, sColor2) => {
  const paragraphs = document.getElementsByTagName("p");
  const headerTitles = document.getElementsByClassName("headertitle");

  document.title = `${paragraphs.length} параграфа, ${headerTitles.length} елемента с клас <headertitle>`;

  for (let element of paragraphs) {
    element.style.background = sColor1;
  }

  for (let element of headerTitles) {
    element.style.background = sColor2;
  }
};
const c1 = "#ffda96";
const c2 = "#d3b3f5";

document.addEventListener("DOMContentLoaded", () => solve(c1, c2));
