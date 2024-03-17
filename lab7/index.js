function isInternal(link) {
    if (link.startsWith("http://internal.com")) return false;
    return /:\/\//.test(link);
}
const links = document.getElementsByTagName("a");
Array.from(links).forEach(link => {
    const href = link.getAttribute("href")
    if (href !== null && isInternal(href)) {
        link.style.color = "orange"
    }
})
