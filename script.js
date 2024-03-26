// vvvvvvv GALERIA vvvvvvv

const images = document.querySelectorAll('.gal-img')
const modal = document.querySelector('.modal')

images.forEach((image) => {
    image.addEventListener("click", function(e) {
        const modalImg = document.querySelector('.modal img')
        modalImg.setAttribute( 'src', image.getAttribute('src'))
        modal.style.display = "flex"

        modal.addEventListener("click", function() {
            modal.style.display = "none"
        })
    })
})


const burger = document.querySelector(".burger-box")

burger.addEventListener("click", () => {
    if (burger.checked) {
        document.querySelector(".navbar").style.top = "300px"
    } else {
        document.querySelector(".navbar").style.top = "0px"
    }
})