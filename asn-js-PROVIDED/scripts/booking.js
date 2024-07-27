/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?
let costPerDay = 35;
let numberOfDaysSelected = 0;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
numberOfDaysSelected = new Set();

function changeColor(event) {
  const clickedElement = event.target;
  const dayId = clickedElement.id;

  numberOfDaysSelected.add(dayId);
  clickedElement.style.backgroundColor = "#E5AF42";

  calculateTotalCost();
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function clearAll() {
  numberOfDaysSelected.clear();
  document.querySelectorAll(".day-selector li").forEach((li) => {
    li.style.backgroundColor = "";
    li.classList.remove("clicked");
  });

  document.getElementById("calculated-cost").innerText = "0";
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function setHalfDayRate() {
  costPerDay = 20;
  document.getElementById("full").classList.remove("clicked");
  document.getElementById("half").classList.add("clicked");

  calculateTotalCost();
}
document.getElementById("half").addEventListener("click", setHalfDayRate);
// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
function setFullDayRate() {
  costPerDay = 35;
  document.getElementById("half").classList.remove("clicked");
  document.getElementById("full").classList.add("clicked");

  calculateTotalCost();
}

document.getElementById("full").addEventListener("click", setFullDayRate);
/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculateTotalCost() {
  const totalCost = numberOfDaysSelected.size * costPerDay;
  document.getElementById("calculated-cost").innerText = totalCost;
}
