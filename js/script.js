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
const payment = document.getElementById("payment");
const payPal = document.getElementById("paypal");
const bitCoin = document.getElementById("bitcoin");
const creditCard = document.getElementById("credit-card");

//Email variable
const userEmail = document.getElementById("mail");

//Credit card variable
const creditNumb = document.getElementById("cc-num");

//Zip code variable
const userZip = document.getElementById("zip");

//CVV variable
const userCVV = document.getElementById("cvv");

//Submit button variable
const form = document.querySelector("form");






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


//Functions and event listeners to change available shirt colors to match with the same theme
//Only allows correct color and theme matches

shirtColorSelect.appendChild(themeStart);
shirtColorOptions.hidden = true;
themeStart.innerText = "Please select a T-shirt theme first";

shirtColorOptions[0].style.display = "none";
shirtColorOptions[1].style.display = "none";
shirtColorOptions[2].style.display = "none";
shirtColorOptions[3].style.display = "none";
shirtColorOptions[4].style.display = "none";
shirtColorOptions[5].style.display = "none";
shirtColorOptions[0].selected = true;




shirtDesignSelect.addEventListener("change", (event) =>{
    shirtColorOptions.hidden = false;
    if(event.target.value === "js puns"){
        shirtColorOptions[0].style.display = "block";
        shirtColorOptions[1].style.display = "block";
        shirtColorOptions[2].style.display = "block";
        shirtColorOptions[3].style.display = "none";
        shirtColorOptions[4].style.display = "none";
        shirtColorOptions[5].style.display = "none";
        shirtColorOptions[0].selected = true;
        themeStart.innerText = "";
    }



    if(event.target.value === "heart js"){
        shirtColorOptions[0].style.display = "none";
        shirtColorOptions[1].style.display = "none";
        shirtColorOptions[2].style.display = "none";
        shirtColorOptions[3].style.display = "block";
        shirtColorOptions[4].style.display = "block";
        shirtColorOptions[5].style.display = "block";
        shirtColorOptions[3].selected = true;
        themeStart.innerText = "";
    }


    if(event.target.value === "Select Theme"){
        shirtColorOptions.hidden = true;
        themeStart.innerText = "Please select a T-shirt theme first";
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



//Payment functions and event handlers
//This section helps load the credit card payment option as a default
//Hides the bitcoin and paypal options until they are selected from the dropdown menu


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




//Form validation section
//All form validators together below


//Name Validation
//Name regex from: https://www.regextester.com/93648


const nameValidation = () => {
    const custName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (custName.test(name.value)) {
        name.style.borderColor = "green";
        return true;
    } else {
        name.style.borderColor = "red";
        return false;
    }
}

name.addEventListener("input", () => {
    nameValidation();
});


//Email Validation
//Email regex from: http://emailregex.com/

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




//Activity validation

const userActivity = document.createElement("div");
const activityValidation = () => {
    for (let i = 0; i < checkboxes.length; i +=1) {
        if(checkboxes[i].checked) {
            weekendActivities.style.color = "black";
            weekendActivities.textContent = `Total Cost: $${eventCost}`
            return true;
        } else {
            weekendActivities.style.color = "red";
            weekendActivities.textContent = "Please select at least one activity!"
        }
    } return false;
}




//Credit card validation 
//Credit card regex from: https://stackoverflow.com/questions/9315647/regex-credit-card-number-tests

const creditValidation = () => {
    const testCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
    if (testCard.test(creditNumb.value)) {
        creditNumb.style.borderColor = "green";
        return true;
    } else {
        creditNumb.style.borderColor = "red";
        return false;
    }
}

creditNumb.addEventListener("input", () => {
    creditValidation();
});




//Zip code validation
//Zip code regex: https://stackoverflow.com/questions/2577236/regex-for-zip-code

const userZipValidation = () => {
    const testZip = /^\d{5}(?:[-\s]\d{4})?$/;
    if (testZip.test(userZip.value)) {
        userZip.style.borderColor = "green";
        return true;
    } else {
        userZip.style.borderColor = "red";
        return false;
    }
}


userZip.addEventListener("input", () => {
    userZipValidation();
});




//CVV validation
//CVV regex: https://stackoverflow.com/questions/12011792/regular-expression-matching-a-3-or-4-digit-cvv-of-a-credit-card

const cvvValidation = () => {
    const testCVV = /^[0-9]{3,4}$/;
    if (testCVV.test(userCVV.value)) {
        userCVV.style.borderColor = "green";
        return true;
    } else {
        userCVV.style.borderColor = "red";
        return false;
    }
}


userCVV.addEventListener("input", () => {
    cvvValidation();
});



//Sunmit button event listener

form.addEventListener("submit", (e) => {
    if (!nameValidation()) {
        e.preventDefault();
    }
    if (!userEmailValidation()) {
        e.preventDefault();
    }
    if (!activityValidation()) {
        e.preventDefault();
    }
    if (payment[1].selected === true) {
        if(!creditValidation()) {
            e.preventDefault();
        }
        if (!userZipValidation()) {
            e.preventDefault();
        }
        if (!cvvValidation()) {
            e.preventDefault();
        }
    }
});

