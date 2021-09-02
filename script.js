const notes = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];

let notesButtons = Array.from(document.querySelectorAll("#notes-buttons button"));
let instButtons = Array.from(document.querySelectorAll("#inst-buttons button"));

let showResult = document.querySelector("#showResult");

let note;
let inst;

function programButtons(buttons) {
  buttons.forEach((button) => {
    button.onclick = function () {
      applyBorderToSelectedButton(buttons, this);
      buttons === notesButtons ?  note = notes.indexOf(this.id) :  inst = notes.indexOf(this.id);
      transpose(note, inst);
    };
  });
}

function applyBorderToSelectedButton(buttons, button) {
  buttons.forEach((button) => button.classList.remove("selected"));
  button.classList.add("selected");
}

function transpose(note, inst) {
  if (inst != undefined && note != undefined) {
    let result = note + inst;
    if (result > 11) result -= 12;
    showResult.classList.remove("hide");
    showResult.innerText = notes[result];
  }
}

programButtons(notesButtons)
programButtons(instButtons)

