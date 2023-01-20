document.addEventListener('DOMContentLoaded',()=>{

    fetch('https://my-json-server.typicode.com/petersamson-kingori/Moringa-phase-1-project')
    .then((response) => response.json())
    .then((location) => console.log(location));
    

    Hello = document.getElementById('Title')
    Hello.textContent = "Hello World"
    
    Title = document.getElementById("img-title")
    

    
})