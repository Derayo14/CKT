let warning= document.getElementById("WarningPopUp")
console.log(warning)
let signUpBtn=document.getElementById("signUpBtn")
let fullNameInput= document.getElementById("FullName")
// console.log(fullNameInput)
// let EmailInput =document.getElementById("E-mailInput")
// let PasswordInput= document.getElementById("pwd")
// let ConfirmPasswordInput =document.getElementById("Cpwd")

signUpBtn.addEventListener("click", function(e){
    e.preventDefault()
    
    // Checking if the input is empty
if(fullNameInput.value == ""){
    // Adding the error message
    warning.textContent = "Please Enter your Fullname"
    warning.style.display = "block"
    // setTimeout Function
   setTimeout(()=>{
    warning.style.display = "none"
   }, 5000)
    console.log("Please Enter your Fullname");
}else{
    console.log("Full-Name is NOT empty");
}
})
