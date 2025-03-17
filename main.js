
const form = document.querySelector('#form');
const email = document.querySelector('#email');
const errorMessage = document.querySelector('#error');


// Function to validate input with custom error messages

function validateInput(input){
    
    const inputValue = input.value.trim();

    if (!inputValue){
        errorMessage.style.visibility = 'visible';

        input.classList.add('invalid');
        errorMessage.style.visibility = 'visible';
        return false;
    } 

    if (!inputValue.includes('@') || !inputValue.includes('.')){
        errorMessage.style.visibility = 'visible';

        input.classList.add('invalid');
        errorMessage.style.visibility = 'visible';
        return false;
    }
    

}


// Event listener to validate input

form.addEventListener('submit', function(e){
    e.preventDefault();

    validateInput(email);
    
})

