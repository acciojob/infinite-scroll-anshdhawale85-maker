let listitem = document.getElementById("infi-list");

let itemcount = 0

function listitem() {
    itemcount++

    let li = document.createElement("li")

    li.textContent = "Item" + itemcount;

    listitem.appendChild(li)
}

for(let i = 0; i < 10; i++) {
    createListItem()
}

listitem.addEventListener( "scroll", function () {
    if(listitem.scrollTop + listitem.clientHeight >= listitem.scrollHeight - 2) {
        createListItem()
        createListItem()
    }
})