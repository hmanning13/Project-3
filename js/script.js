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
const weekendActivities = document.createElement("div");
activities.appendChild(weekendActivities);
let eventCost = 0


//Payment Variables












//Function used to focus on name field when page is first loaded
const focusName = () => {
    name.focus();
}
focusName();








//Function to hide "other" textfield when page is first loaded on the job role section

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




//Activites and pricing event handler function
//First part of function is an event listener for the activities checkboxes
//It also helps tally up the total price based on the checkboxes clicked
//Second part of function makes sure slelected activites do not conflict
//Helps disable checkboxes if they will interfere with another already slected activity




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





const payment = document.getElementById("payment");
const payPal = document.getElementById("paypal");
const bitCoin = document.getElementById("bitcoin");
const creditCard = document.getElementById("credit-card");

payment[1].selected = true;
payPal.style.display = "none";
bitCoin.style.display = "none";


payment.addEventListener("change", (event) => {
    const chosen = event.target.value;

    if (chosen === "credit card") {
        creditCard.style.display = "block";
        payPal.style.display = "none";
        bitCoin.style.display = "none";
    } else if (chosen === "paypal") {
        payPal.style.display = "block";
        bitCoin.style.display = "none";
        creditCard.style.display = "none";
    } else if (chosen === "bitcoin") {
        bitCoin.style.display = "block";
        creditCard.style.display = "none";
        payPal.style.display = "none";
    }
})



//Name Validation
const nameValidation = () => {
    const custName = /^[a-zA-Z ]{2,30}$/;
    if (custName.test(name.value)) {
        name.style.borderColor = "green";
        return true;
    } else {
        name.style.borderColor = "red";
        return false;
    }
}

name.addEventListener("change", () => {
    nameValidation();
});





//Email Validation
const userEmail = document.getElementById("mail");





const userEmailValidation = () => {
    const testEmail =  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    if (testEmail.test(userEmail.value)) {
        userEmail.style.borderColor = "green";
        return true;
    } else {
        userEmail.style.borderColor = "red";
        return false;
    }
}


userEmail.addEventListener("input", () => {
    userEmailValidation();
});







