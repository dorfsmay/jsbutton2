console.log("👋 🌎");
const root = document.getElementById("root");

function handleClick(e) {
  console.dir(e)
}


let button = document.createElement("button");
root.appendChild(button);
button.innerText = "X";
button.classList.add("square");

button.setAttribute("onclick", "handleClick(this)")

