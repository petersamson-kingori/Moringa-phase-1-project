
// Your code here

document.addEventListener("DOMContentLoaded",()=>{
    showdata()
})

function showmenu(){
  fetch('https://my-json-server.typicode.com/petersamson-kingori/Moringa-phase-1-project/location') // fetch the json data
  .then(response => response.json())
  .then(data => {
    data.forEach(location=>{
      menu = getElementById("menu") 
      item = document.createElement("li")
      item.textContent =location.title
      menu.appendChild(item)
      

    })
  })

}



function showdata(){
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
      console.log("clicked")
      fetch('https://my-json-server.typicode.com/petersamson-kingori/Moringa-phase-1-project/location') 
      .then(response => response.json())
      .then(data => {
        data.forEach(location => {
          Title = document.getElementById('img-title')
          Title.textContent = location.title;
          const description = document.getElementById("img-description")
          description.textContent = location.description
          const img = document.getElementById("image");
          img.src = location.image_url

          
        })
       
        
        
        
        
        



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

