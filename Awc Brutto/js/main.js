var trying=document.getElementById("try");


trying.onclick=()=>{
   //TODO repeat code
   //this is needed to inject code into html
   var howeverManyYouNeed=10

   //dictionary to know how many part we need
   let dict={0:"MyFilms",1:"Wishlist",2:"Popular"}



//\/*dizionario con giurid per mettere le funzioni dentro ad un oggetto dizionario*/
//\/*questo è un esempio con una funzione*/ 
//\let dict2=[{
//\
//\nome:"home",
//\azione:()=>{
//\   alert(this.nome)
//\}
//\},{
//\nome:"nome2",
//\azione:()=>{
//\
//\   alert(this.nome)
//\
//\}}];


   document.getElementById("content-container").innerHTML ="";
   //create in an automatic way the 3 parts

   for(i = 0;i<Object.keys(dict).length;i++)
   {

      document.getElementById("content-container").innerHTML += `
      <h1>New Arrival</h1>
            <!--arrow to the left and to the right-->
            <section id=section`+dict[i]+`></section>`;

            for(j=0;j<12;j++){

               document.getElementById("section"+dict[i]).innerHTML += 
               //`<div class=container_`+dict[i]+`>
               `<div class=carousel_card_`+dict[i]+`>
               `+j+`
               </div>`
            }

            console.log("fock")
   }
}




//3 section home 

//my films
//saved in local storage
var myfilms=document.querySelectorAll('div.carousel_card_MyFilms');
var l=0;


//wishlist
//saved in local storage
var wishlist=document.querySelectorAll('div.carousel_card_Wishlist');


//popular
//get from apis
var popular=document.querySelectorAll('div.carousel_card_Popular');


//
//



//only 1 for key
var array =[1,2,3,4,5,6,7,8,9];
window.localStorage.removeItem("name","exanor");
window.localStorage.removeItem("try",JSON.stringify(array));