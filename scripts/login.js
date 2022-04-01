let register_user=JSON.parse(localStorage.getItem("userDataBase"))
console.log(register_user);

function logIn(event){

    event.preventDefault()

    let user=document.getElementById("login_name").value
    let password=document.getElementById("login_password").value

    var flag=true
     for(let i=0;i<register_user.length;i++){
        if(user==""){
            alert("Please fill your name")
            return false
        }
        else if(password==""){
            alert("Please fill your password")
            return false
        }
    
         else if(register_user[i].user_name==user && register_user[i].user_password==password){
            window.location.href="./index.html"
            alert("Login Successful")
            flag=true
            return

         }
         
         else{
             flag=false
         }
     }
     if(flag==false){
         alert("wrong details")
     }

}