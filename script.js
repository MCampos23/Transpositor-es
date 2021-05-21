const notes = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
const latinNotes = [ "Do", "Reb", "Re", "Mib", "Mi", "Fa", "Solb", "Sol", "Lab", "La", "Sib", "Si"];
let notesButtons = Array.from(
  document.querySelectorAll("#notes-buttons button")
);
let instButtons = Array.from(document.querySelectorAll("#inst-buttons button"));
let showResult = document.querySelector("#showResult");
let notationToggleButton = document.querySelector("#notation-toggle");

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
let anglo = true
function programNotationToggleButton() {
  notationToggleButton.onclick = function () {
    let i = 0;
    if (notationToggleButton.textContent == "Latina") {
      notationToggleButton.textContent = "Anglosajona";
      notesButtons.forEach(
        (noteButton) => (noteButton.textContent = latinNotes[i++])
      );
      instButtons[0].querySelector("span").textContent = "Sib";
      instButtons[1].querySelector("span").textContent = "Mib";
      anglo = false
      console.log(anglo)
    } else if (notationToggleButton.textContent == "Anglosajona") {
      notationToggleButton.textContent = "Latina";
      notesButtons.forEach(
        (noteButton) => (noteButton.textContent = notes[i++])
      );
      instButtons[0].querySelector("span").textContent = "Bb";
      instButtons[1].querySelector("span").textContent = "Eb";
      anglo = true
      console.log(anglo)
    }
  };
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

programNotationToggleButton();
programNotesButtons();
programInstButtons();
