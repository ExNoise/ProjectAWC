var trying=document.getElementById("try");

function Load(mode){
   //mode =0 customer
   //mode =1 seller

   if (mode==0){


      //dictionary to know how many part we need
      let dict={0:"MyFilms",1:"Wishlist",2:"Popular"}

      document.getElementById("content-container").innerHTML ="";
      //create in an automatic way the 3 parts
      

      //index get from APIs
      var index=""
      
      for(i = 0;i<Object.keys(dict).length;i++)
      {

         document.getElementById("content-container").innerHTML += `
               <h1>New Arrival</h1>
               <section id="section `+dict[i]+`"></section>`;

               for(j=0;j<13;j++){

                  index="";

                  //index get from APIs
                  index="";

                  //switch dict[i] to id of the movie
                  document.getElementById("section "+dict[i]).innerHTML += 
                  //`<div class=container_`+dict[i]+`>

                  //ok, sooo it works in this way, i need to use a custom dataset called data-<<something>> 
                  //and is called in js via .dataset.<<something>> 
                  `<div class="bg-img carousel_card" id="carousel_card_`+dict[i]+` " data-index="`+index+`" >
                  `+j+`
                  </div> `;


               }


      }

      document.addEventListener('click',function(e){

         console.log(e.target);
         if(e.target && e.target.id.includes("carousel_card")){
            //do something
            openPopup(e.target.dataset.index);






            //popup for the search
         }else if(e.target.id.includes("content-container")&& localStorage.getItem("mode")==0){

            openPopup(e.target.dataset.index);

           
         }

      });



   }else{




   }


}


trying.onclick=()=>{
   //TODO repeat code

   //dictionary to know how many part we need
   let dict={0:"MyFilms",1:"Wishlist",2:"Popular"}

   document.getElementById("content-container").innerHTML ="";
   //create in an automatic way the 3 parts
   

   //index get from APIs
   var index=""
   
   for(i = 0;i<Object.keys(dict).length;i++)
   {

      document.getElementById("content-container").innerHTML += `
            <h1>New Arrival</h1>
            <section id="section `+dict[i]+`"></section>`;

            for(j=0;j<13;j++){

               index="";

               //index get from APIs
               index="";

               //switch dict[i] to id of the movie
               document.getElementById("section "+dict[i]).innerHTML += 
               //`<div class=container_`+dict[i]+`>
               
               //ok, sooo it works in this way, i need to use a custom dataset called data-<<something>> 
               //and is called in js via .dataset.<<something>> 
               `<div class="bg-img carousel_card" id="carousel_card_`+dict[i]+` " data-index="`+index+`" >
               `+j+`
               </div> `;
               

            }


   }

   document.addEventListener('click',function(e){
                  
      console.log(e.target);
      if(e.target && e.target.id.includes("carousel_card")){
         //do something
         openPopup(e.target.dataset.index);
         var index_film=e.target.dataset.index;


         document.getElementsByTagName("")

      }

   });


}




//3 section home 

//my films
//saved in local storage
var myfilms=document.querySelectorAll('div.carousel_card_MyFilms');
var l=0;


//wishlist
//saved in local storage
var wishlist=document.querySelectorAll('div.carousel_card_Wishlist');
wishlist.onload=function(){
   for(i in wishlist){
      var image=getPoster(id_movie)
   document.getElementById(i).setAttribute("background",image)

   }

}

//popular
//get from apis
var popular=document.querySelectorAll('div.carousel_card_Popular');

//document.getElementById().onclick=() =>{

//}
//
//



//only 1 for key
var array =[1,2,3,4,5,6,7,8,9];
window.localStorage.removeItem("name","exanor");
window.localStorage.removeItem("try",JSON.stringify(array));



//TODO click on cards and popup with info
//todo add connection to APIs
//todo menu e navbar



//ok per le funzioni sull innerHTML si deve fare così per ogni passo del for si fa 
//una funzione con parametri (dizionario,id del for) così \

//var col=document.getElementById(‘Mydiv’);
//col.innerHTML=’<div onclick=“alert(2);test(123);”>Text</div>’;

function openPopup(filmId){
   //toogle blur and popup
   document.getElementsByClassName("blur")[0].style.webkitFilter="blur(60px)";
   document.getElementsByClassName("vanish")[0].style.display="block";
   
   var posterPath=getPoster(filmId).posters.file_path;


   document.getElementById("poster_popup").src=posterPath;



   //ok here just put the things like the generation of the poster and the edit of the text
   //put the status of the wishlist button toogle

   
}

function closePopup(){
   //toogle blur and popup
   document.getElementsByClassName("blur")[0].style.webkitFilter="blur(0px)";
   document.getElementsByClassName("vanish")[0].style.display="none";

   //


}

function search(){
   var result=search(document.getElementbyId("search_bar").value);

   document.getElementById("content-container").innerHTML ="";

   var len=result.results.length;

   for(i=0;i<len;i++){
      document.getElementById("content-container").innerHTML +=`<div><img src="`+result.results[i].poster_path+`" alt="`+ result.results[i].title+`"></img></div>`;
   
   } 



}

