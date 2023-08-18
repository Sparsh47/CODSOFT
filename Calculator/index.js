const display = document.getElementById("display")
const buttons = document.querySelectorAll(".button")
const audio=new Audio("./Audio/audio.mp3")

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id === "=") {
            display.value = eval(display.value)
            audio.play()
        } else if (btn.id === "ac") {
            display.value = ""
            audio.play()
        } else if (btn.id === "de") {
            display.value = display.value.slice(0, -1)
            audio.play()
        } else if (btn.id === "inv") {
            if (display.value.slice(0, 1) === "-") {
                display.value = display.value.slice(1)
            audio.play()
            } else {
                display.value = "-" + display.value
            audio.play()
            }
        } else {
            display.value += btn.id;
            audio.play()
        }
    })
})