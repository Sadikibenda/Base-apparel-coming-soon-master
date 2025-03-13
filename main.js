
const form = document.querySelector('#form');
const email = document.querySelector('#email');



// Function to validate input with custom error messages

function validateInput(input){
    const errorMessage = document.querySelector('#error');
    const inputValue = input.value.trim();

    if (!inputValue){
        errorMessage.style.visibility = 'visible';

        input.classList.add('invalid');
        errorMessage.style.visibility = 'visible';
        return false;
    } 

    

    // If the input is valid, remove the error message and invalid class
    

}




// Event listener to validate input

form.addEventListener('submit', function(e){
    e.preventDefault();

    validateInput(email);
})

