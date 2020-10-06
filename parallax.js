//querySelectorAll not querySelector gets all sections 
const sections = document.querySelectorAll("section")
const bodyTag = document.querySelector("body")

//Runs on page load, scroll and page resize
const addMovement = function () {
    //Find the midle of the current viewport
        //How far down we have scrolled
        const topViewport = window.pageYOffset
        //innerHeight is the height of the browser window
        const midViewport = topViewport + (window.innerHeight / 2)

    // Find the middle of each section from the top
        //index is the number of sections we have
        sections.forEach((section, index) => {
            //offsetTop is how far down scrolled from top
            const topSection = section.offsetTop
            //offsetHeight is heigh of object
            const midSection = topSection + (section.offsetHeight / 2)

    //Compair the middel of our curent viewport with the middel of each section
    //Add an effect based on how close or far they are.
        //Small # = close, Large # = far
        const distanceToSection = midViewport - midSection

    //Add things to apply an effect to
        const image = section.querySelector("img")
        const contentTag = section.querySelector("div")

    //Reduce distanceToSection amount down to resonablely small number
        //Roation
            // 360 is one flip so if distence is 600 / 100 = 6 dg vs 2 flips
            let rotation = distanceToSection / 100
        //Vertical Parallax
            //If distanceToSection is posative then section is to come
            //If distanceToSection is negative then its already passed
                // Maltiply by -1 to move in corect direction
                // Devide by 2 to reduce number
                let contentDist = -1 * distanceToSection / 2

    //Apply rotation in dirent direction for every other section
        //Is index (section order #) divisabel by 2 with a remandor of 0, then its even
        //Check if even then maltiply by -1 to change direction
        // The modulo operator (gets remador) 5 % 2 = 1 (odd), 4 % 2 = 0 (even)
        if (index % 2 == 1) {
        rotation = rotation * -1
        }

    //Efects
        //Rotation
            image.style.transform = `rotate(${rotation}deg)`
            //Rotate text in oposite direction of img by maltiplying by -1
            contentTag.style.transform = `rotate(${-1 * rotation}deg)`
        //Parallax
            contentTag.style.top = `${contentDist}px`
        //Background Color
            //When you are almost scrolled to center of section (-100)
        if (distanceToSection > -100) {
            //Grab background color data from each HTML eliment
            const dataBackground = section.getAttribute("data-background")
            bodyTag.style.backgroundColor = dataBackground
          } 
    })
}

//Run on page load
addMovement()


//Run on scroll
document.addEventListener("scroll", function () {
    addMovement()
})

// Run on page resize
window.addEventListener("resize", function () {
    addMovement()
})