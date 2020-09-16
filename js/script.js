/*Treehouse Techdegree Project 3
Interactive Forms*/



//Variables
const name = document.getElementById("name");
const otherTitle = document.getElementById("other-title");
const title = document.getElementById("title");
const shirtColorOptions = document.getElementById("color");
const shirtDesignSelect = document.getElementById("design");


//Function used to focus on name field when page is first loaded
const focusName = () => {
    name.focus();
}
focusName();



//document.getElementById("idOfTextField").style.display = "none";

//when active...
//document.getElementById("idOfTextField").style.display = "block";




//Function to hide "other" textfield when page is first loaded

otherTitle.style.display = "none";

title.addEventListener("change", (event) => {

    if(event.target.value === "other"){
        otherTitle.style.display = "block";
        } else {
        otherTitle.style.display = "none";
        }
});








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
