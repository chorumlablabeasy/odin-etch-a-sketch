const display = document.querySelector(".display")

const displayWidth = 800

const gridSizeButton = document.querySelector(".button")

let gridSize = 16

let pixelSize = "50px"

finaleDisplay()

gridSizeButton.addEventListener("click", function getPixelInput() {
    display.innerHTML = ""
    let firstInput = Number(prompt("Enter a number between 1 and 100"))
    if (!isNaN(firstInput) && firstInput >=1 && firstInput <=100) {
        gridSize = firstInput
    } else {
        alert("You entered an incorrect number!")
    }
    pixelCalculator()
    finaleDisplay()
})

function pixelCalculator() {
    pixelSize = `${displayWidth / gridSize}px`
}

function pixelMaker() {
    const newPixel = document.createElement("div")
    newPixel.classList.add("flex-item")
    newPixel.style.height = pixelSize
    newPixel.style.width = pixelSize

    newPixel.addEventListener("mouseover", () => {
        newPixel.style.backgroundColor = "darkmagenta"
    })

    display.appendChild(newPixel)
}

function finaleDisplay() {
    for (i = 0; i < gridSize * gridSize; i++) {
        pixelMaker()
    }
}


