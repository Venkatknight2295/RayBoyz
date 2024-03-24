const buttons = document.querySelectorAll("button");

function changeButtonColor(e) {
  buttons.forEach(button => button.style.backgroundColor = null);
  e.target.style.backgroundColor = "#0e0a44";
}

buttons.forEach(button => button.addEventListener("click", changeButtonColor));

window.onload = function() {
  const imageSrc = localStorage.getItem("imageSrc");
  const brandName = localStorage.getItem("brandName");
  const title = localStorage.getItem("title");
  const price = localStorage.getItem("price");

  if (imageSrc) {
    document.querySelector('img').src = imageSrc;
  } else {
    // Handle scenario where imageSrc is not available (e.g., display a placeholder)
    console.warn("Image source not found in localStorage.");
  }

  if (brandName) {
    document.querySelector('h1').textContent = brandName;
  } else {
    // Handle scenario where brandName is not available (e.g., display a message)
    console.warn("Brand name not found in localStorage.");
  }

  if (title) {
    document.querySelector('h2').textContent = title;
  } else {
    // Handle scenario where title is not available (e.g., display a message)
    console.warn("Title not found in localStorage.");
  }

  if (price) {
    document.querySelector('p').textContent = `Price: ${price}`;
  } else {
    // Handle scenario where price is not available (e.g., display a message)
    console.warn("Price not found in localStorage.");
  }

  // You can add size selection functionality here (optional)
  // ...
};

const redirectButton = document.getElementById('myButton');

redirectButton.addEventListener('click', function() {
  const priceFromStorage = localStorage.getItem("price");
  let price;

  if (priceFromStorage) {
    try {
      price = parseFloat(priceFromStorage); // Ensure valid number
    } catch (error) {
      console.error("Error parsing price from localStorage:", error);
      price = 0; // Or handle error differently (e.g., display error message)
    }
  } else {
    console.warn("Price not found in localStorage, using default value.");
    price = 0; // Or handle missing price differently
  }

  window.location.href = `https://localhost:3002/pay?amount=1`;
});
