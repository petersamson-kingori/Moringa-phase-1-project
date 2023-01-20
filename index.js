
// Your code here

document.addEventListener("DOMContentLoaded",()=>{
    console.log("Content Loaded bro");
    showMovies()
})
function showMovies(){
    fetch("")
  .then(response => response.json())
  .then(location => { 
    console.log(location)})}