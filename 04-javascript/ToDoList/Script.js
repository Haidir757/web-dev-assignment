let btnAdd = document.getElementById("btn-add");
let item = document.getElementById("item");
let list = document.getElementById("list");


btnAdd.addEventListener("click", () => {
    var listItem = document.createElement("li");
    var removeItem = document.createElement("button");
    listItem.classList.add("list-style");
    removeItem.classList.add("remove-style");
    listItem.innerText = item.value;
    removeItem.innerText = "Remove";
    list.appendChild(listItem);
    listItem.appendChild(removeItem);

    removeItem.addEventListener("click", function() {
        list.removeChild(listItem)
    })
});