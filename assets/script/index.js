
let userid = "root" ;
let passid = "pass" ;



function fm () {

    let user = document.getElementById("userid").value ;
    let pass = document.getElementById("passid").value ;


    if ( user == userid && pass == passid ) { 

    alert ( "ok" ) ;

    }

    else if  ( user == "" && pass== "") {  

    alert("il faut ecrire quelque chose") ;

    }

    else if  ( user != userid && pass == passid ) { 

    alert ("wrong username") ;

    }


    else if ( user == userid && pass != passid )
    { 
    alert ( " password error") ;
    }

}

 
  


