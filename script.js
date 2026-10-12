
const noteInput = document.querySelector("#noteInput");
const addButton = document.querySelector("#addButton");
const notesSection = document.querySelector("#notes-section");

addButton.addEventListener("click", function () {
    const text = noteInput.value;
    if (text === "") {
        return;
    }
    
    const note = document.createElement("div"); // Creating note
    note.classList.add("note");
    note.textContent = text;
    
    const deleteButton = document.createElement("button");   // Create delete button
    deleteButton.textContent = "X";
    deleteButton.classList.add("delete-note");
    
    deleteButton.addEventListener("click", function () {    // Delete only the selected note
        note.remove();  
    });
    
    note.appendChild(deleteButton);    // Add the delete button to the note
    notesSection.appendChild(note);

    noteInput.value = "";
    
});



