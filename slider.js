
const buttonNextSlide = document.getElementById("bntNextSlide")
const slide1 = document.getElementById("slide1")
const slide2 = document.getElementById("slide2")
const slide3 = document.getElementById("slide3")

const slides = ["slider-img/slide1.png", "slider-img/slide2.png", "slider-img/slide3.png", "slider-img/slide4.png"]

let linkSlide1 = 0
let linkSlide2 = 1
let linkSlide3 = 2

slide1.src = slides[linkSlide1]
slide2.src = slides[linkSlide2]
slide3.src = slides[linkSlide3]

function functionNextSlide() {
    if (linkSlide1 == 3) {
        linkSlide1 = 0
    } else {
        linkSlide1 += 1
    }

    if (linkSlide2 == 3) {
        linkSlide2 = 0
    } else {
        linkSlide2 += 1
    }

    if (linkSlide3 == 3) {
        linkSlide3 = 0
    } else {
        linkSlide3 += 1
    }

    slide1.src = slides[linkSlide1]
    slide2.src = slides[linkSlide2]
    slide3.src = slides[linkSlide3]
}





















