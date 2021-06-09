const notes = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];

let notesButtons = Array.from(
  document.querySelectorAll("#notes-buttons button")
);
let instButtons = Array.from(document.querySelectorAll("#inst-buttons button"));
let showResult = document.querySelector("#showResult");


let note;
let inst;

function programNotesButtons() {
  notesButtons.forEach((noteButton) => {
    noteButton.onclick = function () {
      switchSelectedButton(notesButtons, this);
      note = notes.indexOf(this.id);
      transpose(note, inst);
    };
  });
}
function programInstButtons() {
  instButtons.forEach((instButton) => {
    instButton.onclick = function () {
      switchSelectedButton(instButtons, this);
      inst = notes.indexOf(this.id);
      transpose(note, inst);
    };
  });
}

function switchSelectedButton(buttons, button) {
  buttons.forEach((button) => button.classList.remove("selected"));
  button.classList.add("selected");
}
function transpose(note, inst) {
  if (inst != undefined && note != undefined) {
    let result = note + inst;
    if (result > 11) result -= 12;
    showResult.classList.remove("hide");
    if (anglo=true)
    showResult.innerText = notes[result]
    else{
        showResult.innerText = latinNotes[result]
    }
  }
}

programNotesButtons();
programInstButtons();
