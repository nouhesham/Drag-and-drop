// "strict";

///THE FIRST TRIAL WRONG CODE (NEEDED FOR ME TO REVISE MY MISTAKES)

// let input = document.querySelector("#textVal");
// let button = document.querySelector(".button");
// let content = document.querySelector(".tasksSection");

// let onhold = document.querySelector(".onHold");
// let review = document.querySelector(".review");
// let approved = document.querySelector(".approved");

// let inputTex;
// let liItem;

// button.addEventListener("click", (e) => {
//   inputTex = input.value;
//   liItem = document.createElement("li");
//   liItem.innerHTML = inputTex;
//   liItem.setAttribute("draggable", true);
//   content.append(liItem);
//   liItem.setAttribute("id", `${inputTex}`);
//   localStorage.setItem("list", JSON.stringify(content.innerHTML));
//   input.value = "";

//   e.preventDefault();
//   liItem.addEventListener("dragstart", dragfun);
// });

// function dragfun(ev) {
//   ev.dataTransfer.setData("text", this.id);
// }

// function allowDrop(ev) {
//   ev.preventDefault();
// }

// function drop(ev) {
//   ev.preventDefault();
//   var data = ev.dataTransfer.getData("text");
//   ev.target.append(document.getElementById(data));
// }
// function cont() {
//   if (onhold.innerHTML) {
//     let item = localStorage.getItem("list", JSON.stringify(onhold.innerHTML));
//     console.log(item);
//   }
// }

// function getItemsFromDOM() {
//   const containers = [content, onhold, review, approved];
//   const items = [];

//   containers.forEach((container) => {
//     const containerName = container.classList[0];
//     const containerItems = container.querySelectorAll("li");

//     containerItems.forEach((item) => {
//       items.push({
//         container: containerName,
//         content: item.innerHTML,
//       });
//     });
//   });

//   return items;
// }

// onhold.addEventListener("dragover", allowDrop);

// onhold.addEventListener("drop", drop);
// review.addEventListener("dragover", allowDrop);
// review.addEventListener("drop", drop);
// approved.addEventListener("dragover", allowDrop);
// approved.addEventListener("drop", drop);
// localStorage.getItem("list");
// content.innerHTML = JSON.parse(localStorage.getItem("list"));

// const storedContent = localStorage.getItem("list");
// if (storedContent.length !== 0) {
//   content.innerHTML = storedContent;

// localStorage.clear();
// cont();

//THE RIGHT CODE

"strict";

let input = document.querySelector("#textVal");
let button = document.querySelector(".button");
let content = document.querySelectorAll(".tasksSection");
let onhold = document.querySelector(".onHold");
let review = document.querySelector(".review");
let approved = document.querySelector(".approved");
let inputTex;
let liItem;

// let title;
// let sectId;

button.addEventListener("click", createLi);

function createLi(e) {
  inputTex = input.value;
  liItem = document.createElement("li");
  liItem.innerHTML = inputTex;
  liItem.setAttribute("draggable", true);
  content[0].append(liItem);
  liItem.setAttribute("id", `${inputTex}`);
  liItem.addEventListener("dragstart", dragfun);
  input.value = "";
  e.preventDefault();
}

function dragfun(ev) {
  ev.dataTransfer.setData("text", this.id);
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.append(document.getElementById(data));
  loadinstorage();
}

content.forEach((cont) => {
  cont.addEventListener("dragover", allowDrop);
  cont.addEventListener("drop", drop);
});
let counter = 1;
let tasks = [];
let obj;

function loadinstorage() {
  content.forEach((cont) => {
    const title = cont.textContent.trim();
    const sectId = cont.id + counter;
    if (title.length !== 0) {
      const obj = { title: title, id: sectId };

      // if (obj.id === sectId) {
      //   const obj = { title: title, id: sectId };
      //   obj["item"] = counter;
      //   counter++;
      // }

      counter++;
    }
    localStorage.setItem("lists", JSON.stringify(tasks));
  });

  //setting it inside the local storage
}

function getfromLocal() {
  let objectTasks = JSON.parse(localStorage.getItem("lists"));
  //looping over the content containers and over each task inside the object
  console.log(objectTasks);
  content.forEach((cont) => {
    for (const key of objectTasks) {
      if (key.id === cont.id) {
        liItem = document.createElement("li");
        liItem.innerHTML = key.title;

        liItem.setAttribute("draggable", true);
        liItem.setAttribute("id", `${inputTex}`);

        cont.appendChild(liItem);

        liItem.addEventListener("dragstart", dragfun);
      }
    }
  });
}

getfromLocal();
// localStorage.clear();
