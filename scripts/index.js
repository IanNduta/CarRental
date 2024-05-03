"use script";

window.onload = init;

//varibles
const pickUpInput = document.geElementById("pickUpInput");
const daysInput = document.geElementById("daysInput");
const tollTagInput = document.geElementById("tollTagInput");
const GPSInput = document.geElementById("GPSInput");
const RoadsideInput = document.geElementById("RoadsideInput");
const yesInput = document.geElementById("yesInput");
const noInput = document.geElementById("noInput");
const totalBtn = document.geElementById("totalBtn");
const carRentalOutput = document.geElementById("carRentalOutput");
const optionsOutput = document.geElementById("optionsOutput");
const surchargeOutput = document.geElementById("surchargeOutput");
const totalDueOuput = document.geElementById("totalDueOuput");

function init{
    totalBtn.onclick = onClickedTotalBtn;
    
}




