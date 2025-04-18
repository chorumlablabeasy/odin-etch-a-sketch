const display = document.querySelector(".display")

const displayWidth = 800

const resolutionButton = document.querySelector(".button")

function pixelCalculator(pixelInput=16) {
    const pixelDimension = 800 / pixelInput
}

function pixelMaker() {
    const newPixel = document.createElement("div")
    newPixel
    newPixel.classList.add("flex-item")
    display.appendChild(newPixel)
}

for (i = 0; i < 16*16; i++) {
    pixelMaker()
}