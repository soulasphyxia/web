const MEDIA_PATH = "./media/"
const images = [
    MEDIA_PATH + `${1}.jpg`,
    MEDIA_PATH + `${2}.jpg`,
    MEDIA_PATH + `${3}.jpg`,
    MEDIA_PATH + `${4}.jpg`,
    MEDIA_PATH + `${5}.jpg`,
]

const image_field = document.getElementById("image-field")
const show_btn = document.getElementById("show")


image_field.src = images[0]

let prevIndex = 1;
show_btn.addEventListener("click", () => {
    let index = getRandomIndex()
    image_field.src = images[index]
    prevIndex = index
})


function getRandomIndex(){
    while(true){
        let index = Math.floor(Math.random()*images.length)
        if(index != prevIndex) return index
    }
}


