const importantThings = [];
const priorityList = document.querySelector('ol');
const inputField = document.querySelector("#important-thing");
const inputButton = document.querySelector("#add-to-list");
const priorityInput = document.querySelector("#priority");
const orderListButton = document.querySelector('#orderList');

function AddToImportantThings() {
    const inputValue = inputField.value;
    const priorityValue = priorityInput.value;

    const newItem = { text: inputValue, priority: priorityValue };

    newItem.text = inputValue;
    newItem.priority = priorityValue;

    importantThings.push(newItem);
    console.log(importantThings);

    const newLi = document.createElement('li');
    const textSpan = document.createElement('span');
    const prioritySpan = document.createElement('span');
    const deleteButton = document.createElement('button');

    textSpan.textContent = inputValue;
    prioritySpan.textContent = `Priority: ${priorityValue}`;
    deleteButton.textContent = 'Delete';

    newLi.appendChild(prioritySpan);
    newLi.appendChild(textSpan);
    newLi.appendChild(deleteButton);
    priorityList.appendChild(newLi);

    inputField.value = '';
    priorityInput.value = '';
}

function reorderList() {
    importantThings.sort((a, b) => a.priority - b.priority);
    console.log(importantThings);
    priorityList.innerHTML = '';
    importantThings.forEach((item) => {
        const newLi = document.createElement('li');
        const textSpan = document.createElement('span');
        const prioritySpan = document.createElement('span');
        const deleteButton = document.createElement('button');

        textSpan.textContent = item.text;
        prioritySpan.textContent = `Priority: ${item.priority}`;
        deleteButton.textContent = 'Delete';

        newLi.appendChild(textSpan);
        newLi.appendChild(prioritySpan);
        newLi.appendChild(deleteButton);
        priorityList.appendChild(newLi);
    });
}

inputButton.addEventListener('click', AddToImportantThings);
console.log(importantThings);

orderListButton.addEventListener('click', reorderList);
