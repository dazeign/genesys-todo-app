function addTodo(e){
    const input = document.getElementById('input-todo-item')
    const todoSection = document.querySelector('.todo-side')
    if(input.value !== ''){
        //create a div
        const divItem = document.createElement('div');
        //add appropriate classes to the div
        divItem.classList.add('list-items');
        //add a list item to the div and populate the list
        const divInput = document.createElement('input')
        divInput.classList.add('todo-items')
        divInput.setAttribute('value', input.value)
        divInput.setAttribute('disabled', true)
        divItem.appendChild(divInput)

        //add the icon, I couldn't find a good way to do this
        divItem.innerHTML +=`<div class="icons">
                    <img src="check.svg" class="onclick="clearTodo(event)" style="margin-right: 2px; color: #9c1de7;padding-bottom: 2px"></img>
                    <img src="delete.svg" class="onclick="deleteTodo(event)" style="margin-right: 2px; color: #9c1de7;padding-bottom: 2px" ></img>
                    <img src="add.svg" class="onclick="editTodo(event)" style="margin-right: 2px; color: #9c1de7; padding-bottom: 2px;"></i>
                </div>`

        //append created list item to the unordered list 
        todoSection.appendChild(divItem);

        //reset the input text
        input.value = '';  

    }
}
function editTodo(e){
    const input = document.getElementById('input-todo-item');
    const todoInput hi I'm mm = e.target.parentNode.parentNode.children[0]
    todoInput.disabled = false;
    todoInput.addEventListener('keypress', (e)=>{
        if(e.keyCode == 13){
            todoInput.disabled = true
        }
    })
}

function clearTodo(e){
    const todoInput = e.target.parentNode.parentNode.children[0]
    if(!Array.from(todoInput.classList).includes('strike-through')){
        todoInput.classList.add('strike-through')
    }else{
        todoInput.classList.remove('strike-through')
    }
}
function deleteTodo(e){
    const todoSection = e.target.parentNode.parentNode
    todoSection.style.display = 'none'

}
document.querySelector('.submit-button').addEventListener('click',addTodo);


