//focus on name field at load
document.getElementById("name").focus();

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

pickColor.addEventListener('change', (event) => {
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

