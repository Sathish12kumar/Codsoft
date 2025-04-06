const firstbtn = document.querySelectorAll(".menu .fruit button");
let items1 = document.querySelectorAll(".menu .box1 .item");
let viewBox1 = document.querySelector(".menu .fruit .totalItem");

let nav = document.querySelector("nav h1 .navbtn");
nav.onclick = () => {
  let parent = document.querySelector("nav");
  parent.classList.toggle("clicked");
};

let homeslider = document.querySelectorAll(".home .frame img");
let scrollsl = document.querySelector(".home .img");
setInterval(homeSliders, 3000);
let index = 0;

function homeSliders() {
  index++;
  if (index < 0 || index > homeslider.length - 1) {
    index = 0;
  }
  scrollsl.style.transform = `translateX(${-index * 500}px)`;
}

let currentPosi = 0;
let widthItem = items1[0].clientWidth;
firstbtn[0].addEventListener("click", () => {
  if (currentPosi <= 0) {
    currentPosi = 0;
  } else {
    currentPosi--;
    viewBox1.style.transform = `translateX( ${-currentPosi * widthItem}px )`;
  }
});

firstbtn[1].addEventListener("click", () => {
  if (currentPosi > items1.length - 2) {
    currentPosi = items1.length - 1;
  } else {
    currentPosi++;
    viewBox1.style.transform = `translateX( ${-currentPosi * widthItem}px )`;
  }
});

let items2 = document.querySelectorAll(".menu .box2 .item");
const secondbtn = document.querySelectorAll(".menu .vegetable button");
let viewBox2 = document.querySelector(".menu .vegetable .totalItem");

let itemPosi = 0;
secondbtn[0].addEventListener("click", () => {
  if (itemPosi <= 0) {
    itemPosi = 0;
  } else {
    itemPosi--;
    viewBox2.style.transform = `translateX( ${-itemPosi * widthItem}px )`;
  }
});

secondbtn[1].addEventListener("click", () => {
  if (itemPosi > items1.length - 2) {
    itemPosi = items1.length - 1;
  } else {
    itemPosi++;
    viewBox2.style.transform = `translateX( ${-itemPosi * widthItem}px )`;
  }
});
