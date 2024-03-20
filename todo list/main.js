const inputBox = document.getElementById("input-box");
const addButton = document.querySelector("#btn-add");
const todoContainer = document.getElementById("todo-container");


addButton.addEventListener('click',() => {
    if(inputBox.value.trim().length == ''){
    alert('You must write something');
    }else{

    const todoItemContainer = document.createElement("div");
    todoItemContainer.classList.add('todo-item-container');
    todoContainer.appendChild(todoItemContainer);

    //create p element add id = todo-text
    const todoText = document.createElement("p");
    todoText.id = 'todo-text';
    todoText.innerText = inputBox.value;
    todoItemContainer.appendChild(todoText);

    //create button edit 
    const editButton = document.createElement('button');
    editButton.id = 'edit-button';

    const editImage = document.createElement('img');
    editImage.src = 'images/edit.png';

    editButton.appendChild(editImage);
    todoItemContainer.appendChild(editButton);
    //add click to event to edit-button
    editButton.addEventListener('click',() =>{
        inputBox.value = todoText.innerText;
        const parent = editButton.parentElement;
        parent.parentElement.removeChild(parent);
    })
   
    
    const deleteButton = document.createElement('button');
    deleteButton.id = 'delete-button';

    const deleteImage = document.createElement('img');
    deleteImage.src = 'images/delete.png';

    deleteButton.appendChild(deleteImage);
    todoItemContainer.appendChild(deleteButton);
    //add click to event to delete-button
    deleteButton.addEventListener('click',() =>{
        const parent = deleteButton.parentElement;
        parent.parentElement.removeChild(parent);
    })

    inputBox.value = " ";

    }
});
