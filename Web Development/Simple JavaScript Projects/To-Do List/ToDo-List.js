let input = document.getElementById("addItemField")
let addButton = document.getElementById("addButton")
let itemlist = document.getElementById("itemlist")

addButton.addEventListener('click', function() {
    let item = document.createElement('p')
    item.classList.add('item_styling') //applies CSS on the newly created element
    item.innerText = input.value
    if (input.value != "") {
        itemlist.appendChild(item)
    }
    input.value = "" //resets input box to empty

    item.addEventListener('click', () => { //for marking that a task is done
        item.style.textDecoration = "line-through"
    })

    item.addEventListener('dblclick', () => { //to delete a task
        itemlist.removeChild(item)
    })
})