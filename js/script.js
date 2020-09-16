/*Treehouse Techdegree Project 3
Interactive Forms*/



//Variables
const name = document.getElementById("name");
const otherTitle = document.getElementById("other-title");
const title = document.getElementById("title");




//Function used to focus on name field when page is first loaded
const focusName = () => {
    name.focus();
}
focusName();



//document.getElementById("idOfTextField").style.display = "none";

//when active...
//document.getElementById("idOfTextField").style.display = "block";


otherTitle.style.display = "none";

title.addEventListener("change", (event) => {

    if(event.target.value === "other"){
        otherTitle.style.display = "block";
        } else {
        otherTitle.style.display = "none";
        }
});