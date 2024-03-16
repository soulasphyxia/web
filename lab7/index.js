function isInternal(link) {
    if (link.startsWith("http://internal.com")) return false;
    return /:\/\//.test(link);
}

const links = document.getElementsByTagName("a");

Array.from(links).forEach(link => {
    const href = link.innerHTML
    console.log(href)
    if (isInternal(href)) {
        link.style.color = "orange"
    }
})