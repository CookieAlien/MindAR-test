const exampleTarget = document.querySelector("#example-target")
const exampleImage = document.querySelector("#example-image")
const messageBtn = document.querySelector("#message-btn")
console.log(exampleTarget)
localStorage.clear()
exampleTarget.addEventListener("targetFound", (event) => {
  console.log("target found")
  scanned = localStorage.getItem("scanned")
  if (scanned) {
    messageBtn.textContent = "You have already scanned this item."
    messageBtn.style.display = "block"
  } else {
    localStorage.setItem("scanned", "true")
    messageBtn.textContent = "You've scanned a new item!"
    messageBtn.style.display = "block"
  }
})
messageBtn.addEventListener("click", (event) => {
  messageBtn.style.display = "none"
})
exampleTarget.addEventListener("targetLost", (event) => {
  console.log("target lost")
})

exampleImage.addEventListener("click", (event) => {
  console.log("image click")
  window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank").focus()
})
