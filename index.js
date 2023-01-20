
// Your code here

document.addEventListener("DOMContentLoaded",()=>{
    console.log("Content Loaded bro");
    showMovies()
})
function showMovies(){
    fetch("https://my-json-server.typicode.com/petersamson-kingori/Moringa-phase-1-project/location")
  .then(response => response.json())
  .then(location => { 
    console.log(location)})}