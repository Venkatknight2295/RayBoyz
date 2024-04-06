window.onload = function() {
  try {
    const imageSrc = localStorage.getItem("imageSrc");
    const brandName = localStorage.getItem("brandName");
    const title = localStorage.getItem("title");
    const price = localStorage.getItem("price");

    if (imageSrc) {
      document.querySelector('.img img').src = imageSrc;
    } else {
      console.warn("Image source not found in localStorage.");
      // Set a default placeholder image here (optional)
    }

    if (brandName) {
      document.querySelector('.right-side h1').textContent = brandName;
    } else {
      console.warn("Brand name not found in localStorage.");
      // Display a message here (optional)
    }

    if (title) {
      document.querySelector('.right-side h2').textContent = title;
    } else {
      console.warn("Title not found in localStorage.");
      // Display a message here (optional)
    }

    if (price) {
      document.querySelector('.right-side p').textContent = price;
    } else {
      console.warn("Price not found in localStorage.");
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
    const quantity = parseInt(document.getElementById('itemQuantity').value);

    // Check if parsedPrice and quantity are valid numbers
    if (!isNaN(parsedPrice) && !isNaN(quantity)) {
      // If they're valid numbers, calculate the total amount
      const totalPrice = parsedPrice * quantity;

      // Redirect to the payment page with the total amount
      window.location.href = `https://finalbackend-84xa.onrender.com/pay?amount=${totalPrice}`;
    } else {
      // If either price or quantity is not a valid number, handle the error
      console.error("Invalid price or quantity value stored in localStorage.");
      // Add appropriate error handling logic here
    }
  } else {
    console.warn("Price not found in localStorage.");
    // Handle the situation where the price is not found in localStorage
  }
});

const buttons = document.querySelectorAll('[id^="btn"]'); // Select all buttons with IDs starting with "btn"

buttons.forEach(button => {
  button.addEventListener('click', function() {
    buttons.forEach(element => {
      element.style.background = ''; // Reset background color for all buttons
      element.style.color = ''; // Reset text color for all buttons (optional)
    });
    this.style.background = 'darkblue'; // Set clicked button's background color to red
    // You can also set a different color for the text here (optional)
  });
});

const decrementBtn = document.getElementById('decrement');
const incrementBtn = document.getElementById('increment');
const itemQuantity = document.getElementById('itemQuantity');

decrementBtn.addEventListener('click', function() {
  // Decrement the quantity by 1 if it's greater than 1
  if (parseInt(itemQuantity.value) > 1) {
    itemQuantity.value = parseInt(itemQuantity.value) - 1;
  }
});

incrementBtn.addEventListener('click', function() {
  // Increment the quantity by 1
  itemQuantity.value = parseInt(itemQuantity.value) + 1;
});

itemQuantity.addEventListener('input', function() {
  // Ensure the entered value is greater than or equal to 1
  if (this.value < 1) {
    this.value = 1;
  }
});
