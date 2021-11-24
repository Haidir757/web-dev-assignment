// let btnAdd = document.getElementById("btn-add");
// let item = document.getElementById("item");
// let list = document.getElementById("list");


// btnAdd.addEventListener("click", () => {
//     var listItem = document.createElement("li");
//     var removeItem = document.createElement("button");
//     listItem.classList.add("list-style");
//     removeItem.classList.add("remove-style");
//     listItem.innerText = item.value;
//     removeItem.innerText = "Remove";
//     list.appendChild(listItem);
//     listItem.appendChild(removeItem);

//     removeItem.addEventListener("click", function() {
//         list.removeChild(listItem)
//     })
// });

const inputItem = document.getElementById('item');
const btnAddItem = document.getElementById('btn-add');
const listContainer = document.querySelector('.list');
const database = new Map();

btnAddItem.addEventListener('click', () => {
    const ITEM_KEY = inputItem.value.toUpperCase();
    const ITEM_VALUE = inputItem.value;

    const listItem = document.createElement('li');
    const textItem = document.createElement('p');
    const btnDelete = document.createElement('button');
    const counter = document.createElement('button');
    var num = 1;
    btnDelete.classList = "fas fa-trash remove";
    counter.classList = "counter-btn";
    textItem.classList = "item button";

    // WARN: Handle error, empty input
    if (ITEM_VALUE === "") {
        alert("Item Name can't be blank");
        inputItem.focus();
        return;
    }
    //Check for duplication
    if (database.has(ITEM_KEY)) {
        const getCounter = document.getElementById(ITEM_KEY);
        num = Number(getCounter.textContent);
        getCounter.textContent = num + 1;
        inputItem.value = "";
        inputItem.focus();
        return;
    }
    counter.textContent = num;
    counter.setAttribute("id", ITEM_KEY);

    database.set(ITEM_KEY, ITEM_VALUE);
    listItem.classList.add("list-item"); // NOTE: Add Class

    textItem.textContent = ITEM_VALUE;

    listItem.textContent = ITEM_VALUE;
    listItem.append(btnDelete, counter);
    listContainer.appendChild(listItem);

    btnDelete.addEventListener("click", () => {
        let conf = confirm("Are you sure want to remove the item?");
        if (conf) {
            let getCounter = document.getElementById(ITEM_KEY);
            if (getCounter.textContent === "1") {
                listContainer.removeChild(listItem);
            } else {
                num = Number(getCounter.textContent);
                getCounter.textContent = num - 1;
            }
        }
    });
    inputItem.value = "";
    inputItem.focus();
});

// const inputItem = document.getElementById('input-item');
// const btnAddItem = document.getElementById('btn-add-item');
// const listContainer = document.querySelector('.list');

// const database = new Map();
// btnAddItem.addEventListener('click', () => {
//     const ITEM_KEY = inputItem.value.toUpperCase();
//     const ITEM_VALUE = inputItem.value;

//     // NOTE: Create element
//     const listItem = document.createElement('li');
//     const textItem = document.createElement('p');
//     const btnDelete = document.createElement('button');
//     const counter = document.createElement('button');

//     // WARN: Handle error, empty input
//     if (ITEM_VALUE === '') {
//         alert("Item Name can't be blank");
//         inputItem.focus();
//         return;
//     }

//     // WARN: Check for duplication
//     if (database.has(ITEM_KEY)) {
//         alert(`You already have ${ITEM_VALUE}`);
//         inputItem.value = '';
//         inputItem.focus();
//         return;
//     }

//     // NOTE: Add the new item to database
//     database.set(ITEM_KEY, ITEM_VALUE);

//     // NOTE: Add attribute
//     listItem.classList.add('list-item'); // NOTE: Add Class

//     // NOTE: Add value
//     textItem.textContent = ITEM_VALUE;
//     btnDelete.textContent = 'Delete';

//     // NOTE: The counter should be dynamicly show how much do we have for this item
//     counter.textContent = 5;

//     // NOTE: Combine elements
//     listItem.append(textItem, btnDelete, counter);
//     listContainer.appendChild(listItem);

//     // NOTE: Handle click event for delete button
//     btnDelete.addEventListener('click', () => {
//         listContainer.removeChild(listItem);
//     });

//     inputItem.value = '';
//     inputItem.focus();
// });