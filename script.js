let i = 0;
let result = Math.floor(Math.random() * 3);

// API STUFF AND THINGS
// DON'T GO TOO HAM ON THIS, I HAVE A LIMIT OF 500 API CALLS AND ANYTHING MORE IS A CENT PER CALL - Juan

// RapidAPI code
let apiKeySecured = '6afc8b8887msh24d5be132ab6085p10781fjsne263484b90dc';
const search = async () => {fetch('api_endpoint_here', 
{headers: {"x-api-key": apiKeySecured}} ).then(function(response) {
  if(response.ok) {
      response.json().then(function(json) { 
        const resJson = JSON.stringify(json)
        console.log(resJson);
        return resJson;
})}})};


// Learning Objects code
const url = 'https://learning-objects-v2.p.rapidapi.com/search-provider?keywords=elementary math&lang=en&provider=amazon&sort=popularity&model=strict&max=3&page=0';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '6afc8b8887msh24d5be132ab6085p10781fjsne263484b90dc',
    'X-RapidAPI-Host': 'learning-objects-v2.p.rapidapi.com'
  }
};

// Retrieving API info
fetch(url, options)
	.then(res => res.json())
  .then(function (myJson) {
    console.log(myJson)
    console.log(result);
    let img = document.querySelector(".books");
    let name = document.querySelector(".name");
    let url = document.querySelector(".url");
    let link = document.querySelector(".link")
    let description = document.querySelector(".description");
    let author = document.querySelector(".author");
  
    const imgN = myJson.response.content[result].picture
    const nameN = myJson.response.content[result].title
    const urlN = myJson.response.content[result].url
    const descriptionN = myJson.response.content[result].description
    const authorN = myJson.response.content[result].author[0].name
    
  name.innerHTML = nameN;
  url.innerHTML = urlN;
  link.href = urlN;
  description.innerHTML = descriptionN;  
  author.innerHTML = authorN;  
  img.src = imgN;
})



// fetch(url, options)
// 	.then(res => res.json())
//   .then(function (myJson) {
//     console.log(myJson)
//     let img = document.querySelector(".books");
//     let name = document.querySelector(".name");
  
//     // While loop for every book on the page
//       while (i < 3) {
//     let result = Math.floor(Math.random() * 3);
//     console.log(result);
//     const imgN = myJson.response.content[result].picture
//     const nameN = myJson.response.content[result].title
    
//     name.innerHTML = nameN;
//     img.src = imgN;}
// })