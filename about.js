

function cursorAnimation(){
    // document.addEventListener("mousemove", function(dets){
    //     gsap.to ("#crsr",{
    //         left:dets.x,
    //         top:dets.y,
 
    //     })
    // })
    Shery.makeMagnet("#nav-part2 h4");
    Shery.mouseFollower({
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 0.3,
    });
   
}
cursorAnimation()
function homeredirect() { const redirectButton = document.getElementById("Homepagere");
redirectButton.addEventListener("click", () => {
  window.location.href = "index.html";
});}
function aboutredirect() { const redirectButton = document.getElementById("aboutpagere");
redirectButton.addEventListener("click", () => {
  window.location.href = "about.html";
});}
function productredirect() { const redirectButton = document.getElementById("productpagere");
redirectButton.addEventListener("click", () => {
  window.location.href = "product.html";
});}
function contactredirect() { const redirectButton = document.getElementById("contactpagere");
redirectButton.addEventListener("click", () => {
  window.location.href = "contact.html";
});}
homeredirect() 
aboutredirect();
productredirect();
contactredirect();

const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

// Clear initial state for consistent behavior
let isOpen = false;

// Toggle menu visibility and icon class based on state
toggleBtn.addEventListener('click', function() {
  isOpen = !isOpen; // Toggle state

  dropDownMenu.classList.toggle('open', isOpen); // Update class based on state

  toggleBtnIcon.classList = isOpen ? 'ri-close-line' : 'ri-menu-line';
});