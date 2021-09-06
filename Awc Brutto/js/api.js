//file to use the APIs
//and btw i think it could be better but idk how

//currently using the v3 version of the api cause 
//the v4 has too little documentation online and on their site

//ex's api key
var api_key=ec95c0a0cf2e7d9989683cd7cdcdbf80

//the connection is by url and the text need to be uri coded


//search function 
function search(api_key,text){


    const userAction = async () => {
        const response = await fetch('http://example.com/movies.json');
        const myJson = await response.json(); //extract JSON from the http response
        
        
      }

    return myJson;

}