let lengthEl=document.getElementById("length-el")
let volumeEl=document.getElementById("volume-el")
let massEl=document.getElementById("mass-el")

function mesure(){
    let original = document.getElementById("text1").value
    let meterToFeet=original*3.28
    let feetToMeter=original*0.3
    lengthEl.textContent=original + " meters = " + meterToFeet.toFixed(3) + " feet" + " | " + original + " feet = " + feetToMeter.toFixed(3) + " meters"
    let litersToGallons=original*0.264172
    let gallonsToLiters=original*3.785
    volumeEl.textContent=original + " liters = " + litersToGallons.toFixed(3) + " gallons" + " | " + original + " gallons = " + gallonsToLiters.toFixed(3) + " liters"
    let kiloToPound=original*2.20462
    let poundToKilo=original*0.453592
    massEl.textContent=original + " kilograms = " + kiloToPound.toFixed(3) + " pounds" + " | " + original + " pounds = " + poundToKilo.toFixed(3) + " kilograms"
}
