/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } 
  else {
    x.style.display = "block";
  }
}


const lightbox = document.createElement("div")
lightbox.id = "lightbox"
document.body.appendChild(lightbox)

const images = document.querySelectorAll("img")
images.forEach(image => {
	image.addEventListener("click", e => {
		lightbox.classList.add("active")
		const img = document.createElement("img")
		img.src = image.src
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
		lightbox.appendChild(img)
	}) 
})

lightbox.addEventListener("click", e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove("active")
})
