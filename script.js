 var slider = document.getElementById("superior")

function slide() {
    if (slider.classList == "superior") {
        slider.classList.remove("superior")
        slider.classList.add("superior2")
    }
    else if (slider.classList == "superior2") {
        slider.classList.remove("superior2")
        slider.classList.add("superior3")
    }
    else if (slider.classList == "superior3") {
        slider.classList.remove("superior3")
        slider.classList.add("superior")
    }
}
setInterval(slide, 7000)