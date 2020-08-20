

const submitForm = document.querySelector("#submit");
console.log(submitForm);
const validate = (e) => {
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const number = document.querySelector("#number").value;
    const address = document.querySelector("#address").value;
    console.log(name, number, address);
    if (!name.match(/^[A-Za-z][-a-zA-Z ]+$/)){
        alert("Name must contain only alphabets");
        return false;
    }
    else if (!number.match(/^(?=.*[0-9])[- +()0-9]+$/)){
        alert("Enter a valid number");
        return false;
    }
    else if (address===''){
        alert("Address must not be empty");
    }
    else {
        alert("You have succesfully registered !");
    }
}


submitForm.addEventListener("click",validate)

