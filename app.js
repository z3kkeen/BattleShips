function toggleNumber(el) {

    //Check if number is already "locked"
    if (el.classList !== "locked") {
        //Get parent element (div) of el (button) and get all elements
        const lockedElements = el.parentElement.querySelectorAll(".locked");

        //Check if locked elements is less than 7
        if (lockedElements.length < 11)
            //If not, lock number by adding class to element
            el.classList.add("locked");

        console.log("locked", el.id);
    };

};

    
function generateNumbers(el) {
    // 1. Check if any numbers are locked
    const lockedElements = el.parentElement.querySelectorAll(".locked");

    //Check if locked elements is less than 7
    if (lockedElements.length < 11) {
        for (let i = lockedElements.length; i < 11;) {
            //Generate random number between 1-40
            const rNumber = Math.floor(Math.random() * 40) + 1;

            //Get button with the random number
            const button = document.getElementById(el.parentElement.id + "-" + rNumber
            ); // 2-16
            console.log(button)
            //If NOT locked , add locked class
            if (button.classList != "locked") {
                button.classList.add("locked");
                i++
            };
        };
    };

};   

function init() {
    const paragraph = document.querySelector("#pp")
    paragraph.innerText ="Place the boats Bitch"

    const leftSection = document.querySelector("#left");

    // Create 12 divs that holds the numbers
    for (let i = 1; i < 3; i++) {
        const newDiv = document.createElement("div");
        newDiv.id = i;

        //Create 400 buttons inside every div
        for (let i = 1; i < 65; i++) {
            const newButton = document.createElement("button");

            //Set id on button
            newButton.id = newDiv.id + "-" + i; // rad 4-27 nummer
            //Set text on button
            newButton.innerText = i;
            //Set ononclick on button
            newButton.onclick = function () {
                toggleNumber(this);
            }
            //Add button inside div
            newDiv.appendChild(newButton);
        }

        //Add div (with buttons) to left section
        leftSection.appendChild(newDiv);
    };

    if(toggleNumber(this) == 11){
        paragraph.innerText = "Attack"
    }

}
//Ropar på att functionen ska starta
init();

