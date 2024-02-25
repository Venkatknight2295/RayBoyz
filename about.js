

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