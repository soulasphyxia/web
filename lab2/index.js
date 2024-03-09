const MEDIA_PATH = "./media/"
const images = [
    MEDIA_PATH + `${1}.jpg`,
    MEDIA_PATH + `${2}.jpg`,
    MEDIA_PATH + `${3}.jpg`,
    MEDIA_PATH + `${4}.jpg`,
    MEDIA_PATH + `${5}.jpg`
]
const image_field = document.getElementById("image-field")
const error_field = document.getElementById("error-field")
const show_btn = document.getElementById("show")
const input = document.getElementById("number")

const prev_btn = document.getElementById("prev-btn")
const next_btn = document.getElementById("next-btn")

let index = 1;

document.getElementById("total").innerHTML = images.length 

if(images.length > 0){
    image_field.src = images[0];
}


show_btn.addEventListener("click", () => {
    const input_value = parseInt(input.value)
    if(input_value <= 0 
        || input_value > images.length 
        || !/\d/.test(input_value)){
        error_field.innerHTML = "Ошибка!"
    }else{
        error_field.innerHTML = ""
        image_field.src = images[input_value - 1]
    }
})

prev_btn.addEventListener("click", () => {
    if(input.value - 1 > 0) input.value = parseInt(input.value) - 1;
})

next_btn.addEventListener("click", () => {
    if(input.value != images.length) input.value = parseInt(input.value) + 1;
     
})
