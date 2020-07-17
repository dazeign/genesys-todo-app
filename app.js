function addTodo(e) {
  const input = document.getElementById("input-todo-item");
  const todoSection = document.querySelector(".todo-side");
  if (input.value !== "") {
    //create a div
    const divItem = document.createElement("div");
    //add appropriate classes to the div
    divItem.classList.add("card");
    //add a list item to the div and populate the list
    const divInput = document.createElement("input");
    divInput.classList.add("todo-input");
    divInput.setAttribute("value", input.value);
    divInput.setAttribute("disabled", true);
    divItem.appendChild(divInput);

    //add the icon, I couldn't find a good way to do this
    divItem.innerHTML += `
    <img src="add.svg" alt="edit" onclick="editTodo(event)"  class="input-svg"/>
    <img src="delete.svg" alt="delete" onclick="deleteTodo(event)"  class="input-svg"/>
    <img src="check.svg" alt="delete" onclick="clearTodo(event)"  class="input-svg"/>
                `;

    //append created list item to the unordered list
    todoSection.appendChild(divItem);

    //reset the input text
    input.value = "";
  }
}
function editTodo(e) {
  const todoInput = e.target.parentNode.children[0];
  todoInput.disabled = false;
  todoInput.addEventListener("keypress", (e) => {
    if (e.keyCode == 13) {
      todoInput.disabled = true;
    }
  });
}

function clearTodo(e) {
  const todoInput = e.target.parentNode.children[0];
  if (!Array.from(todoInput.classList).includes("strike-through")) {
    todoInput.classList.add("strike-through");
  } else {
    todoInput.classList.remove("strike-through");
  }
}
function deleteTodo(e) {
  const todoSection = e.target.parentNode;
  todoSection.style.display = "none";
}
