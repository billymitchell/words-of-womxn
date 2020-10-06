//Counter Set
let number = 0

//An array of imgs
const stamps = [
    "circles.svg",
    "heart.svg",
    "moon.svg",
    "rainbow.svg",
    "shooting-star.svg",
    "waves.svg"
  ]

//Get Html stamp location
const stampsTag = document.querySelector("div.stamps")


//Create Audio Eliment


//excepts XY from addStamp function
const addStamp = function (x, y) {  
  //Creates img
  const img = document.createElement("img")
  //source of img is "number" in stamps img array. 
  img.setAttribute("src", stamps[number])
  //Pull X,Y add "px". Subtract half widow width. Parrent container is over 50% over
  img.style.left = (x - window.innerWidth/2) + "px"
  img.style.top = y + "px"
  //stick img in child eliment of html tag
  stampsTag.appendChild(img)
  //cycel though each img
  number = number + 1
  //when you click to make length longer then list, reset to object 1
  if (number > stamps.length - 1){
    number = 0
  }

  //Map Source of audio
  const audio = document.createElement("audio")
  audio.setAttribute("src", "plop.mp3")
  audio.play()
  //Chrome bug, needs src to be reset
  audioo.src = audio.src;
  
}

//Listen for click, run addStamp, pass in XY location of mouse
document.addEventListener("click", function (event) {
    addStamp(event.pageX, event.pageY)
})

