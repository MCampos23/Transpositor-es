const notes = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']
let notesButtons = Array.from(document.querySelectorAll('#notes-buttons button'))
let instButtons = Array.from(document.querySelectorAll('#inst-buttons button'))
let showResult = document.querySelector('#showResult')
let note
let inst
let i = 0

// Programa los botones de la tonalidad
notesButtons.forEach(n => {
    n.textContent = notes[i++]
    n.onclick = function() {
        notesButtons.forEach(b => b.classList.remove('selected'))
        this.classList.add('selected')
        note = notes.indexOf(this.textContent)
        if (inst != undefined) transpose(note, inst)
    }
})

// Programa los botones de instrumentos
instButtons.forEach(n => {
    n.onclick = function() {
        instButtons.forEach(b => b.classList.remove('selected'))
        this.classList.add('selected')
        inst = notes.indexOf(this.querySelector('span').textContent)
        if (note != undefined) transpose(note, inst)
    }
})

// Realiza la transposición
function transpose(note, inst) {
    let result = note + inst
    if (result > 11) result -= 12
    showResult.classList.remove("hide")
    showResult.innerText = notes[result]
}