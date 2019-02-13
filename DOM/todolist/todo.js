window.onload= function(){
    
    let newTask = document.getElementById('input');
    let addTask = document.getElementById('add');
    let todoList = document.getElementById('todolist');
    
    addTask.onclick = function(){
        
        let li = document.createElement('li'); // <li> is a block element
        
        // Text content of the list element 
        let textSpan = document.createElement('span');
        textSpan.innerText = newTask.value;

        let delButton = document.createElement('button');
        delButton.innerText = 'X';

        delButton.onclick = function (event) {
            console.log(event.target.parentElement);
            event.target.parentElement.remove();
        }
    
        let moveUpButton = document.createElement('button');
        moveUpButton.innerText = '*';
    
        moveUpButton.onclick = function (event) {
            event.target.parentElement.parentElement.insertBefore(
                event.target.parentElement, // insert this element
                event.target.parentElement.previousElementSibling // before this element
            )

        }

        let moveDownButton = document.createElement('button');
        moveDownButton.innerText = '.';
    
        moveDownButton.onclick = function (event) {
            event.target.parentElement.parentElement.insertBefore(
                event.target.parentElement.nextElementSibling, // insert this element,
                event.target.parentElement // after this element
            )
        }

        li.appendChild(delButton);
        li.appendChild(moveUpButton);
        li.appendChild(moveDownButton);
        li.appendChild(textSpan);
        todoList.append(li);
    
    }
}