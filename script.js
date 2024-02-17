var input = document.getElementById("psw");
const emailError = document.querySelector("#psw + span.error");
var input2 = document.getElementById("psw2");
input.addEventListener("load", showerror());


input.addEventListener("keyup", function() {
  inputValueTwo = document.getElementById("psw2").value;
  if (input.value === inputValueTwo) {
    input.setCustomValidity("");
    input2.setCustomValidity("")
    emailError.textContent = "";
    emailError.className = "error"; 
}
    else 
    {
        input.setCustomValidity("Invalid field.");
        input2.setCustomValidity("Invalid field.")
        showerror();
    }
}) 

input2.addEventListener("keyup", function() {
    inputValueTwo = document.getElementById("psw2").value;
    if (input.value === inputValueTwo) {
        emailError.textContent = "";
        emailError.className = "error";
        input.setCustomValidity("");
        input2.setCustomValidity("")
    }
    else {
        showerror()
        input.setCustomValidity("Invalid field.");
        input2.setCustomValidity("Invalid field.")
    }
})

function showerror() {
    emailError.textContent = "*Passwords do not match.";
    emailError.className = "error active";  
}

