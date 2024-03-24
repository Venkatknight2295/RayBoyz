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
      document.querySelector('p').textContent = price;
    } else {
      console.warn("Title not found in localStorage.");
      // Display a message here (optional)
    }
  }
  catch (error) {
    console.error("Error loading product details:", error);
    // Handle error (e.g., display error message)
  }
};
const redirectButton = document.getElementById('myButton');

redirectButton.addEventListener('click', function() {
  const priceFromStorage = localStorage.getItem("price");

  // Debugging: Log the value retrieved from localStorage
  console.log("Price from localStorage:", priceFromStorage);

  if (priceFromStorage) {
    // If the value is not null or undefined
    const parsedPrice = parseFloat(priceFromStorage);

    // Check if parsedPrice is a valid number
    if (!isNaN(parsedPrice)) {
      // If it's a valid number, use it in the URL
      window.location.href = `http://localhost:3002/pay?amount=${parsedPrice}`;
    } else {
      // If it's not a valid number, handle the error
      console.error("Invalid price value stored in localStorage.");
      // Add appropriate error handling logic here
    }
  } else {
    console.warn("Price not found in localStorage.");
    // Handle the situation where the price is not found in localStorage
  }
});

