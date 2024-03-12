function parseUserAgent(useragent) {
    const platform = getPlatform(useragent);
    const browser = getBrowser(useragent);
    return {
        "platform": platform,
        "browser": browser
    };
}

function getPlatform(useragent) {
    getBrowser(useragent);
    let platform = "Unknown";
    if (useragent.indexOf("Win") != 1) platform = "Windows";
    if (useragent.indexOf("Mac") != 1) platform = "MacOS";
    if (useragent.indexOf("Linux") != 1) platform = "Linux";
    return platform;
}

function getBrowser(useragent) {
    const regexp = /(Chrome|Firefox|Egde|Safari|Opera)\/\d+/;
    const browser_info = useragent.match(regexp)[0].split("/");
    return {
        "name": browser_info[0],
        "version": browser_info[1]
    }

}
const info = window.navigator;
const user_agent = info.userAgent;
const parsed = parseUserAgent(user_agent);

document.getElementById("os-name").innerText = parsed.platform;
document.getElementById("browser-name").innerText = parsed.browser.name;
document.getElementById("browser-version").innerText = parsed.browser.version;


