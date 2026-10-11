
const noteInput = document.querySelector("#noteInput");
const addButton = document.querySelector("#addButton");
const notesSection = document.querySelector("#notes-section");

addButton.addEventListener("click", function () {
    const text = noteInput.value;

    if (text === "") {
        return;
    }

    // Create a new note
    const note = document.createElement("div");
    note.classList.add("note");
    note.textContent = text;


    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.classList.add("delete-note");


    // Delete only the selected note
    deleteButton.addEventListener("click", function () {
        note.remove();
    });

    // Add the delete button to the note
    note.appendChild(deleteButton);

    notesSection.appendChild(note);


    noteInput.value = "";
    // noteInput.focus();
});
