window.onload = function() {
  try {
    const imageSrc = localStorage.getItem("imageSrc");
    const brandName = localStorage.getItem("brandName");
    const title = localStorage.getItem("title");
    const price = localStorage.getItem("price");

    if (imageSrc) {
      document.querySelector('img').src = imageSrc;
    } else {
      console.warn("Image source not found in localStorage.");
      // Set a default placeholder image here (optional)
    }

    if (brandName) {
      document.querySelector('h1').textContent = brandName;
    } else {
      console.warn("Brand name not found in localStorage.");
      // Display a message here (optional)
    }

    if (title) {
      document.querySelector('h2').textContent = title;
    } else {
      console.warn("Title not found in localStorage.");
      // Display a message here (optional)
    }

    if (price) {
      try {
        const parsedPrice = parseFloat(price);
        document.querySelector('p').textContent = `Price: ${parsedPrice}`;
      } catch (error) {
        console.error("Error parsing price from localStorage:", error);
        document.querySelector('p').textContent = "Price unavailable"; // Or handle differently
      }
    } else {
      console.warn("Price not found in localStorage, using default value.");
      document.querySelector('p').textContent = "Price unavailable"; // Or handle differently
    }
  } catch (error) {
    console.error("Error accessing localStorage:", error);
    // Handle general localStorage access error here (optional)
  }
}

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

  window.location.href = `http://localhost:3002/pay?amount=${price}`;
});
