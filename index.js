
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
    img.src = locations[0].image_url
    const description = document.getElementById("img-description")
    description.textContent = locations[0].description
    
   

    

  }
  
  ) 
   nextButton = document.getElementById('next')
    nextButton.addEventListener("click",()=>{
      fetch('https://my-json-server.typicode.com/petersamson-kingori/Moringa-phase-1-project/location') 
      .then(response => response.json())
      .then(data => {
        locations = data
        const Title = document.getElementById('img-title')
        Title.textContent = locations[1].title
        const img = document.getElementById("image");
        img.src = "https://iili.io/HcVrdrJ.jpg"
        const description = document.getElementById("img-description")
        description.textContent = locations[1].description


      })
    }
    )
  }
     

  






let reviewList = document.getElementById("review-list");
let reviewForm = document.getElementById("review-form");
reviewForm.addEventListener("submit", function(event) {
  event.preventDefault();
  let review = reviewForm.elements.review.value;
  let newReview = document.createElement("li");

  newReview.textContent = review;

  reviewList.appendChild(newReview);
  
  
});

