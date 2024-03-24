const buttons = document.querySelectorAll("button");
function changeButtonColor(e){
   buttons.forEach(button => button.style.backgroundColor = null);
    e.target.style.backgroundColor = "#0e0a44";
}

buttons.forEach(button => button.addEventListener("click", changeButtonColor));


window.onload = function() {
    const imageSrc = localStorage.getItem("imageSrc");
    const brandName = localStorage.getItem("brandName");
    const title = localStorage.getItem("title");
    const price = localStorage.getItem("price");
  
    document.querySelector('img').src = imageSrc;
    document.querySelector('h1').textContent = brandName; // Assuming brand name goes in h1
    document.querySelector('h2').textContent = title;
    document.querySelector('p').textContent = `Price: ${price}`;
  
    // You can add size selection functionality here (optional)
    // ...
  }
  
