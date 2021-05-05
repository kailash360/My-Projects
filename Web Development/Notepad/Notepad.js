let inputField = document.getElementById("inputField")
let addNoteBtn = document.getElementById("addNoteBtn")
let noteContainer = document.getElementById("note-container")

let count = 1
addNoteBtn.addEventListener('click', () => {

    // First check if user-input is null or not 
    if (inputField.value != "") {

        // Making element of note number 
        let countNumber = "Note " + count++;
        let noteNumber = document.createElement("h2");
        noteNumber.className = "noteNumber"
        noteNumber.innerText = countNumber

        // Making element of note text 
        let inputText = inputField.value;
        let noteContent = document.createElement("p");
        noteContent.className = "noteContent";
        noteContent.innerText = inputText

        // Making delete button 
        let delBtn = document.createElement("button");
        delBtn.className = "deleteBtn";
        delBtn.innerText = "🗑️"

        //Making entire note box and appending the above elements
        let note = document.createElement("div")
        note.className = "note";
        note.appendChild(noteNumber)
        note.appendChild(noteContent)
        note.appendChild(delBtn)

        //Appending the newly created note to the note section
        noteContainer.appendChild(note)
        inputField.value = ""

        //Adding function of delete button
        delBtn.addEventListener('click', (event) => {
            noteContainer.removeChild(note)
                // event.currentTarget.parentNode.remove()

            // Reset count to 0 if no notes left 
            if (noteContainer.childElementCount == 0) {
                count = 1;
            }
        })
    }
})


//Clearing all notes through Clear-All button
let clearAllBtn = document.getElementById("clearAllBtn")
clearAllBtn.addEventListener('click', () => {
    noteContainer.innerHTML = "\n"
    count = 1
})