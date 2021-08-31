//focus on name field at load
const registerName = document.getElementById("name")
registerName.focus();

//hide other job role text field on load
const hideRole = document.getElementById("other-job-role");
hideRole.style.display = "none";

//on selecting value 'other' in title, show hideRole field
const otherRole = document.getElementById('title');

otherRole.addEventListener('change', (event) => {
    if (event.target.value === 'other'){
        hideRole.style.display = "block";
    }
    else {
        hideRole.style.display = "none";
    }
});

//Disable the "Color" <select> element
const hideColor = document.getElementById("shirt-colors");
hideColor.style.display = "none";

// On change: The "Color" <select> element should be enabled, the "Color" <select> element should display an available color.
// Display only the color options associated with the selected design - make this DRY - need to clear selection if changing theme
const pickColor = document.getElementById('design');
const hidePuns = document.querySelectorAll('[data-theme="js puns"]');
const hideHearts = document.querySelectorAll('[data-theme="heart js"]');

pickColor.addEventListener("change", (event) => {
    if (event.target.value === 'js puns'){
        hideColor.style.display = "block";
        for (let i = 0; i < hideHearts.length; i++) {
            hideHearts[i].hidden = true;
            hidePuns[i].hidden = false;
          } 
    }
    else if (event.target.value === 'heart js'){
        hideColor.style.display = "block";
        for (let i = 0; i < hidePuns.length; i++) {
            hidePuns[i].hidden = true;
            hideHearts[i].hidden = false;
          } 
    }
    else {
        hideColor.style.display = "none";
    }
});

//The "Total: $" element below the "Register for Activities" section updates to reflect the sum of the cost of the user’s selected activities.

const activities = document.getElementById("activities");
const activitiesTotal = document.getElementById("activities-cost");
let totalCost = 0;

activities.addEventListener("change", (event) => {
    let cost = +event.target.getAttribute("data-cost");
    
    if(event.target.checked == true){
        totalCost = totalCost + cost;
        activitiesTotal.innerHTML = "$ " + (totalCost);
    }
    if(event.target.checked != true){
        totalCost = totalCost - cost;
        activitiesTotal.innerHTML = "Total: $ " + (totalCost);
    }
});

// Payment info

const payWith = document.getElementById("payment");
const paypal = document.getElementById("paypal");
const creditCard = document.getElementById("credit-card");
const bitcoin = document.getElementById("bitcoin");

paypal.style.display = "none";
bitcoin.style.display = "none";
payWith.value = "credit-card"; 

payWith.addEventListener("change", (event) => {
    if(event.target.value === 'paypal'){
        console.log("Ow! Yeah!");
        creditCard.style.display = "none";
        bitcoin.style.display = "none";
        paypal.style.display = "block";
        
    }
    else if(event.target.value === 'bitcoin'){
        console.log("Ow! OW! Yeah!");
        creditCard.style.display = "none";
        paypal.style.display = "none";
        bitcoin.style.display = "block";
    }
    else {
        paypal.style.display = "none";
        bitcoin.style.display = "none";
        creditCard.style.display = "block";
    }
});

// Validation of fields - get the fields and the button
const registerEmail = document.getElementById('email');
const registerCard = document.getElementById('cc-num');
const registerZip = document.getElementById('zip');
const registerCVV = document.getElementById('cvv');
// cant'quite catch the button for clicking...
const button = document.getElementsByTagName('BUTTON')[0];
const form = document.querySelector('form');


form.addEventListener("submit", (event) => {
    event.preventDefault(); // Preventing the form from actually being submitted and refreshing the page
    const inputName = registerName.value;
    console.log(inputName);
    const checkName = /^[a-zA-Z ]{2,30}$/;
    if (inputName.match(checkName)){
        console.log("It is a good name.");
    }
    else{
        console.log("Is that a name?");
    }
});



