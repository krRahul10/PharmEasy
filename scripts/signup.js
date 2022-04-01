document.querySelector("form").addEventListener('submit', formSubmit)

//make a empty array in which you can put your obj value then its make array of obj
let userStack= JSON.parse(localStorage.getItem("userDataBase")) || []

function formSubmit(event){
   //form always take preventDefault 
event.preventDefault()

//call all input tag value by their id

var name=document.querySelector('#signup_name').value
var mobile=document.querySelector("#signup_contact").value
var email=document.querySelector('#signup_email').value
var password=document.querySelector('#signup_password').value

//put all value inside a object with key value pairs

let userData={
    user_name:name,
    user_mobile:mobile,
    user_email:email,
    user_password:password,
}
//push all of your object value in your empty array
userStack.push(userData)

localStorage.setItem("userDataBase",JSON.stringify(userStack))

}
function required(){
    let name=document.getElementById('signup_name').value
    let contact=document.getElementById('signup_contact').value
    let email=document.getElementById('signup_email').value
    let password=document.getElementById("signup_password").value

    if(name==""){
        alert("Please fill your name")
        return false
    }
    else if(contact==""){
        alert("please add your contact number")
        return false
    }
    else if(email==""){
        alert("Please add your email ")
        return false
    }
    else if(password==""){
        alert("Please fill your password")
        return false
    }

    else{
        alert("signup susseccful")
        window.location.href='./login.html'
        return true
        
    }
}



