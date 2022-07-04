const convert = document.getElementById("convert")
let rectangle = document.getElementById("rectangle")

const lengthRes = document.getElementById("first")
const volumeRes = document.getElementById("second")
const massRes = document.getElementById("third")

const meterFeet = 3.281 
const literGallon = 0.264
const kilogramPound = 2.204

convert.addEventListener("click", function(){
let rate = rectangle.value
lengthRes.textContent = `${[rate]} Meters = ${[(rate * meterFeet).toFixed(3)]} feets || ${[rate]} Feet = ${[(rate / meterFeet).toFixed(3)]} meters`
volumeRes.textContent = `${[rate]} Liters = ${[(rate * literGallon).toFixed(3)]} gallons || ${[rate]} Gallons = ${[(rate / literGallon).toFixed(3)]} liters`
massRes.textContent = `${[rate]} Kilos = ${[(rate * kilogramPound).toFixed(3)]} pounds || ${[rate]} Pounds = ${[(rate / kilogramPound).toFixed(3)]} kilos`
})