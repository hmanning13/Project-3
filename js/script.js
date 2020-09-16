/*Treehouse Techdegree Project 3
Interactive Forms*/


//Info variables
const name = document.getElementById("name");
const otherTitle = document.getElementById("other-title");
const title = document.getElementById("title");


//T-shirt variables
const shirtColorOptions = document.getElementById("color");
const shirtDesignSelect = document.getElementById("design");
const shirtColorSelect = document.getElementById("shirt-colors");
const themeStart = document.createElement("option");


//Activities variables
const activities = document.querySelector(".activities");
const checkboxes = document.querySelectorAll(".activities input");
const weekendActivities = document.createElement("div")
activities.appendChild(weekendActivities);
let eventCost = 0

//Function used to focus on name field when page is first loaded
const focusName = () => {
    name.focus();
}
focusName();


//Function to hide "other" textfield when page is first loaded

otherTitle.style.display = "none";

title.addEventListener("change", (event) => {

    if(event.target.value === "other"){
        otherTitle.style.display = "block";
        } else {
        otherTitle.style.display = "none";
        }
});




shirtColorOptions[0].style.display = "none";
shirtColorOptions[1].style.display = "none";
shirtColorOptions[2].style.display = "none";
shirtColorOptions[3].style.display = "none";
shirtColorOptions[4].style.display = "none";
shirtColorOptions[5].style.display = "none";
shirtColorOptions[0].selected = true;

shirtColorSelect.appendChild(themeStart);
themeStart.innerText = "Please select a T-shirt theme first";




shirtDesignSelect.addEventListener("change", (event) =>{
    
    if(event.target.value === "js puns"){
        shirtColorOptions[0].style.display = "block";
        shirtColorOptions[1].style.display = "block";
        shirtColorOptions[2].style.display = "block";
        shirtColorOptions[3].style.display = "none";
        shirtColorOptions[4].style.display = "none";
        shirtColorOptions[5].style.display = "none";
        shirtColorOptions[0].selected = true;
    }



    if(event.target.value === "heart js"){
        shirtColorOptions[0].style.display = "none";
        shirtColorOptions[1].style.display = "none";
        shirtColorOptions[2].style.display = "none";
        shirtColorOptions[3].style.display = "block";
        shirtColorOptions[4].style.display = "block";
        shirtColorOptions[5].style.display = "block";
        shirtColorOptions[3].selected = true;
    }

});




//Activites and pricing functions

activities.addEventListener("change", (event) => {
    const clicked = event.target;
    let newCost = clicked.getAttribute("data-cost");
    newCost = parseInt(newCost);

    if (clicked.checked) {
        eventCost = eventCost + newCost;
    } else {
        eventCost = eventCost - newCost
    }



    weekendActivities.style.color = "black";
    weekendActivities.textContent = `Total: $${eventCost}`
    let weekendTimes = clicked.getAttribute("data-day-and-time");
    
    for (let i = 0; i < checkboxes.length; i += 1) {
        const checkboxType = checkboxes[i].getAttribute("data-day-and-time")
        if (weekendTimes === checkboxType && clicked !== checkboxes[i]) {
            if (clicked.checked) {
                checkboxes[i].disabled = true;
            } else {
                checkboxes[i].disabled = false;
            }
        }
    }
});





