const media_path = "media/"
const gifs = [
    media_path + "pic1.gif",
    media_path + "pic2.gif",
    media_path + "pic3.gif"
]

const img = document.getElementById("animation")

let index = 0;

startAnimation();

function startAnimation() {
    const speedValue = parseInt(document.getElementById("speed").value);
    clearInterval(img.dataset.animationInterval);
    img.dataset.animationInterval = setInterval(() => {
        img.src = gifs[index];
        index = (index + 1) % gifs.length;
    }, speedValue)
}


