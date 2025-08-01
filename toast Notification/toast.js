let toastBox = document.querySelector("#toastBox");

let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully Submitted';
let errorsMsg = '<i class="fa-solid fa-circle-xmark"></i> Please Fix THe Error!';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid Input, Cheack Again';

function showToast(msg){
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes('Error')){
        toast.classList.add("error");
    }
    if(msg.includes('Invalid')){
        toast.classList.add("invalid");
    }

    setTimeout(()=> {
        toast.remove();
    },4000);
}