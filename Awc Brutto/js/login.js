//array for the combo
var usernames=[];
var passwords=[];


//stored info for logins
var storedUsers=JSON.parse(localStorage.getItem("usernames"))
var storedPass = JSON.parse(localStorage.getItem("passwords"));

//stored info for logins sellers
var storedUsersSellers=JSON.parse(localStorage.getItem("usernamesSellers"))
var storedPassSellers = JSON.parse(localStorage.getItem("passwordsSellers"));

//login for the clients
function login(){
for (i=0;i<storedUsers.length;i++) {

    if(document.getElementById('userName')==storedUsers[i]){
        if(document.getElementById('userPass')!=storedPass[i]){
            alert("password doesn't match with the one in database");
            break
        }


        //todo login, change page



    }else{
        alert("user is not in database, wanna register?")
    }
}

}

//registration for the clients
function register(){

    if (document.getElementById('Confirm_Password')!=document.getElementById('Password')){
        alert("Passwords doesn't match");
    }else{

        //save logins
        storedUsers.push=document.getElementById('username');
        localStorage.setItem("usernames", JSON.stringify(storedUsers));

        storedPass.push=document.getElementById('userpass');
        localStorage.setItem("passwords",JSON.stringify(storedPass));

        //save credit card info
        //for testing purposes only maybe doesn't work but it's ok


        //valid cc if want to test: 4624 7482 3324 9780 this card is not real and doesn't work on a website with a bank checker
        var valid=lunh(document.getElementById('cc'));

        if (valid==true){

            
        }else{
            alert("credit card not valid");

        }


    }

}

//this function test the cc to know if it works
function luhn(cc){
    //todo take the position mod 2==0 and make that digit *2
    //then sum the position mod 2==1 with the doubled digits, if the doubled is of 2 digits sum the digits

    //if the final sum is sum mod 10==0 then the cc is valid, elsewhere the cc is not
    var sum=0;
    for(i=0;i<16;i++){
        //position even

        if(i%2==0){
            if((cc[i]*2)%10!=0){
                //the doubled is 2 digits
                sum+=(((cc[i]*2)%10)+1)

            }else{
                //the doubled is 1 digit only,everything is fine
                sum+=cc[i]*2

            }

        }else{

            //position is odd
            sum+=cc[i]

        }
        
    }

    if (sum%10==0){
        return true;
    }else{
        return false;
    }

}


//login for the sellers
function loginSellers(){
    for (i=0;i<storedUsers.length;i++) {
    
        if(document.getElementById('userName')==storedUsersSellers[i]){
            if(document.getElementById('userPass')!=storedPassSellers[i]){
                alert("password doesn't match with the one in database");
                break
            }
    
    
            //todo login, change page
    
    
    
        }else{
            alert("user is not in database, wanna register?")
        }
    }
    
}
    
function registerSellers(){
     
        if (document.getElementById('Confirm_Password')!=document.getElementById('Password')){
            alert("Passwords doesn't match");
        }else{
    
            //save logins
            storedUsersSellers.push=document.getElementById('username');
            localStorage.setItem("usernames", JSON.stringify(storedUsersSellers));
    
            //save password
            storedPassSellers.push=document.getElementById('userpass');
            localStorage.setItem("passwords",JSON.stringify(storedPassSellers));
    
            //save info azienda

            
        }
    
}
    //change the mode on the login page from the registration to the login and viceversa
    //0 is login, 1 is register
    function change(mode){

    if (mode==1){
        //registration


    }else{
        //login

        
    }


}
