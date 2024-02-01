let save = document.getElementById('save');
let note = document.getElementById('note');
let notes = document.getElementById('notes');

save.addEventListener('click', () => {
    let noteValue = note.value.trim();

    if (noteValue.length > 0) {
        let noteElement = document.createElement('div');
        noteElement.classList.add('note');

        let noteTitle = document.createElement('h2');
        noteTitle.textContent = noteValue;

        let noteBody = document.createElement('p');
        noteBody.textContent = 'Note added on ' + new Date().toLocaleString();

        let editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener("click", () =>{
          notes.editChild(noteElement);
        });
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            notes.removeChild(noteElement);
        });

        noteElement.appendChild(noteTitle);
        noteElement.appendChild(noteBody);
        noteElement.appendChild(deleteButton);
        notes.appendChild(noteElement);
        note.value = '';
    }
});