const inputEl = document.getElementById("input-el")

const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function() {
    convertLength(inputEl.value)
    convertVolume(inputEl.value)
    convertMass(inputEl.value)
})

function convertLength(length) {
    newFeet = (length * 3.28084).toFixed(3)
    newMeter = (length/3.28084).toFixed(3)
    console.log(`${length} meters = ${newFeet} feet | ${length} feet = ${newMeter} meters`)
}

function convertVolume(volume) {

}

function convertMass(mass) {

}