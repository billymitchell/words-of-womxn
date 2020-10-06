const headerTag = document.querySelector("header")

// when we scroll the page, at a certain point (80px)
// toggle a class to the header
document.addEventListener("scroll", function () {
    //const pixels is inside of this fucntion
    //window.pageYOffset is out of the box
    const pixels = window.pageYOffset
    if (pixels > 80) {
       //adds class to header
      headerTag.classList.add("scrolled")
    } else {
      headerTag.classList.remove("scrolled")
    }
  })