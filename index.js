
// Your code here

document.addEventListener("DOMContentLoaded",()=>{
  console.log("You got this bro")
    showMovies()
})







function showMovies(){
  fetch('https://my-json-server.typicode.com/petersamson-kingori/Moringa-phase-1-project/location') // fetch the json data
  .then(response => response.json())
  .then(data => {
    locations = data;
    const Title = document.getElementById('img-title')
    Title.textContent = locations[0].title
    const img = document.getElementById("image");
    img.src ="https://iili.io/HcYXqJI.jpg"
    const description = document.getElementById("img-description")
    description.textContent = locations[0].description 
    const title = document.getElementById("Title")
    title.textContent = locations.location[0].title;
  }
  ) 
  
}