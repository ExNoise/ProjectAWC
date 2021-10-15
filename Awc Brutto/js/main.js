var trying=document.getElementById("try");

async function Load(mode){
   //mode =0 customer
   //mode =1 seller
   

   //first time use so i enter in the localstorage stuff
   if (localStorage.getItem("first_time")==null){
      localStorage.setItem("first_time","no");
      
      //json of the wishlist
      var jsonWishlist=new Object();
      jsonWishlist.id_movie="";
      jsonWishlist.flag="true";
      
      localStorage.setItem("wishlist", JSON.stringify(jsonWishlist));


      //json of the accounts
      //Clients
      var jsonClients=new Object();
      jsonClients.email="try@try.io";
      jsonClients.password="prova";
      jsonClients.privacy=true;
      jsonClients.marketing=true;

      localStorage.setItem("clients", JSON.stringify(jsonClients));

      //sellers
      var jsonSeller=new Object();
      jsonSeller.email="seller@try.io"; //do a regex for the mail
      jsonSeller.password="prova";  //do a regex for the password
      jsonSeller.pIva="IT1234567890" //luhn formula for the true p.iva

      localStorage.setItem("sellers", JSON.stringify(jsonSeller));
      


   }



   if (mode=="0"){


      //dictionary to know how many part we need
      let dict={0:"MyFilms",1:"Wishlist",2:"Popular"}

      document.getElementById("content-container").innerHTML ="";
      //create in an automatic way the 3 parts
      

      //index get from APIs
      var index=""
      
      for(i = 0;i<Object.keys(dict).length;i++)
      {

         document.getElementById("content-container").innerHTML += `
               <h1>`+dict[i]+`</h1>
               <section id="section `+dict[i]+`"></section>`;

               var popular=await getPopular();


               for(j=0;j<13;j++){

                  index="";

                  //index get from APIs
                  index=popular.results[j].id;


                  //switch dict[i] to id of the movie
                  document.getElementById("section "+dict[i]).innerHTML += 
                  //`<div class=container_`+dict[i]+`>

                  //ok, sooo it works in this way, i need to use a custom dataset called data-<<something>> 
                  //and is called in js via .dataset.<<something>> 
                  `<div class="bg-img carousel_card" id="carousel_card_`+dict[i]+`_`+j+` " data-index="`+index+`" >
                  <img id="carousel_card_poster" src="https://image.tmdb.org/t/p/w500/`+popular.results[j].poster_path+`" height=100% width=100% 
                  data-index="`+index+`" data-poster="`+popular.results[j].poster_path+`" data-backdrop="`+popular.results[j].backdrop_path+`">
                  </div> `;


               }


      }

      document.addEventListener('click',function(e){

         console.log(e.target,e.target.id.includes("carousel_card_poster"));
         if(e.target && e.target.id.includes("carousel_card_poster")){
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
               index=get;

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
      //getposter non esiste più usare invece the attribute data-
   var image=getPoster(id_movie)
   document.getElementById(i).setAttribute("background",image)

   }

}

//popular
//get from apis
var popularCards=document.querySelectorAll('div.carousel_card_Popular');

//document.getElementById().onclick=() =>{

//}
//
//



//only 1 for key
var array =[1,2,3,4,5,6,7,8,9];

//ok per le funzioni sull innerHTML si deve fare così per ogni passo del for si fa 
//una funzione con parametri (dizionario,id del for) così \

//var col=document.getElementById(‘Mydiv’);
//col.innerHTML=’<div onclick=“alert(2);test(123);”>Text</div>’;

async function openPopup(filmId){
   //toogle blur and popup
   document.getElementsByClassName("blur")[0].style.webkitFilter="blur(60px)";
   document.getElementsByClassName("vanish")[0].style.display="block";
   
   var posterPath=await getPoster(filmId);
   var description=await getDetail(filmId);
   console.log(posterPath)

   console.log(document.getElementById("poster_popup").src);
   document.getElementById("poster_popup").src=posterPath;
   document.getElementById("description").innerHTML=description;



   //ok here just put the things like the generation of the poster and the edit of the text
   //put the status of the wishlist button toogle

   
}

function closePopup(){
   //toogle blur and popup
   document.getElementsByClassName("blur")[0].style.webkitFilter="blur(0px)";
   document.getElementsByClassName("vanish")[0].style.display="none";

   //TODO:fuck devo commentare più roba
   document.getElementById("poster_popup").src="";


}

function search(){
   //here we call the search function to search the film from the apis
   var result=search(document.getElementbyId("search_bar").value);
   



   document.getElementById("content-container").innerHTML ="";
//result.... is the json and result.results is the access to the json
   var len=result.results.length;

   for(i=0;i<len;i++){
      document.getElementById("content-container").innerHTML +=`<div><img src="`+result.results[i].poster_path+`" alt="`+ result.results[i].title+`"></img></div>`;
   
   } 



}

//animation for wishlist
function animWishlist(idFilm){


   document.getElementById("star").style.fill="white";
   var wishlist=JSON.parse(localStorage.getItem("wishlist"));
   
   //if this flag is on true that means that the film is not on list
   var check =false;


   for(i=0;i<wishlist.length;i++){
      if (wishlist[i].id_movie ==idFilm){
         if (wishlist[i].flag=="true"){
            wishlist[i]="false";
            document.getElementById("star").style.fill="white";

         }else{
            wishlist[i]="true";
            document.getElementById("star").style.fill="yellow";
            

         }
         check=false;
         break;

      }else{
         check=true;
      }
   }
   if (check==true){
      var json=new Object();
      json.id_movie=idFilm;
      json.flag="true";
      document.getElementById("star").style.fill="yellow";

      wishlist.push(json);

   }

   //update json inside the localstorage
   localStorage.setItem("wishlist", JSON.stringify(wishlist));



//  //analysys of the localstorage to get the status of the wishlist
//  if (localStorage.getItem("wishlist")=="true"){
//
//     //cambiare il fill al svg elements
//     document.getElementById("star").style.fill="white";
//     console.log("a")
//
//    //var svg = document.getElementById("star").style.fill = "white";
//    // var elements = svg.getElementsByClassName("primaryColor");
//    // for (var i = 0; i < elements.length; i++) elements[i].style.fill=color;
//  }



}