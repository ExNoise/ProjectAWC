//file to use the APIs
//and btw i think it could be better but idk how

//currently using the v3 version of the api cause 
//the v4 has too little documentation online and on their site

//ex's api key
const api_key="ec95c0a0cf2e7d9989683cd7cdcdbf80"

//the connection is by url and the text need to be uri coded


//search function 
async function search(text){

    var search_text=encodeURIComponent(text)
    const response = await fetch('https://api.themoviedb.org/3/search/keyword?api_key='+api_key+'&query='+search_text+'&page=1');
    const myJson = await response.json(); //extract JSON from the http response
        
    return myJson;

}


//get popular keywords
async function getPopular(){

    const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key='+api_key+'&language=en-US&page=1');
    const myJson = await response.json(); //extract JSON from the http response
        
    return myJson;

}


//get genres to put in filters
async function getGenres(){
    const response=await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key='+api_key+'&language=en-US')
    const myJson = await response.json(); //extract json from response

    return myJson

}

//search by id....probably used in the wishlist
async function findById(id){

    const response=await fetch('https://api.themoviedb.org/3/find/'+id+'?api_key='+api_key+'&language=en-US&external_source=tvdb_id')
    const myJson = await response.json(); //extract json from response

    return myJson
}


//get get treanding movies in the past week
async function getTreanding(){

    const response=await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key='+api_key)
    const myJson = await response.json(); //extract json from response

    return myJson

}

//get the horizontal image of the movie from the id
async function getImages(id_movie){

    const response=await fetch('https://api.themoviedb.org/3/movie/'+id_movie+'/images?api_key='+api_key+'&language=it-IT');
    const myJson = await response.json(); //extract json from response

    var imageLink='https://image.tmdb.org/t/p/w500/'+myJson.posters.file_path

    return imageLink
}

//get the vertical image from the id
async function getPoster (id_movie){

    const response=await fetch('https://api.themoviedb.org/3/movie/'+id_movie+'?api_key='+api_key+'&language=en-US')
    
    const myJson = await response.json(); //extract json from response
    
    var imageLink='https://image.tmdb.org/t/p/w500'+myJson.backdrop_path;
    
    console.log(imageLink)
    
    return imageLink

}

async function getDetail (id_movie){
    const response=await fetch('https://api.themoviedb.org/3/movie/'+id_movie+'?api_key='+api_key+'&language=en-US')
    
    const myJson = await response.json(); //extract json from response
    
    var details=myJson.overview;

    return details;
    

}


async function detail(id_movie){

    const response=await fetch('https://api.themoviedb.org/3/movie/'+id_movie+'?api_key='+api_key+'&language=en-US')
    
}


