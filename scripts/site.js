"use strict";

// Input elements
const inputPickUpDate = document.getElementById("inputPickupDate");
const inputNumOfDays = document.getElementById("inputNumOfDays");
const inputOptElecTollTagCheckbox = document.getElementById("inputOptElecTollTagCheckbox");
const inputOptGPSCheckBox = document.getElementById("inputOptGPSCheckBox");
const inPutOptRoadisdeAsstCheckbox = document.getElementById("inPutOptRoadisdeAsstCheckbox");
const inputUnder25Noradio = document.getElementById("inputUnder25Noradio");
const inputUnder25YesRadio = document.getElementById("inputUnder25YesRadio");

// Button
const estimateTotalCostButton = document.getElementById("estimateTotalCostButton");

// Output elements
const outputCarRental = document.getElementById("outputCarRental");
const outputOptions = document.getElementById("outputOptions");
const outputSurcharge = document.getElementById("outputSurcharge");
const outputTotal = document.getElementById("outputTotal");

window.onload = function(){
    inputNumOfDays.onchange = performCalculations;
    inputOptElecTollTagCheckbox.onchange = performCalculations
    inputOptGPSCheckBox.onchange = performCalculations;
    inPutOptRoadisdeAsstCheckbox.onchange = performCalculations;
    inputUnder25Noradio.onchange = performCalculations
    estimateTotalCostButton.onchange = performCalculations;

    performCalculations();
}

function performCalculations(){
//get known values
let numOfDays = Number(inputNumOfDays.value);

let isOptElectTollTag = inputOptElecTollTagCheckbox.Checked;
let isOptGPS = inputOptGPSCheckBox.checked;
let isOptRoadAsst = inPutOptRoadisdeAsstCheckbox.checked;

let isisUnder25 = inputUnder25Noradio.checked;


console.log(numOfDays);
console.log(isOptElectTollTag);
console.log(isOptGPS);
console.log(isOptRoadAsst);
//calculate unknown values
let carRentalAmount = 29.99 * numOfDays;
let optionsAmount = 0;

if(isOptElectTollTag){
    optionsAmount += (3.95 * numOfDays)
}
if(isOptGPS){
    optionsAmount += (2.95 * numOfDays)
}
if(isOptRoadAsst){
    optionsAmount += (2.95 * numOfDays)
}
let surchargeAmount;

if(isisUnder25){
    surchargeAmount = 0.30 * (carRentalAmount + optionsAmount);
}
else{
    surchargeAmount = 0;
}
let totaldueAmount = carRentalAmount + optionsAmount + surchargeAmount;


//display the results
 outputCarRental.innnerHTML = carRentalAmount;
 outputOptions.innerHTML = optionsAmount;
 outputSurcharge.innerHTML = surchargeAmount;
 outputTotal.innerHTML = totaldueAmount;
}




