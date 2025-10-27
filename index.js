const inputEl = document.getElementById("input-el")

const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function() {

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