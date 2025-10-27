const inputEl = document.getElementById("input-el")

const convertBtn = document.getElementById("convert-btn")

const lengthCalc = document.getElementById("length-calc")
const volumeCalc = document.getElementById("volume-calc")
const massCalc = document.getElementById("mass-calc")

convertBtn.addEventListener("click", function() {
    convertLength(inputEl.value)
    convertVolume(inputEl.value)
    convertMass(inputEl.value)
})

function convertLength(length) {
    let newFeet = (length * 3.28084).toFixed(3)
    let newMeter = (length/3.28084).toFixed(3)
    lengthCalc.innerHTML = `${length} meters = ${newFeet} feet | ${length} feet = ${newMeter} meters`
    console.log(`${length} meters = ${newFeet} feet | ${length} feet = ${newMeter} meters`)
}

function convertVolume(volume) {
    let newGallon = (volume*0.264172).toFixed(3)
    let newLiter = (volume/0.264172).toFixed(3)
    volumeCalc.innerHTML = `${volume} liters = ${newGallon} gallons | ${volume} gallons = ${newLiter} liters`
    console.log(`${volume} liters = ${newGallon} gallons | ${volume} gallons = ${newLiter} liters`)
}

function convertMass(mass) {
    let newPound = (mass*2.20462).toFixed(3)
    let newKilo = (mass/2.20462).toFixed(3)
    massCalc.innerHTML = `${mass} kilos = ${newPound} pounds | ${mass} pounds = ${newKilo} kilos`
    console.log(`${mass} kilos = ${newPound} pounds | ${mass} pounds = ${newKilo} kilos`) 
}