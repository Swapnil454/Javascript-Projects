let nameError = document.querySelector("#name-error");
let phoneError = document.querySelector("#phone-error");
let emaiError = document.querySelector("#email-error");
let messageError = document.querySelector("#message-error");
let submitError = document.querySelector("#submit-error");

function validateName(){
    let name = document.querySelector("#full-name").value;

    if(name.length === 0){
        nameError.innerHTML = "Name is required"
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write full name";
        return false;
    }

    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone(){
    let phone = document.querySelector("#phone").value;

    if(phone.length === 0 || phone.length !== 10 || !phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = "Please Ente Valid Number";
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail(){
    let email = document.querySelector("#email").value;
    if(email.length === 0 || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        emaiError.innerHTML = " Please Enter Valid Email";
        return false;
    }
    emaiError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateassage(){
    let message = document.querySelector("#message").value;
    let required = 30;
    let left = required - message.length;

    if(left > 0){
        messageError.innerHTML = left + "Please Add More Charecter";
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validaForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateassage()){
        submitError.style.display = "block";
        submitError.innerHTML = "Please Fill Remaining or Valid Information ";
        setTimeout(function(){
            submitError.style.display = "none";
        },3000);
        return false;
    }
}