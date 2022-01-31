
let userid = "root" ;
let passid = "pass" ;

const login = () => {

    let user = document.getElementById("userid").value ;
    let pass = document.getElementById("passid").value ;

    if ( user == userid && pass == passid ) window.location = "assets/pages/todo.html"

    else if  ( user == "" && pass== "") alert("il faut ecrire quelque chose")

    else if  ( user != userid && pass == passid ) alert ("wrong username")

    else if ( user == userid && pass != passid ) alert ( " password error")

    else alert("unknow err")
    
}  


