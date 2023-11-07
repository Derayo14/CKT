let warning= document.getElementById("WarningPopUp")
let mailWarning=document.getElementById("WarningMailPopUp")
let phoneWarning= document.getElementById("WarningPhonePopUp")
let passwordWarning =document.getElementById("WarningPwdPopUp")
let ConfirmPasswordWarning= document.getElementById("WarningCPwdPopUp")
let signUpBtn=document.getElementById("signUpBtn")
let fullNameInput= document.getElementById("FullName")
let EmailInput =document.getElementById("E-mail")
let PhoneNumberInput= document.getElementById("Phone-number")
let PasswordInput= document.getElementById("Pwd")
let ConfirmPasswordInput =document.getElementById("Cpwd")
let inputContainer = document.getElementById("inputContainer")
let inputContainermail = document.getElementById("inputContainermail")
let inputContainerphone = document.getElementById("inputContainerphone")
let inputContainerpwd = document.getElementById("inputContainerpwd")
let inputContainercpwd = document.getElementById("inputContainercpwd")

let userData ={

}

 // setTimeout Function
function errorTimeout() {
    setTimeout(()=>{
        warning.style.display = "none"
        mailWarning.style.display = "none"
       phoneWarning.style.display = "none"
        passwordWarning.style.display = "none"
        ConfirmPasswordWarning.style.display = "none"
        inputContainer.classList.remove("borderRed")
        inputContainermail.classList.remove("borderRed")
        inputContainerphone.classList.remove("borderRed")
        inputContainerpwd.classList.remove("borderRed")
        inputContainercpwd.classList.remove("borderRed")


    },4000)
    
}

signUpBtn.addEventListener("click", function(e){
    e.preventDefault()
    
    // Checking if the input is empty
if(fullNameInput.value == ""){
    // Adding the error message
    warning.textContent = "Please Enter your Fullname"
    inputContainer.classList.add("borderRed")
    warning.style.display = "block"
    errorTimeout()
}else{
    userData["name"] = fullNameInput.value
}
 
// E-mail Warning

if(EmailInput.value == ""){
    mailWarning.textContent = "Please Enter your E-mail"
    inputContainermail.classList.add("borderRed")
    mailWarning.style.display = "block"
    errorTimeout()
}else{
    userData["E-mail"] = EmailInput.value
}


if(PhoneNumberInput.value == ""){
    phoneWarning.textContent = "Please Enter your Phone-number"
    inputContainerphone.classList.add("borderRed")
   phoneWarning.style.display = "block"
   errorTimeout()
}else{
    userData["Phone-Number"] = PhoneNumberInput.value
}


if(PasswordInput.value== ""){
    passwordWarning.textContent = "Please Enter your Password"
    inputContainerpwd.classList.add("borderRed")
    passwordWarning.style.display = "block"
    errorTimeout()
}else{
    userData["Password"] =PasswordInput.value
}

if(ConfirmPasswordInput.value == ""){
    ConfirmPasswordWarning.textContent ="Please Confirm Your Password"
    inputContainercpwd.classList.add("borderRed")
    ConfirmPasswordWarning.style.display= "block"
    errorTimeout()
}else{
}
console.log(userData);
localStorage.setItem("user", JSON.stringify(userData))
})